---
title: sanitize
slug: Glossary/Sanitize
page-type: glossary-definition
sidebar: glossarysidebar
---

Sanitization is the process of removing unsafe features from a string of HTML: for example, {{htmlelement("script")}} tags or inline event handlers.

Since sanitization, like output encoding, is difficult to get right, it is often advised to do this through reputable third-party libraries like [DOMPurify](https://github.com/cure53/DOMPurify), though this is now also available through the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) web platform API.

The HTML Sanitizer API provides a number of methods for removing unwanted HTML entities from HTML input before it is injected into the DOM. These come in safe versions (for example, {{domxref("Element.setHTML()")}}) that enforce removal of all XSS-unsafe elements and attributes and more, and potentially unsafe versions (for example, {{domxref("Element.setHTMLUnsafe()")}}) that give developers full control over the HTML entities that are allowed. The safe versions have the concept of a [XSS-safe baseline configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#xss-safe_baseline_configuration) and an additional [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) that applies extra restrictions on top of the baseline but can be overridden or changed.

## See also

- [XSS sanitization](/en-US/docs/Web/Security/Attacks/XSS#sanitization)
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
- Related glossary terms:
  - {{Glossary("Cross-site scripting")}}
