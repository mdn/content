---
title: SharedWorkerGlobalScope.applicationCache
slug: Web/API/SharedWorkerGlobalScope/applicationCache
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
  - applicationCache
  - Deprecated
  - Non-standard
browser-compat: api.SharedWorkerGlobalScope.applicationCache
---
{{APIRef("Web Workers API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`applicationCache`** read-only property of the {{domxref("SharedWorkerGlobalScope")}} interface returns the {{domxref("ApplicationCache")}} object for the worker.

## Value

An {{domxref("ApplicationCache")}}.

## Examples

If a shared worker has an AppCache associated with it, you can return a reference to the cache using

```js
self.applicationCache
```

from inside the shared worker.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorkerGlobalScope")}}
