---
title: ServiceWorkerGlobalScope.caches
slug: Web/API/ServiceWorkerGlobalScope/caches
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.caches
---
{{APIRef("Service Workers API")}}

The **`caches`** read-only property of the
{{domxref("ServiceWorkerGlobalScope")}} interface returns the
{{domxref("CacheStorage")}} object associated with the service worker.

## Syntax

```js
var myCacheStorage = self.caches;
```

### Value

A {{domxref("CacheStorage")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
