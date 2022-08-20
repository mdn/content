---
title: Background Synchronization API
slug: Web/API/Background_Synchronization_API
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
  - Web Background Synchronization API
  - Experimental
browser-compat: api.SyncManager
---
{{securecontext_header}}{{SeeCompatTable}}

{{DefaultAPISidebar("Background Sync")}}

The Background Synchronization API provides a way to defer tasks to be run in a {{domxref('Service Worker API','service worker')}} until the user has a stable network connection.

## Background Synchronization Concepts and Usage

The Background Sync API allows web applications to defer server synchronization work to their service worker to handle at a later time, if the device is offline. Uses may include sending requests in the background if they couldn't be sent while the application was being used.

For example, an email client application could let its users compose and send messages at any time, even when the device has no network connection. The application frontend just registers a sync request and the service worker gets alerted when the network is present again and handles the sync.

The {{domxref('SyncManager')}} interface is available through {{domxref('ServiceWorkerRegistration.sync')}}. A unique tag identifier is set to 'name' the sync event, which can then be listened for within the {{domxref('ServiceWorker')}} script. Once the event is received you can then run any functionality available, such as sending requests to the server.

As this API relies on service workers, functionality provided by this API is only available in a secure context.

> **Note:** At the time of writing, the Background Synchronization API is only available through an installed [Progressive Web App](/en-US/docs/Web/Progressive_web_apps)

## Background Synchronization Interfaces

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : Registers tasks to be run in a service worker at a later time with network connectivity. These tasks are referred to as _background sync requests_.
- {{domxref('SyncEvent')}}
  - : Represents a synchronization event, sent to the {{domxref('ServiceWorkerGlobalScope', 'global scope')}} of a {{domxref('ServiceWorker')}}. It provides a way to run tasks in the service worker with network connectivity.

## Service Worker Additions

The following additions to the {{domxref('Service Worker API')}} are specified in the Background Sync specification to provide an entry point for using Background Sync.

- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("SyncManager")}} interface for registering tasks to run with network connectivity.
- {{domxref("ServiceWorkerGlobalScope.sync_event", "onsync")}}
  - : An event handler fired whenever a {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}} event occurs. This happens either immediately if the network is available or as soon as the network becomes available.

## Examples

The following examples show how to use the interface.

### Requesting a background sync

The following asynchronous function registers a background sync from a browsing context:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register('sync-messages');
  } catch {
    console.log('Background Sync could not be registered!');
  }
}
```

### Verifying a background sync by Tag

This code checks to see if a background sync task with a given tag is registered.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes('sync-messages'))
      console.log('Messages sync already requested');
  });
});
```

### Listening for a background sync within a Service Worker

The following example shows how to respond to a background sync event in the service worker.

```js
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introducing Background Sync](https://developer.chrome.com/blog/background-sync/)
