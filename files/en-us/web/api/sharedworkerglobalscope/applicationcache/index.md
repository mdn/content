---
title: SharedWorkerGlobalScope.applicationCache
slug: Web/API/SharedWorkerGlobalScope/applicationCache
tags:
  - API
  - Property
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
  - applicationCache
browser-compat: api.SharedWorkerGlobalScope.applicationCache
---
{{Deprecated_Header}}{{APIRef("Web Workers API")}}

> **Warning:** Application Cache is deprecated as of Firefox 44, and is no longer available in insecure contexts from Firefox 60 onwards ({{bug(1354175)}}, currently Nightly/Beta only). Don't use it to make offline websites — consider using [service workers](/en-US/docs/Web/API/Service_Worker_API) instead.

The **`applicationCache`** read-only property of the {{domxref("SharedWorkerGlobalScope")}} interface returns the {{domxref("ApplicationCache")}} object for the worker (see [Using the application cache](/en-US/docs/Web/HTML/Using_the_application_cache)).

## Syntax

```js
var nameObj = self.applicationCache;
```

### Value

An {{domxref("ApplicationCache")}}.

## Example

If a shared worker has an AppCache associated with it, you can return a reference to the cache using

```js
self.applicationCache
```

from inside the shared worker.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorkerGlobalScope")}}
