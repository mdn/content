---
title: ServiceWorkerRegistration.periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - PeriodicSyncManager
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - periodicSync
browser-compat: api.ServiceWorkerRegistration.periodicSync
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`periodicSync`** read-only property of
the {{domxref("ServiceWorkerRegistration")}} interface returns a reference to the
{{domxref('PeriodicSyncManager')}} interface, which allows for registering of tasks to
run at specific intervals.

## Value

A {{domxref('PeriodicSyncManager')}} object.

## Examples

You can access the property from either your main script or the registered service
worker.

Here is an example from the main script:

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ('periodicSync' in registration) {

  // Background Periodic Sync functionality
  const periodicSync = registration.periodicSync;

}
```

From the [service worker](/en-US/docs/Web/API/Service_Worker_API):

```js
// service worker script

const periodicSync = self.registration.periodicSync;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
