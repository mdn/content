---
title: Asynchronous (Networking)
slug: Glossary/Asynchronous/Networking
page-type: glossary-definition
---

{{GlossarySidebar}}

In networking and other communications, **asynchronous communication** refers to the transmission of data in which each character or unit of data is sent separately, and the timing between these characters or data units does _not_ need to be {{glossary("synchronous", "synchronized")}}. This means that the sender and receiver do not need to be perfectly aligned in time, allowing data to be sent intermittently rather than in a continuous stream. Each data unit is typically framed with start and stop bits to signify the beginning and end of transmission, ensuring that the receiving end can correctly identify and process the data.

Examples include asynchronous human communication like Email and SMS, where participants send or post messages at different times than they read them. In contrast, synchronous communication, such as a phone call or face-to-face conversation, requires all participants to be present and engaged at the same time.

Another example is Web-based forms and {{glossary("API")}} calls, where the user or client sends a request to a server and continues to interact with the page or application while waiting for a response. The server processes the request and sends a response back to the client when it is ready. {{glossary("AJAX")}} used to be a common technique for enabling asynchronous communication between a web client and server, but modern [promise-based APIs](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) like {{JSxRef("Promise")}} provide more efficient and flexible ways to handle asynchronous data transfer.

## See also

- [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Asynchronous communication](https://en.wikipedia.org/wiki/Asynchronous_communication) on Wikipedia
- Glossary
  - {{glossary("AJAX")}}
