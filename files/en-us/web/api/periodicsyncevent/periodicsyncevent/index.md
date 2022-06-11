---
title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
page-type: web-api-constructor
tags:
  - Constructor
  - Offline
  - PWA
  - PeriodicSyncEvent
  - Experimental
  - Service Worker
  - Web Periodic Background Synchronization API
  - periodic sync
browser-compat: api.PeriodicSyncEvent.PeriodicSyncEvent
---
{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

The **`PeriodicSyncEvent()`** constructor
creates a new {{domxref("PeriodicSyncEvent")}} object. This constructor is not typically
used. The browser creates these objects itself and provides them to
{{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'onperiodicsync')}} callback.

## Syntax

```js
new PeriodicSyncEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `periodicsync`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `tag`
      - : The tag referencing the sync event.

### Return value

A new {{domxref("PeriodicSyncEvent")}} object configured using the given inputs.

## Examples

This example constructs a new {{domxref('PeriodicSyncEvent')}} with the relevant
associated tag.

```js
const psEvent = new ExtendableEvent('periodicsync', {tag : 'unique-tag'});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
