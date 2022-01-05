---
title: ServiceWorkerRegistration.updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - updateViaCache
browser-compat: api.ServiceWorkerRegistration.updateViaCache
---
{{APIRef("Service Workers API")}}

The **`updateViaCache()`** method of the
{{domxref("ServiceWorkerRegistration")}} interface updates the cache using
the mode specified in the call to {{domxref('ServiceWorkerContainer.register')}}.
Requests for \`importScripts\` still go via the HTTP cache. \`updateViaCache\` offers
control over this behavior.

## Syntax

```js
serviceWorkerRegistration.updateViaCache;
```

### Parameters

None.

### Return value

## Example

The following example shows the use of updateViaCache().

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {
    updateViaCache: 'none'
  });
  // When set to 'none', the HTTP cache will not be
  // consulted when making requests for either the top-level
  // /service-worker.js or for any imported scripted, such as
  // the hypothetical path/to/import.js.
}
```

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
