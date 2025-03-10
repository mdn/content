---
title: Ajax
slug: Glossary/AJAX
page-type: glossary-definition
---

{{GlossarySidebar}}

Asynchronous JavaScript and XML (**Ajax**, or **AJAX**) is a web development technique in which a web app fetches content from the server by making asynchronous HTTP requests, and uses the new content to update the relevant parts of the page without requiring a full page load. This can make the page more responsive, because only the parts that need to be updated are requested.

Ajax can be used to create {{Glossary("SPA", "single-page apps")}}, in which the entire web app consists of a single document, which uses Ajax to update its content as needed.

Initially Ajax was implemented using the {{domxref("XMLHttpRequest")}} interface, but the {{domxref("Window/fetch", "fetch()")}} API is more suitable for modern web applications: it is more powerful, more flexible, and integrates better with fundamental web app technologies such as [service workers](/en-US/docs/Web/API/Service_Worker_API). Modern web frameworks also provide abstractions for Ajax.

This technique is so common in modern web development that the specific term "Ajax" is rarely used.

## See also

- [Learn: Making network requests with JavaScript](/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- Related glossary terms:
  - {{Glossary("SPA", "Single-page application")}}
- {{DOMxRef("XMLHttpRequest")}}
- [AJAX](https://en.wikipedia.org/wiki/AJAX) on Wikipedia
