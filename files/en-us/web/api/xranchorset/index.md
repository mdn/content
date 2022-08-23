---
title: XRAnchorSet
slug: Web/API/XRAnchorSet
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRAnchorSet
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRAnchorSet`** interface exposes a collection of anchors. It is returned by {{domxref("XRFrame.trackedAnchors")}} and is a {{jsxref("Set")}}-like object.

## Properties

See {{jsxref("Set")}} for details.

## Methods

See {{jsxref("Set")}} for details.

## Examples

### Handling anchor tracking loss

```js
const trackedAnchors = frame.trackedAnchors;

for (const anchor of previousFrameAnchors) {
  if (!trackedAnchors.has(anchor)) {
    // Handle anchor tracking loss
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.trackedAnchors")}}
