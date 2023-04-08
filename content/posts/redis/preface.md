---
title: "Creating Redis with TS - Preface"
summary: "A post explaining why I'm creating a simplified Redis clone using Typescript."
date: 2023-04-03
---

## Introduction

This post is the first of a series where I will describe the process of creating a simplified Redis
clone using TypeScript. These posts will be written as I work in this project with the objective of
documenting both my development process and the rationale of some of my decisions.

### Why recreate a well established open source project?

My main objective is to understand how an in-memory database works in practice especially some of
its more complex features such as persistence and transactions. While it's possible to have a great
conceptual understanding of how something works by using it, some of its quirks and limitations can
only be understood by diving deep into it. One approach for this would be to study the Redis source
code and possibly contributing to it, however, I'm not interested in doing this right now and it
would probably make me focus only on some aspects of this product as it is a very mature technology.

Recreating the technology, even if only a subset of its features, would make me think how I would
implement it and would allow me to better understand some of the early challenges faced by the
developers. Also, this would give me some experience (even if not in a professional way) in
developing a foundational service such as database. In this sense, an in-memory one seems to be a
nice place to start.

### Why Redis?

For many reasons!

1. Redis has many applications: database, cache, message broker etc.
2. Redis is conceptually simple storing its data in-memory.
3. Many of the features can be incrementally implemented.

### Why TS?

From 2018 until 2021 I worked with JavaScript. From there, I started using Typescript almost
exclusively at the end of 2020. While this family of languages certainly has its quirk and some
questionable features ([this](https://www.destroyallsoftware.com/talks/wat) and
[this](https://www.youtube.com/watch?v=et8xNAc2ic8) talks come to mind), its ubiquity, large set of
features and community has made it a language that I really enjoy working with.

However, things move really fast on the JS world and, certainly, a lot must have changed since I
last worked with it. Starting a project like this is a nice way to getting up to date on the new
features and refreshing my knowledge on the language. Also, this seems a nice time to check out
[Deno](https://deno.land/), something [I was curious about since
2018](https://www.youtube.com/watch?v=M3BM9TB-8yA).

### Why write about this at all?

Writing about your own work is a great way of keeping a log of your technical decisions and the
challenges you faced. While lots of information can be inferred from commit messages, some of
details are lost. This is also a way of practicing my technical writing and forcing me into thinking
on how I can organize my work based on how I will structure these posts (e.g., how should I
implement a given part so I can make a self-contained post?).

## Desired Features

Redis has [many features](https://redis.io/docs/about/), many of which I have no interest in
implementing right now so I will focus on only some of these. I plan to implement features more
related to the caching and database aspect of Redis. I don't intend to implement features related to
authentication, scripting, replication or partitioning (but this can, of course, change).

### Features I would like to implement:
- Strings
- Hashes
- Lists
- Persistence
- CLI

### Features I might implement:
- Sets
- Transactions
- LRU eviction

## Command Set

Redis has [many, many commands](https://redis.io/commands/). Implementing all of them would require
me to implement multiple features I'm not interested in and would take way too long. For this
reason, I'll start with some commands and possibly implement others if I feel like doing so.

### Commands I would like to implement:
- `APPEND`: Append a value to a key
- `COMMAND`: Get array of command details
- `COPY`: Copy the value of a key
- `DECR`: Decrement the integer value of a key by one
- `DEL`: Delete a key
- `EXISTS`: Determine if a key exists
- `EXPIRE`: Set the TTL of key in seconds
- `GET`: Get the value of key
- `GETDEL`: Get the value of a key and delete the key
- `HDEL`: Delete one or more hash fields
- `HEXISTS`: Determine if a hash field exists
- `HGET`: Get the value of a hash field
- `HGETALL`: Get all the fields and values in a hash
- `HSET`: Set the value of a hash field
- `INCR`: Increment the integer value of a key by one
- `LPOP`: Remove and get the first element of a list
- `LPUSH`: Prepend one or more elements to a list
- `LSET`: Set the value of an element in a list by its index
- `PERSIST`: Remove the expiration of a key
- `PING`: Ping the server
- `RENAME`: Rename a key
- `RPOP`: Remove and get the last element of a list
- `RPUSH`: Append one or more elements to a list
- `SET`: Set the string value of a key
- `SETEX`: Set the value and expiration of a key
- `SHUTDOWN`: Shut down the server (saving if persistence is implemented)
- `QUIT`: Close the connection

### Commands I might implement:
- Those related to sets (`SADD`, `SREM`, `SISMEMBER` etc)
- Those related to transactions (`MULTI`, `EXEC` and `DISCARD`)
- Those related to persistence (`SAVE`, `BGSAVE`, `LASTSAVE` etc) as these are not necessary to
  implement basic persistence features
