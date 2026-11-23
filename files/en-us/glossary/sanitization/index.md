---
title: Sanitization
slug: Glossary/Sanitization
page-type: glossary-definition
sidebar: glossarysidebar
---

**Sanitization** is the process of removing from an input string items that could be used in a security attack. On the web, it typically refers to the removal, from a string input containing HTML, of items that could enable an attacker to launch a {{glossary("Cross-site_scripting", "Cross-site-scripting (XSS)")}} attack. This includes elements such as {{htmlelement("script")}} and event handler attributes like `onerror`.

The [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) provides built-in support for HTML sanitization on the web. Developers can also use reputable third-party libraries such as [DOMPurify](https://github.com/cure53/DOMPurify). Because sanitization is difficult to get right, developers should usually not implement their own sanitization logic.

## See also

- [XSS sanitization](/en-US/docs/Web/Security/Attacks/XSS#sanitization)
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
- Related glossary terms:
  - {{Glossary("Cross-site scripting")}}
