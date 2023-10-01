---
title: "XRCompositionLayer: needsRedraw property"
short-title: needsRedraw
slug: Web/API/XRCompositionLayer/needsRedraw
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCompositionLayer.needsRedraw
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`needsRedraw`** property of the {{domxref("XRCompositionLayer")}} interface is a boolean signaling that the layer should be re-rendered in the next frame.

The need for redrawing can occur when the underlying resources of a layer are lost due to textures that might have been freed by the compositor under the hood. This might happen when the device falls asleep or when the browser switches context (to an operating system dialog or similar) and then comes back.

Redrawing is not a problem for layers which are updated with every frame. However, for layers updated infrequently, or for static layers (where you can only draw once after creation or after a `redraw` event), the layer's content might be lost and need to be redrawn. If the layer's resources are lost, the `needsRedraw` property will be `true` and a `redraw` event is fired on the layer.

## Value

A boolean. `true` indicates a rerendering is needed in the next frame, `false` indicates no re-rendering is needed.

## Examples

### Redrawing layers

Use the `needsRedraw` property to check if a layer needs to be redrawn and then redraw it.

```js
function onXRFrame(time, frame) {
  // …

  if (quadLayer.needsRedraw) {
    // redraw the layer
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XREquirectLayer")}}: {{domxref("XREquirectLayer.redraw_event", "redraw")}} event
- {{domxref("XRCubeLayer")}}: {{domxref("XRCubeLayer.redraw_event", "redraw")}} event
- {{domxref("XRCylinderLayer")}}: {{domxref("XRCylinderLayer.redraw_event", "redraw")}} event
- {{domxref("XRQuadLayer")}}: {{domxref("XRQuadLayer.redraw_event", "redraw")}} event
