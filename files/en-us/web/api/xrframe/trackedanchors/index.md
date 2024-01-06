---
title: "XRFrame: trackedAnchors property"
short-title: trackedAnchors
slug: Web/API/XRFrame/trackedAnchors
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRFrame.trackedAnchors
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`trackedAnchor`** property of the {{domxref("XRFrame")}} interface returns an {{domxref("XRAnchorSet")}} object containing all anchors still tracked in the frame.

## Value

An {{domxref("XRAnchorSet")}} object.

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
