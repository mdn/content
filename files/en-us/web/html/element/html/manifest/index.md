---
title: manifest
slug: Web/HTML/Element/html/manifest
tags:
  - Cache
  - application cache
browser-compat: html.elements.html.manifest
---

{{Deprecated_Header}}{{Non-standard_Header}}

The **`manifest`** attribute of the `<html>` element specifies a URL of a application cache manifest that is downloaded in the early stages of page load.

> **Note:** manifest-based caching mechanism has been deprecated. Use service workers instead.

The manifest attribute has only effect during early stages of page load, thus changing it via regular DOM interfaces has no effect, {{domxref("Window.applicationCache")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.applicationCache")}}
- [Using the application cache](/en-US/docs/Web/HTML/Using_the_application_cache)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
