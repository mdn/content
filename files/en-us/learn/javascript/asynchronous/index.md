---
title: Asynchronous JavaScript
slug: Learn/JavaScript/Asynchronous
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Landing
  - Promises
  - async
  - asynchronous
  - await
  - callbacks
  - requestAnimationFrame
  - setInterval
  - setTimeout
---
{{LearnSidebar}}

In this module we take a look at {{Glossary("asynchronous")}} {{Glossary("JavaScript")}}, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Prerequisites

Asynchronous JavaScript is a fairly advanced topic, and you are advised to work through [JavaScript first steps](/en-US/docs/Learn/JavaScript/First_steps) and [JavaScript building blocks](/en-US/docs/Learn/JavaScript/Building_blocks) modules before attempting this.

If you are not familiar with the concept of asynchronous programming, you should definitely start with the [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts) article in this module. If you are, then you can probably skip to the [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) module.

> **Note:** If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you can try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com).

## Guides

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
  - : In this article we'll run through a number of important concepts relating to asynchronous programming, and how this looks in web browsers and JavaScript. You should understand these concepts before working through the other articles in the module.
- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  - : In this article we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous JavaScript techniques you'll encounter, showing how they can help us solve such problems.
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
  - : Here we look at the traditional methods JavaScript has available for running code asynchronously after a set time period has elapsed, or at a regular interval (e.g. a set number of times per second), talk about what they are useful for, and look at their inherent issues.
- [Handling async operations gracefully with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Promises are a comparatively new feature of the JavaScript language that allow you to defer further actions until after the previous action has completed, or respond to its failure. This is really useful for setting up a sequence of operations to work correctly. This article shows you how promises work, where you'll see them in use in WebAPIs, and how to write your own.
- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
  - : Promises can be somewhat complex to set up and understand, and so modern browsers have implemented `async` functions and the `await` operator. The former allows standard functions to implicitly behave asynchronously with promises, whereas the latter can be used inside `async` functions to wait for promises before the function continues. This makes chaining promises simpler and easier to read.
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
  - : To finish this module off, we'll consider the different coding techniques and features we've discussed throughout, looking at which ones you should use when, with recommendations and reminders of common pitfalls where appropriate.

## See also

- [Asynchronous Programming](https://eloquentjavascript.net/11_async.html) from the fantastic [Eloquent JavaScript](https://eloquentjavascript.net/) online book by Marijn Haverbeke.
