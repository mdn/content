---
title: Thread
slug: Glossary/Thread
page-type: glossary-definition
---

{{GlossarySidebar}}

Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a **thread**.

The **{{Glossary("main thread")}}** is the one used by the browser to handle user events, render and paint the display, and to run the majority of the code that comprises a typical web page or app. Because these things are all happening in one thread, a slow website or app script slows down the entire browser; worse, if a site or app script enters an infinite loop, the entire browser will hang. This results in a frustrating, sluggish (or worse) user experience.

Modern {{Glossary("JavaScript")}} offers ways to create additional threads, each executing independently while possibly communicating between one another. This is done using technologies such as [web workers](/en-US/docs/Web/API/Web_Workers_API), which can be used to spin off a sub-program that runs concurrently with the main thread in a thread of its own. This allows slow, complex, or long-running tasks to be executed independently of the main thread, preserving the overall performance of the site or app—as well as that of the browser overall.
Threading also allows web applications to take advantage of modern multi-core processors: enabling even better performance than multi-threaded applications running on a single core.

A special type of worker, called a **[service worker](/en-US/docs/Web/API/Service_Worker_API)**, can be created which can be left behind by a site—with the user's permission—to run even when the user isn't currently using that site. This is used to create sites capable of notifying the user when things happen while they're not actively engaged with a site. Such as notifying a user they have received new email even though they're not currently logged into their mail service.

Overall it can be observed these threads within our operating system are extremely helpful. They help minimize the context switching time, enables more efficient communication and allows further use of the multiprocessor architecture.

## See also

- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
- [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- Related glossary terms:
  - {{Glossary("Main thread")}}
