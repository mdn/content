---
title: PeriodicSyncEvent.tag
slug: Web/API/PeriodicSyncEvent/tag
tags:
  - Offline
  - PWA
  - PeriodicSyncEvent
  - Property
  - Service Worker
  - Web Periodic Background Synchronization API
  - periodic sync
browser-compat: api.PeriodicSyncEvent.tag
---
{{draft}}{{DefaultAPISidebar("Periodic Background Sync")}}

The **`tag`** read-only property of the
{{domxref("PeriodicSyncEvent")}} interface returns the developer-defined identifier for
the {{domxref('PeriodicSyncEvent')}}. This is specified when calling the
{{domxref('PeriodicSyncManager.register()')}} method of the
{{domxref('PeriodicSyncManager')}} interface. Multiple tags can be used by the web app
to run different periodic tasks at different frequencies.

## Syntax

```js
const tag = PeriodicSyncEvent.tag;
```

### Value

Returns a {{jsxref('String')}} of the defined identifier.

## Examples

The following example demonstrates listening for a periodic sync event in the service
worker, and accessing the `tag` property.

```js
self.addEventListener('periodicsync', event => {
  console.log(event.tag); // logs the events tag
});
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
