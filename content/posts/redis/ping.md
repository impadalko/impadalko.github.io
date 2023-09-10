---
title: "Creating Redis with TS - Pinging the server"
summary: "Creating the basic server structure"
date: 2023-09-10
---

## Introduction

This post describes the first step in creating a Redis server in Typescript. The goal of this first
step is to have a functional server with a single command: `PING`. All code related to this post can
be found in [this repository](https://github.com/impadalko/redts-server).

## Implementing

### Overall structure

The planned server structure is as follows (see a diagram below): for each client, a connection
handler is created which manages all communication between the server and the client. This
connection handler is responsible for processing the user input, routing the command to the correct
processor and returning the output.

The command processors are responsible for communicating with the storage layer and other
background resources (if any). This follows a [strategy
pattern](https://refactoring.guru/design-patterns/strategy) which will allow for implementing
different commands more easily and without affecting already implemented ones.

![Server structure](/serverStructure.png)

[Drawio
version](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#R7VlLc5swEP41PsZjwDx8jB9NDmknU3emzamjgAxKBaJC2Li%2FvhIIAxF2qONnpie0q0VIu9%2B%2BRM%2BYhNkdBXHwmXgQ9%2FSBl%2FWMaU%2FXtYHh8IfgrAuOaQ0Lhk%2BRJ4Uqxhz9geWbkpsiDyYNQUYIZihuMl0SRdBlDR6glKyaYguCm1%2BNgQ8VxtwFWOV%2BRx4LCq6j2xX%2FHiI%2FKL%2BsWaNiJgSlsDxJEgCPrGosY9YzJpQQVozCbAKxUF6pl%2BK9T1tmNxujMGJdXpjOVuxbGmdO%2BPOL93TnvjxE4Y0mrbEEOJUnlrtl61IFlKSRB8Uqg54xXgWIwXkMXDG74kbnvICFmFMaHy4QxhOCCeV0RCIuNPZAEuSvi3l11%2FIgS0gZzGoseYo7SELI6JqLlLO21KiElGZKelUZyHIkL6gZxzAkE0hQ%2BJu1K73xgVTdv6jRblGjhZlQCOEHrevT%2Bp2ScuImyQF%2FywU0Pc6qST7yxXPOAGVJhW9EonJhvtFi7UJSMRv0OJAlSSgLiE8igGcVd9w0bCXzQEgszfUCGVtLrwQpI01jcxvS9Q%2F5fk48CaJvluQ0q09O15LaCoKEpNSFOxQt0cm14kO2Q84q5IQOdkKqhJAEBoUYMLRs%2Bn4bWuRKjwTl1i1FyGKR8H29htPmg%2FsjTFcANsFIqE8xO8Y8NsK3PRUkcREwFygTIDiIazY9U2%2FxzDbHdI7ml5qqn4%2FoFlZHt7A7ukVnP3ifddRccwLrHF%2FLzmVp2dmamzy03D81fSUpg0VqCkMQeUktMeUL78hLD%2BCZ14nNcISRH%2FGxy80CefUwFlEH8ULsVk6EyPMKBEC%2BNfCcrycwEIsgnGvNHPfMaauJd%2BJPiW%2BbdCu%2F0qjY2uLezaBvDxuhrwzY%2B2YUubAxaq5abvn4CUcz%2FofOutzoopzaUsuBWoE4uOf%2BiLkXbS%2FltbcLhAPUA0pBYKkFgaa3VATWsSoC%2FSwVwf7wtDvCU%2Bta8Z4Gn2o%2FNCmyBGc%2BUuLCJCHnh%2Bdw9KqTPD88r6wkcq4TnmpJdA3wvIDoeZaiYH94jq4TnqOrhOdQOzc8yw285xrOaut1%2Bv1%2B12s3rjx2vM5GOEex2XzphFHyC766bz2AaU3DbJjWaLnIMVosqx%2FNsuZWy3ZtYs02wx7olhbSpai2tyCkU1v8IXCjXM3rKm7Mk%2BJGbZTmjFDx0%2Bfc4dMe2JeW3QeKUk7R8meI5R1%2F0eRz6qk2U%2FX7gnh%2Fu9%2B1nzrVTSknq1%2BAxd1N9SPVmP0F)

### Creating a shared repository

While implementing the code for this server, some logic was the same as the one implemented for the
CLI. This is to be expected as much of the logic is naturally shared (for example, the protocol is
the same for both the CLI and the server), however, since I wasn't sure what parts would be truly
shared, I decided not to start by creating a shared module as it felt as an early optimization.
This proved to be the right choice as this allowed for more specific implementations of the server
and CLI encoding and decoding algorithms.

All shared code was moved to [this repository](https://github.com/impadalko/redts-shared/). Working
with custom modules proved to be a very nice experience in Deno as it amounted to only importing
from the [GitHub URL](https://github.com/impadalko/redts-server/blob/main/src/inputDecoder.ts#L1).

### Dealing with undocumented behavior

For implementing a true clone, even undocumented behavior should be implemented for compability
reasons. This is limiting and can be annoying as some quirks might require special handling only to
replicate the original behavior. Since the main objective of this project is to better understand
how Redis works, I will not necessarily implement all undocumented behavior.

That being said, one undocumented behavior I found and implemented is that when the input is sent
not in an array of bulk strings, Redis will parse it as a plain string. This is very useful as it
allows for quick testing the server by directly connecting to it using
[netcat](https://netcat.sourceforge.net/). Of course, it would still be possible to do this without
this feature but it would be a lot more annoying as I would need to manually encode each request.

## Known bugs

### Multiple writes to the same connection

When a command is split across multiple payloads, the server is unable to correctly parse it. This
happens because the server will parse each payload as it was a command and, thus, a command split
accross multiple payloads will be handled as if it were multiple commands. The correct approach
would be to enqueue every payload and parse them when the request is fully read. I'm not sure how to
do it correctly in Deno but I will attempt to fix it later. [GitHub
issue](https://github.com/impadalko/redts-server/issues/1).

### Closing connections abruptly crashes the server

This should be an overall easy fix and it will be implemented in the near future. [GitHub
issue](https://github.com/impadalko/redts-server/issues/2)

## Conclusion

Although one command has been successfully implemented, this is only the foundation upon which the
server will be built. The next steps will be to implement the other commands starting with the most
basic of them: `GET` and `SET`.
