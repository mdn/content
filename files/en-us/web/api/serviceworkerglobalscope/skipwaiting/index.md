---
title: ServiceWorkerGlobalScope.skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - skipWaiting
browser-compat: api.ServiceWorkerGlobalScope.skipWaiting
---

{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope.skipWaiting()`** method of the {{domxref("ServiceWorkerGlobalScope")}} forces the waiting service worker to become the active service worker.

Use this method with {{domxref("Clients.claim()")}} to ensure that updates to the underlying service worker take effect immediately for both the current client and all other active clients.

## Syntax

```js
skipWaiting()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that immediately resolves with `undefined`.

## Examples

While `self.skipWaiting()` can be called at any point during the service worker's execution, it will only have an effect if there's a newly installed service worker that might otherwise remain in the `waiting` state. Therefore, it's common to call `self.skipWaiting()` from inside of an {{domxref("InstallEvent")}} handler.

The following example causes a newly installed service worker to progress into the `activating` state, regardless of whether there is already an active service worker.

```js
self.addEventListener("install", (event) => {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{domxref("Clients.claim()")}}
- {{jsxref("Promise", "Promises")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
