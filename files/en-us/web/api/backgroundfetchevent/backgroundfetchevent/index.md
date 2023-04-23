---
title: "BackgroundFetchEvent: BackgroundFetchEvent() constructor"
short-title: BackgroundFetchEvent()
slug: Web/API/BackgroundFetchEvent/BackgroundFetchEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.BackgroundFetchEvent.BackgroundFetchEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`BackgroundFetchEvent()`** constructor creates a new {{domxref("BackgroundFetchEvent")}} object. This constructor is not typically used as the browser creates these objects itself and provides them to background fetch event callbacks.

## Syntax

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `backgroundfetchabort` or `backgroundfetchclick`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, has the following properties:
    - `registration`
      - : A {{domxref("BackgroundFetchRegistration")}} object.

### Return value

A new {{domxref("BackgroundFetchEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
