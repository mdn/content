---
title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - Experimental
  - HIDConnectionEvent
browser-compat: api.HIDConnectionEvent.HIDConnectionEvent
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`HIDConnectionEvent()`** constructor creates a new {{domxref("HIDConnectionEvent")}} object. Typically this constructor is not used as events are created when an input report is received.

## Syntax

```js
new HIDConnectionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `connect` or `disconnect`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `device`
      - : The {{domxref("HIDDevice")}} instance representing the device sending the input report.

### Return value

A new {{domxref("HIDConnectionEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
