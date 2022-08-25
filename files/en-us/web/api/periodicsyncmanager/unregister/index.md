---
title: PeriodicSyncManager.unregister()
slug: Web/API/PeriodicSyncManager/unregister
page-type: web-api-instance-method
tags:
  - Background Sync
  - Method
  - Offline
  - PWA
  - PeriodicSyncManager
  - Service Worker
  - Web Periodic Background Synchronization API
  - Experimental
browser-compat: api.PeriodicSyncManager.unregister
---
{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

The **`unregister()`** method of the
{{domxref("PeriodicSyncManager")}} interface unregisters the periodic sync request
corresponding to the specified tag and returns a {{jsxref('Promise')}} that resolves
when unregistration completes.

## Syntax

```js
unregister(tag)
```

### Parameters

- tag
  - : The unique {{jsxref('String')}} descriptor for the specific background sync.

### Return value

A resolved {{jsxref("Promise")}}.

### Exceptions

None.

## Examples

The following example removes a periodic sync to stop syncing articles in the
background.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister('get-latest-news');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
