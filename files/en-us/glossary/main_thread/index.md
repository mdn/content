---
title: Main thread
slug: Glossary/Main_thread
page-type: glossary-definition
---

{{GlossarySidebar}}

The **main thread** is where a browser processes user events and paints. By default, the browser uses a single thread to run all the JavaScript in your page, as well as to perform layout, reflows, and garbage collection. This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.

Unless intentionally using a [web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), such as a [service worker](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), JavaScript runs on the main thread, so it's easy for a script to cause delays in event processing or painting. The less work required of the main thread, the more that thread can respond to user events, paint, and generally be responsive to the user.

## See also

- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
- [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- Related glossary terms:
  - {{Glossary("Thread")}}
