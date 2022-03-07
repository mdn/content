---
title: Asynchronous
slug: Glossary/Asynchronous
tags:
  - Glossary
  - Web
  - WebMechanics
  - asynchronous
---
The term **asynchronous** refers to two or more objects or events **not** existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word "asynchronous" is used in two major contexts.

- Networking and communications

  - : Asynchronous communication is a method of exchanging messages between two or more parties in which each party receives and processes messages whenever it's convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.

    For humans, e-mail is an asynchronous communication method; the sender sends an email and the recipient will read and reply to the message when it's convenient to do so, rather than doing so at once. And both sides can continue to send and receive messages whenever they wish, instead of having to schedule them around each other.

    When software communicates asynchronously, a program may make a request for information from another piece of software (such as a server), and continue to do other things while waiting for a reply. For example, the [AJAX](/en-US/docs/Web/Guide/AJAX) (Asynchronous JavaScript and {{Glossary("XML")}}) programming technique—now usually "Ajax", even though {{Glossary("JSON")}} is usually used rather than XML in modern applications—is a mechanism that requests relatively small amounts of data from the server using {{Glossary("HTTP")}}, with the result being returned when available rather than immediately.

- Software design

  - : Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.

    There are a number of programming techniques for implementing asynchronous software. See the article [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous) for an introduction to them.

## See also

- [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Learning Area)
- {{glossary("Synchronous")}}
