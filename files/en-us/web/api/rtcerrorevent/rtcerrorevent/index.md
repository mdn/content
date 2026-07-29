---
title: "RTCErrorEvent: RTCErrorEvent() constructor"
short-title: RTCErrorEvent()
slug: Web/API/RTCErrorEvent/RTCErrorEvent
page-type: web-api-constructor
browser-compat: api.RTCErrorEvent.RTCErrorEvent
---

{{APIRef("WebRTC")}}{{AvailableInWorkers}}

The **`RTCErrorEvent()`** constructor creates a new {{domxref("RTCErrorEvent")}} object.

Note that you will not normally create an object of this type yourself.

## Syntax

```js-nolint
new RTCErrorEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    This is usually `"error"`.
- `options`
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `error`
      - : A {{domxref("RTCError")}} describing the cause and the location of the error.

### Return value

A new `RTCErrorEvent` object.

## Examples

### Basic usage

This example shows how you might create an `RTCErrorEvent` instance.

```js
// Construct an RTCError (used to initialize the event)
const rtcError = new RTCError(
  {
    errorDetail: "sdp-syntax-error",
    sdpLineNumber: 42,
  },
  "SDP syntax error on line 42",
);

// Construct the RTCErrorEvent, passing the RTCError
const event = new RTCErrorEvent("error", {
  error: rtcError, // required
  bubbles: true, // Optional (inherited from Event)
  cancelable: false, // Optional (inherited from Event)
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
