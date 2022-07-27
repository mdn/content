---
title: XRInputSourceEvent.inputSource
slug: Web/API/XRInputSourceEvent/inputSource
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Controller
  - Input
  - Mixed
  - Property
  - Read-only
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
  - inputSource
  - source
browser-compat: api.XRInputSourceEvent.inputSource
---
{{APIRef("WebXR Device API")}}

The {{domxref("XRInputSourceEvent")}} interface's read-only
**`inputSource`** property specifies the
{{domxref("XRInputSource")}} which generated the input event. This information
lets you handle the event appropriately given the particulars of the user input device
being manipulated.

## Value

An {{domxref("XRInputSource")}} object identifying the source of the user input event.
This event indicates an action the user has taken using a WebXR input controller, such
as a hand controller, motion sensing device, or other input apparatus.

## Examples

The snippet below shows a handler for the {{domxref("XRSession.select_event",
  "select")}} event which looks specifically for events which happen on `gaze`
input devices. The device type is identified by looking at the
{{domxref("XRInputSource")}} in `inputSource` and its
{{domxref("XRInputSource.targetRayMode", "targetRayMode")}} property.

```js
xrSession.onselect = (event) => {
  let source = event.inputSource;

  if (source.targetRayMode === "gaze") {
    /* handle selection using a gaze input */
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
