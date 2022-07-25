---
title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
page-type: web-api-constructor
tags:
  - API
  - Background Sync
  - Constructor
  - Experimental
  - Reference
  - ServiceWorker
  - SyncEvent
browser-compat: api.SyncEvent.SyncEvent
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`SyncEvent()`** constructor creates a new {{domxref("SyncEvent")}} object.

## Syntax

```js
new SyncEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `sync`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `tag`
      - : A developer-defined unique identifier for this `SyncEvent`.
    - `lastChance` {{optional_inline}}
      - : A boolean value indicating that the user agent will not make further synchronization attempts after the current attempt.
        It defaults to `false`.

### Return value

A new {{domxref("SyncEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
