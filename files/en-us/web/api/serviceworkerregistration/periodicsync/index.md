---
title: ServiceWorkerRegistration.periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
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
{{draft}}{{DefaultAPISidebar("Service Worker API")}}

The **`periodicSync`** read-only property of
the {{domxref("ServiceWorkerRegistration")}} interface returns a reference to the
{{domxref('PeriodicSyncManager')}} interface, which allows for registering of tasks to
run at specific intervals.

## Syntax

```js
var PeriodicSyncManagerObject = ServiceWorkerRegistration.periodicSync;
```

### Value

A PeriodicSyncManager {{jsxref('Object')}}.

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

From the {{domxref('Service Worker API','service worker')}}:

```js
// service worker script

const periodicSync = self.registration.periodicSync;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with
  the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A
  Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
