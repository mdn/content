---
title: ServiceWorkerGlobalScope.onactivate
slug: Web/API/ServiceWorkerGlobalScope/onactivate
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Workers
  - onactivate
browser-compat: api.ServiceWorkerGlobalScope.onactivate
---
{{APIRef("Service Workers API")}}

The **onactivate** property of the {{domxref("ServiceWorkerGlobalScope")}} interface is an event handler fired whenever an `activate` event occurs (when the service worker activates). This happens after installation, when the page to be controlled by the service worker refreshes.

## Syntax

```js
ServiceWorkerGlobalScope.onactivate = function(event) { /* ... */ };
```

## Examples

The following snippet shows how you could use an `activate` event handler to upgrade a cache.

```js
this.addEventListener('activate', function(event) {
  var cacheAllowlist = ['v2'];

  event.waitUntil(
    caches.forEach(function(cache, cacheName) {
      if (cacheAllowlist.indexOf(cacheName) == -1) {
        return caches.delete(cacheName);
      }
    })
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
