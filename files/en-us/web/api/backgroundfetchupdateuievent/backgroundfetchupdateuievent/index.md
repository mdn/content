---
title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - BackgroundFetchUpdateUIEvent
  - Experimental
browser-compat: api.BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`BackgroundFetchUpdateUIEvent()`** constructor creates a new {{domxref("BackgroundFetchUpdateUIEvent")}} object. This constructor is not typically used as the browser creates these objects itself and provides them to background fetch event callbacks.

## Syntax

```js
new BackgroundFetchEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `backgroundfetchsuccess` or `backgroundfetchfail`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, has the following properties:
    - `registration`
      - : A {{domxref("BackgroundFetchRegistration")}} object.

### Return value

A new {{domxref("BackgroundFetchUpdateUIEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
