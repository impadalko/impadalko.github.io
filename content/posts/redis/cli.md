---
title: "Creating Redis with TS - CLI"
summary: "Creating the Command Line Interface"
date: 2023-07-02
---

## Introduction

This post aims to describe the process of writing a Command Line Interface (CLI) in Typescript for
Redis. All the code related to this post can be found in [this
repository](https://github.com/impadalko/redts-cli).

### Is a CLI even necessary?

Strictly speaking, no, but it makes the interaction with the server a lot more convenient.

### Why start with the CLI?

1. It's very easy to test as we can always connect to a true redis server and see if it works;
2. It provides a nice foundation to test the server when implementing it;
3. It gives hands-on experience in understanding the network protocol used by Redis.

### Could you implement this as a TS module?

Yes and a module is arguably more useful (at least when considering pratical applications of Redis).
However a CLI seems more interesting to me because for a module:

1. I would have to design its API;
2. There's more repetitive work as I would need to define the calling method and signature for each
   command. For the CLI, this is not a worry at all.

## How does this work?

Redis uses [Redis Serialization Protocol (RESP)](https://redis.io/docs/reference/protocol-spec/)
for communicating with the redis server. For implementing the CLI, implementing this protocol is
then necessary. Luckily this is not hard as described by the documentation:

> RESP is a compromise between the following things:
>
> 1. Simple to implement.
> 2. Fast to parse.
> 3. Human readable.

### Sending the request

User input is read in loop using the [prompt
API](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt). Given that this API is built
to be compatible to the web API, it is not very customizable. This is fine for a project such as
this one, but more complex features (such as an autocomplete) would require a different approach
like implementing my own user input reader. Input reading is done directly in the code [main
method](https://github.com/impadalko/redts-cli/blob/main/src/cli.ts) which is also responsible for
parsing user arguments and connecting to the server. Note that the server is started using a
different file to allow for the main method to be reused in integration tests.

After the user input is read, it gets encoded as an array of bulk strings as dictated by [the
protocol](https://redis.io/docs/reference/protocol-spec/#send-commands-to-a-redis-server) and sent
to the server. Given that the input is always sent in the same type, the logic is simple and can be
implemented in few lines of code as seen
[here](https://github.com/impadalko/redts-cli/blob/main/src/inputEncoder.ts).

### Processing the response

While encoding the user input is easy, decoding the response is a little bit trickier. This is
because the output can be in multiple types and these types can even be recursive (array of arrays
for example). In practice, [Redis does not support nested data
structures](https://redis.com/redis-enterprise/data-structures/) so the response will not contain
recursive types, however, since this is allowed by the protocol, I decided to parse this anyway.
Unfortunately, this ended making the [decoding of the output of the response the most complex
part of the CLI](https://github.com/impadalko/redts-cli/blob/main/src/outputDecoder.ts).

Also, while I do not intend to implement command pipelining, I made the output decoder able to
process it anyway as it seemed natural to me while implementing.

## Testing

The CLI as a whole was tested while it was being developed against a true redis server to check if
the server would interpret the requests correctly and the responses would be displayed correctly.

All code is tested by unit testing (100% coverage). Most of these tests are very method specific
however the [tests for the command processor (which is the class that encodes the request and
process the
response)](https://github.com/impadalko/redts-cli/blob/main/test/commandProcessor.test.ts) act as
more complete test by checking that all parts are communicating correctly.

Initially, I thought that implementing integration tests would be too hard as I would need to:

1. Spin up a redis server instance;
2. Mock user input;
3. Read console output.

However, integration tests offer more value than unit tests by checking that the code actually
behaves correctly as a whole. I decided to give it a shot anyway and, after some research, I
realized that 1) could be solved using [service
containers](https://docs.github.com/en/actions/using-containerized-services/about-service-containers)
and 2) and 3) could be solved by stubbing the prompt and the log methods. Integration tests were
then implemented in [this
commit](https://github.com/impadalko/redts-cli/commit/fe59ae3820ae225238ff81675cb04ee72173e82d).


## Conclusion

Implementing this CLI took longer than what I expected (~~two~~ three months since my last blog post
thanks also to the release of The Legend of Zelda: Tears of the Kingdom) but I think that the time I
spent was worth it because:

1. It gave me a solid foundation in understanding Deno tooling
2. I understood better how Redis works under the hood.

This experience makes me feel that implementing the server will be easier than what I first thought.
Let's hope I don't regret thinking like this!
