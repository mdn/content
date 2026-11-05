---
title: sanitize
slug: Glossary/Sanitize
page-type: glossary-definition
sidebar: glossarysidebar
---

Sanitization is the process of removing unsafe features from a string of HTML: for example, {{htmlelement("script")}} tags or inline event handlers.

Since sanitization, like output encoding, is difficult to get right, it is often advised to do this through reputable third-party libraries like [DOMPurify](https://github.com/cure53/DOMPurify).

The [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) is a web platform API that provides a number of methods for removing unwanted HTML entities from HTML input before it is injected into the DOM. These come in XSS-safe versions (for example, {{domxref("Element.setHTML()")}}) that enforce removal of all unsafe elements and attributes, and potentially unsafe versions (for example, {{domxref("Element.setHTMLUnsafe()")}}) that give developers full control over the HTML entities that are allowed.

## See also

- [XSS sanitization](/en-US/docs/Web/Security/Attacks/XSS#sanitization)
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
- Related glossary terms:
  - {{Glossary("Cross-site scripting")}}
