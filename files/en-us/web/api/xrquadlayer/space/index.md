---
title: "XRQuadLayer: space property"
short-title: space
slug: Web/API/XRQuadLayer/space
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRQuadLayer.space
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`space`** property of the {{domxref("XRQuadLayer")}} interface represents the layer's spatial relationship with the user's physical environment.

## Value

An {{domxref("XRSpace")}}.

## Examples

### Setting a layer's dimension and position

This example code positions the layer two meters away from `newSpace` with a `height` and `width` of 1.5 meters.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

quadLayer.space = newSpace;
quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSpace")}}
- {{domxref("XRQuadLayer.transform")}}
