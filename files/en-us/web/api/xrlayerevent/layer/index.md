---
title: XRLayerEvent.layer
slug: Web/API/XRLayerEvent/layer
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRLayerEvent.layer
---
{{APIRef("WebXR Device API")}}

The **`layer`** property of the {{domxref("XRLayerEvent")}} interface is a reference to the {{domxref("XRLayer")}} which generated the event.

## Value

An {{domxref("XRLayer")}}.

## Examples

### Using the `layer` property

In this example, the `layer` property is used to obtain the {{domxref("XRLayer")}} object that sent the event.

```js
myLayer.addEventListener("redraw", (e) => {
  if (typeof e.layer === "XRQuadLayer") {
    // redraw quad layer
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
