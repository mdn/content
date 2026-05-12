---
title: "XRVisibilityMaskChangeEvent: XRVisibilityMaskChangeEvent() constructor"
short-title: XRVisibilityMaskChangeEvent()
slug: Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent
page-type: web-api-constructor
browser-compat: api.XRVisibilityMaskChangeEvent.XRVisibilityMaskChangeEvent
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`XRVisibilityMaskChangeEvent()`** constructor creates and returns a new {{domxref("XRVisibilityMaskChangeEvent")}} object.

## Syntax

```js-nolint
new XRVisibilityMaskChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string containing the name of the event, which is always `visibilitymaskchange`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `eye`
      - : The {{domxref("XRVisibilityMaskChangeEvent.eye", "eye")}} the mask applies to.
    - `index`
      - : The index of the current {{domxref("XRView")}} in the {{domxref("XRViewerPose.views")}} array.
    - `indices`
      - : A {{domxref("Uint32Array")}} of values specifying the array positions of the vertices in the [`vertices`](#vertices) array that define the currently visible part of the scene displayed in the `XRView`. If this array is empty, the whole region of the `XRView` will be drawn.
    - `session`
      - : The {{domxref("XRSession")}} to which the event belongs.
    - `vertices`
      - : A {{domxref("Float32Array")}} of coordinates representing a visbility mask. If this array is empty, the whole region of the `XRView` will be drawn.

### Return value

A new {{domxref("XRVisibilityMaskChangeEvent")}} object instance.

## Examples

See the main [`XRVisibilityMaskChangeEvent`](/en-US/docs/Web/API/XRVisibilityMaskChangeEvent) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
