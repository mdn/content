---
title: ServiceWorkerGlobalScope.onsync
slug: Web/API/ServiceWorkerGlobalScope/onsync
browser-compat: api.ServiceWorkerGlobalScope.onsync
---
{{APIRef("")}}

The **`ServiceWorkerGlobalScope.onsync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired whenever a [`SyncEvent`](/en-US/docs/Web/Events/SyncEvent) event occurs. This is triggered when a call to [`SyncManager.register`](/en-US/docs/Web/API/SyncManager/register "The register method of the SyncManager interface returns a Promise that resolves to a SyncRegistration instance.") is made from a service worker client page. The attempt to sync is made either immediately if the network is available or as soon as the network becomes available.

## Syntax

```js
ServiceWorkerGlobalScope.onsync = function(SyncEvent) { /* ... */ }
self.addEventListener('sync', function(SyncEvent) { /* ... */ })
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
