---
title: "XRInputSourceEvent: XRInputSourceEvent() constructor"
short-title: XRInputSourceEvent()
slug: Web/API/XRInputSourceEvent/XRInputSourceEvent
page-type: web-api-constructor
browser-compat: api.XRInputSourceEvent.XRInputSourceEvent
---

{{APIRef("WebXR Device API")}}

The **`XRInputSourceEvent()`**
constructor creates and returns a new {{domxref("XRInputSourceEvent")}} object
describing an event (state change) which has occurred on a WebXR user input device
represented by an {{domxref("XRInputSource")}}.

## Syntax

```js-nolint
new XRInputSourceEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `select`, `selectend`, `selectstart`, `squeeze`, `squeezeend`, `squeezestart`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `frame`
      - : An {{domxref("XRFrame")}} object representing the event frame during which the event took place.
        This event is _not_ associated with the animation process, and has no viewer information contained within it.
    - `inputSource`
      - : An {{domxref("XRInputSource")}} object representing the input device from which the event is being sent.

### Return value

A new {{domxref("XRInputSourceEvent")}} object representing the event described by the
given `type` and `eventInitDict`.

## Examples

This example creates a new {{domxref("XRSession.select_event", "select")}} event and
sends it to the {{domxref("XRSession")}}.

```js
let event = new XRInputSourceEvent("select", {
  frame: eventFrame,
  inputSource: source,
});
if (event) {
  xrSession.dispatchEvent(event);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
