---
title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
tags:
  - Constructor
  - Offline
  - PWA
  - PeriodicSyncEvent
  - Service Worker
  - Web Periodic Background Synchronization API
  - periodic sync
browser-compat: api.PeriodicSyncEvent.PeriodicSyncEvent
---
{{draft}}{{DefaultAPISidebar("Periodic Background Sync")}}

The **`PeriodicSyncEvent()`** constructor
creates a new {{domxref("PeriodicSyncEvent")}} object. This constructor is not typically
used. The browser creates these objects itself and provides them to
{{domxref('ServiceWorkerGlobalScope.onperiodicsync')}} callback.

## Syntax

```js
var PeriodicSyncEvent = new PeriodicSyncEvent();
```

### Parameters

- _type_
  - : A {{domxref("DOMString")}} indicating the event which occurred. For
    `PeriodicSyncEvent`, this is always `periodicsync`.
- _periodicSyncEventInitDict_ {{optional_inline}}

  - : An options object containing any initialization data you want to populate the
    `PeriodicSyncEvent` object with. The options are:

    - `tag`: The tag referencing the sync event.

### Return value

A {{domxref("PeriodicSyncEvent")}} object configured using the given inputs.

## Examples

This example constructs a new {{domxref('PeriodicSyncEvent')}} with the relevant
associated tag.

```js
var syncTag = {
  tag : 'unique-tag'
}

var psEvent = new ExtendableEvent('periodicsync', syncTag);

psEvent.tag; // should return 'unique-tag'
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
