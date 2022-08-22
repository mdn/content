---
title: Clients.claim()
slug: Web/API/Clients/claim
page-type: web-api-instance-method
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - claim
browser-compat: api.Clients.claim
---
{{APIRef("Service Worker Clients")}}

The **`claim()`** method of the {{domxref("Clients")}} interface allows an active service worker to set itself as the {{domxref("ServiceWorkerContainer.controller", "controller")}} for all clients within its {{domxref("ServiceWorkerRegistration.scope", "scope")}}.
This triggers a "`controllerchange`" event on {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} in any clients that become controlled by this service worker.

When a service worker is initially registered, pages won't use it until they next
load. The `claim()` method causes those pages to be controlled immediately.
Be aware that this results in your service worker controlling pages that loaded
regularly over the network, or possibly via a different service worker.

## Syntax

```js
claim()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Examples

The following example uses `claim()` inside service worker's "`activate`" event listener so that clients loaded in the same scope do not need to be reloaded before their fetches will go through this service worker.

```js
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - skip the service worker's waiting phase
