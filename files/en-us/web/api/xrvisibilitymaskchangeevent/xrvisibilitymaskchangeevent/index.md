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
      - : A {{domxref("Uint32Array")}} of values specifying the index position of each coordinate pair (not individual array index) inside the [`vertices`](#vertices) array that define the triangles used to draw the currently visible part of the scene displayed in the {{domxref("XRView")}}.
    - `session`
      - : The {{domxref("XRSession")}} to which the event belongs.
    - `vertices`
      - : A {{domxref("Float32Array")}} of coordinates representing the set of possible coordinate values that may be used in a visibility mask. If this array is empty, the whole region of the `XRView` will be drawn.

### Return value

A new {{domxref("XRVisibilityMaskChangeEvent")}} object instance.

## Examples

See the main [`XRVisibilityMaskChangeEvent`](/en-US/docs/Web/API/XRVisibilityMaskChangeEvent) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
