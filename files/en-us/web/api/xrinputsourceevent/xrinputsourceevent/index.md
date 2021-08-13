---
title: XRInputSourceEvent()
slug: Web/API/XRInputSourceEvent/XRInputSourceEvent
tags:
  - API
  - AR
  - Constructor
  - Input Sources
  - Inputs
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSourceEvent
  - augmented
  - controllers
  - events
browser-compat: api.XRInputSourceEvent.XRInputSourceEvent
---
{{APIRef("WebXR Device API")}}

The **`XRInputSourceEvent()`**
constructor creates and returns a new {{domxref("XRInputSourceEvent")}} object
describing an event (state change) which has occurred on a WebXR user input device
represented by an {{domxref("XRInputSource")}}.

## Syntax

```js
newInputSourceEvent = new XRInputSourceEvent(type, eventInitDict);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating which of the input source events the new
    object will represent. Permitted values are listed under {{anch("Event types")}}
    below.
- `eventInitDict`

  - : An object to configure the event with the following properties:

    - `frame`: An {{domxref("XRFrame")}} object representing the event frame during which the event took place. This event is _not_ associated with the animation process, and has no viewer information contained within it.
    - `inputSource`: An {{domxref("XRInputSource")}} object representing the input device from which the event is being sent.

### Return value

A new {{domxref("XRInputSourceEvent")}} object representing the event described by the
given `type` and `eventInitDict`.

## Event types

{{page("/en-US/docs/Web/API/XRInputSourceEvent", "Event types")}}

## Examples

This example creates a new {{domxref("XRSession.select_event", "select")}} event and
sends it to the {{domxref("XRSession")}}.

```js
let event = new XRInputSourceEvent("select", {
  frame: eventFrame,
  inputSource: source
};
if (event) {
  xrSession.dispatchEvent(event);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
