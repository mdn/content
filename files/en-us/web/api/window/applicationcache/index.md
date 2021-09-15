---
title: Window.applicationCache
slug: Web/API/Window/applicationCache
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsCompatTable
  - NeedsExample
  - NeedsSpecTable
  - Property
  - Reference
  - Window
browser-compat: api.SharedWorkerGlobalScope.applicationCache
---
{{Deprecated_Header}}{{Non-standard_Header}}

> **Warning:** Application Cache is deprecated as of Firefox 44, and is no longer available in
> insecure contexts from Firefox 60 onwards ({{bug(1354175)}}, currently Nightly/Beta
> only). Don't use it to offline websites — consider using [service workers](/en-US/docs/Web/API/Service_Worker_API) instead.

Returns a reference to the application cache object for the window.

## Syntax

```js
cache = window.applicationCache
```

### Parameters

- `cache` is an object reference to an `OfflineResourceList`.

## Browser compatibility

{{Compat}}

## See also

- [Using Application
  Cache](/en-US/docs/Web/HTML/Using_the_application_cache)
