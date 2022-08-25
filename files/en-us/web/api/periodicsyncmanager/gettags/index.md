---
title: PeriodicSyncManager.getTags()
slug: Web/API/PeriodicSyncManager/getTags
page-type: web-api-instance-method
tags:
  - Background Sync
  - Method
  - Offline
  - PWA
  - PeriodicSyncManager
  - Service Worker
  - Web Periodic Background Synchronization API
  - periodic sync
  - Experimental
browser-compat: api.PeriodicSyncManager.getTags
---
{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

The **`getTags()`** method of the
{{domxref("PeriodicSyncManager")}} interface returns a {{jsxref('Promise')}} that
resolves with a list of {{jsxref('String')}} objects representing the tags that are
currently registered for periodic syncing.

## Syntax

```js
getTags()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves with a list of {{jsxref('String')}} objects
representing tags that are currently registered for periodic syncing.

### Exceptions

None.

## Examples

The following example uses the `getTags()` method to check if a periodic
sync task with a given tag is registered.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes('get-latest-news'))
      skipDownloadingLatestNewsOnPageLoad();
  });
});
```

`skipDownloadingLatestNewsOnPageLoad()` is a developer defined function.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
