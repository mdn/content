---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PeriodicSyncManager
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

The **`PeriodicSyncManager`** interface of the {{domxref('Web Periodic Background Synchronization API')}} provides a way to register tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests. Access `PeriodicSyncManager` through the {{domxref('ServiceWorkerRegistration.periodicSync')}}.

## Instance properties

None.

## Instance methods

- {{domxref('PeriodicSyncManager.register')}} {{Experimental_Inline}}
  - : Registers a periodic sync request with the browser with the specified tag and options. Returns a {{jsxref('Promise')}} that resolves when the registration completes.
- {{domxref('PeriodicSyncManager.getTags')}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} that resolves with a list of {{jsxref('String','strings')}} representing the tags that are currently registered for periodic syncing.
- {{domxref('PeriodicSyncManager.unregister')}} {{Experimental_Inline}}
  - : Unregisters the periodic sync request corresponding to the specified tag and returns a {{jsxref('Promise')}} that resolves when unregistration completes.

## Examples

The following examples show how to use the interface.

### Requesting a Periodic Background Sync

The following asynchronous function registers a periodic background sync at a minimum interval of one day from a browsing context:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

### Verifying a Background Periodic Sync by Tag

This code checks to see if a Periodic Background Sync task with a given tag is registered.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Removing a Periodic Background Sync Task

The following code removes a Periodic Background Sync task to stop articles syncing in the background.

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

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
