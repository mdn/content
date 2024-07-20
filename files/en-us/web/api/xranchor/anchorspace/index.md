---
title: "XRAnchor: anchorSpace property"
short-title: anchorSpace
slug: Web/API/XRAnchor/anchorSpace
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRAnchor.anchorSpace
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The read-only **`anchorSpace`** property of the {{domxref("XRAnchor")}} interface returns an {{domxref("XRSpace")}} object to locate the anchor relative to other `XRSpace` objects. It can be passed to {{domxref("XRFrame.getPose()")}} subsequently.

## Value

An {{domxref("XRSpace")}} object.

## Examples

### Updating anchors

```js
for (const anchor of frame.trackedAnchors) {
  const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
