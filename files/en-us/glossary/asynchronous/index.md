---
title: Asynchronous
slug: Glossary/Asynchronous
page-type: glossary-definition
---

{{GlossarySidebar}}

The term **asynchronous** refers to two or more objects or events that do not exist or happen at the same time, that is, they are **not** {{glossary("synchronous")}}. When multiple related things happen without any being dependent on the completion of previous happenings, they are asynchronous.

In computing, the word "asynchronous" is used in two major contexts, as explained below.

## In networking and communications

Asynchronous communication is a method of exchanging messages in which the sending, receiving, and processing of each message is not dependent on the sending, receipt, or processing of other messages. In asynchronous communication, each party receives and processes messages when convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.

Email is a type of asynchronous human communication. A sender sends an email. The recipient reads the email and responds to it (or not) at their convenience, not necessarily right away. All parties can continue to send and receive messages at any time. Emails don't have to be scheduled in a particular sequence.

In asynchronous software, making a request, such as to a server, does not block other processes while waiting for the response. The software can continue performing other tasks. For example, in [promise-based APIs](/en-US/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), {{JSxRef("Promise")}} objects are created for long operations. After the operation is complete, the promise is handled. With promises, the software doesn't have to wait for the operation to finish.

## In software design

Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.

There are a number of programming techniques for implementing asynchronous software. See the article [Asynchronous JavaScript](/en-US/docs/Learn_web_development/Extensions/Async_JS) for an introduction to them.

## See also

- [Learn: Making network requests with JavaScript](/en-US/docs/Learn_web_development/Core/Scripting/Network_requests) (Learning Area)
- Related glossary terms:
  - {{glossary("Synchronous")}}
