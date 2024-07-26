---
title: "PeriodicSyncManager: unregister() method"
short-title: unregister()
slug: Web/API/PeriodicSyncManager/unregister
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PeriodicSyncManager.unregister
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`unregister()`** method of the
{{domxref("PeriodicSyncManager")}} interface unregisters the periodic sync request
corresponding to the specified tag and returns a {{jsxref('Promise')}} that resolves
when unregistration completes.

## Syntax

```js-nolint
unregister(tag)
```

### Parameters

- tag
  - : The unique {{jsxref('String')}} descriptor for the specific background sync.

### Return value

Returns a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

### Exceptions

None.

## Examples

The following example removes a periodic sync to stop syncing articles in the
background.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
