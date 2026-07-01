---
title: "SyncEvent: SyncEvent() constructor"
short-title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
page-type: web-api-constructor
browser-compat: api.SyncEvent.SyncEvent
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

The **`SyncEvent()`** constructor creates a new {{domxref("SyncEvent")}} object.

## Syntax

```js-nolint
new SyncEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `sync`.
- `options`
  - : An object that, in addition to the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}, can have the following properties:
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
