---
title: Asynchronous
slug: Glossary/Asynchronous
page-type: glossary-definition
---

{{GlossarySidebar}}

The term **asynchronous** refers to two or more objects or events that are **not** {{glossary("synchronous")}} that do not exist or happen at the same time. When multiple related things happen without any being dependent on the completion of previous happenings, they are asynchronous.

In computing, the word "asynchronous" is used in two major contexts:

- Networking and communications

  - : Asynchronous communication is a method of exchanging messages in which the sending, receiving, and processing of each message in not dependent on the sending, receipt, or processing of other messages. In asynchronous communication, each party receives and processes messages when convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.

    Email is a form of asynchronous human communication. A sender sends an email. The recipient reads the email and replies (or doesn't) when convenient, rather than immediately. All parties can continue to send and receive messages whenever they wish. Emails don't have to be scheduled in a particular sequence either.

    With asynchronous software, when a request is made, such as to a server, processes aren't blocked during the time it takes for the requested response to be received. It can continue to do other things. For example, in [promise based APIs](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), {{JSxRef("Promise")}}s are used when long operations are called, creating a Promise object. When the operation eventually completes, the promise is handled. With promises, software doesn't have to wait for the operation to complete.a notification is sent. This enables the code.

- Software design

  - : Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.

    There are a number of programming techniques for implementing asynchronous software. See the article [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous) for an introduction to them.

## See also

- [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Learning Area)
- {{glossary("Synchronous")}}
