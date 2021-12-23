---
title: ServiceWorkerGlobalScope.onperiodicsync
slug: Web/API/ServiceWorkerGlobalScope/onperiodicsync
tags:
  - Background Sync
  - PWA
  - Periodic Background Synchronization API
  - Property
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.onperiodicsync
---
{{draft}}{{DefaultAPISidebar("Periodic Background Sync")}}

The **`onperiodicsync`** property of the {{domxref("ServiceWorkerGlobalScope")}} interface is an event handler fired at timed intervals, specified when registering a {{domxref('PeriodicSyncManager')}}.

## Syntax

```js
ServiceWorkerGlobalScope.onperiodicsync = function(event) { /* ... */ };
```

## Examples

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener('periodicsync', event => {
  if (event.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
