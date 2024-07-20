---
title: "CloseEvent: CloseEvent() constructor"
short-title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
page-type: web-api-constructor
browser-compat: api.CloseEvent.CloseEvent
---

{{APIRef("Websockets API")}}

The **`CloseEvent()`** constructor creates a new {{domxref("CloseEvent")}} object.

## Syntax

```js-nolint
new CloseEvent(type)
new CloseEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `close`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `wasClean` {{optional_inline}}
      - : A boolean value indicating if the connection has been closed cleanly or not. It defaults to `false`.
    - `code` {{optional_inline}}
      - : An integer representing the _connection close code_ sent by the server. It defaults to `0`.
    - `reason` {{optional_inline}}
      - : A string containing a human-readable reason describing why the server closed the connection. It defaults to `''`

### Return value

A new {{domxref("CloseEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CloseEvent")}}, the interface of the objects it constructs.
