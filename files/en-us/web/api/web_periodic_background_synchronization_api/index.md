---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
page-type: web-api-overview
tags:
  - API
  - Background
  - Landing
  - Offline
  - Overview
  - PWA
  - Service Workers
  - Sync
  - Web Periodic Background Synchronization API
  - periodic
  - Experimental
browser-compat: api.PeriodicSyncManager
---
{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}

The Web Periodic Background Synchronization API provides a way to register tasks to be run in a {{domxref('Service Worker API','service worker')}} at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests.

## Web Periodic Background Synchronization Concepts and Usage

The Periodic Background Sync API allows web applications to alert their service worker to make any updates, at a periodic time interval. Uses may include fetching latest content whilst a device is connected to Wi-Fi, or allowing background updates to an application.

The minimum time interval is set when the API is invoked; however the user agent might also take into account other factors which affect when the service worker receives the event. For instance previous website engagement, or connection to a known network.

The {{domxref('PeriodicSyncManager')}} interface is available through {{domxref('ServiceWorkerRegistration.periodicSync')}}. A unique tag identifier is set to 'name' the sync event, which can then be listened for within the {{domxref('ServiceWorker')}} script. Once the event is received you can then run any functionality available, such as updating caches or fetching new resources.

As this API relies on service workers, functionality provided by this API is only available in a secure context.

> **Note:** At the time of writing, the Web Periodic Background Synchronization API is only available through an installed [Progressive Web App](/en-US/docs/Web/Progressive_web_apps)

## Web Periodic Background Synchronization Interfaces

- {{domxref('PeriodicSyncManager')}}
  - : Registers tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests.
- {{domxref('PeriodicSyncEvent')}}
  - : Represents a synchronization event, sent to the {{domxref('ServiceWorkerGlobalScope', 'global scope')}} of a {{domxref('ServiceWorker')}}. It provides a way to run tasks in the service worker with network connectivity.

## Service Worker Additions

The following additions to the {{domxref('Service Worker API')}} are specified in the Periodic Background Sync specification to provide an entry point for using Periodic Background Sync.

- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("PeriodicSyncManager")}} interface for registering tasks to run at specific intervals.
- {{domxref("ServiceWorkerGlobalScope.periodicsync_event", "onperiodicsync")}}
  - : An event handler fired whenever a {{domxref("ServiceWorkerGlobalScope.periodicsync_event", "periodicsync")}} event occurs. This happens at timed intervals, that are specified when registering a {{domxref('PeriodicSyncManager')}}.

## Examples

The following examples show how to use the interface.

### Requesting a Periodic Background Sync

The following asynchronous function registers a periodic background sync at a minimum interval of one day from a browsing context:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register('get-latest-news', {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log('Periodic Sync could not be registered!');
  }
}
```

### Verifying a Background Periodic Sync by Tag

This code checks to see if a Periodic Background Sync task with a given tag is registered.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes('get-latest-news'))
      skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Removing a Periodic Background Sync Task

The following code removes a Periodic Background Sync task to stop articles syncing in the background.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister('get-latest-news');
});
```

### Listening for a Periodic Background Sync within a Service Worker

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An article on using Periodic Background Sync](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
