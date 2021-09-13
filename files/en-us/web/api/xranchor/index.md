---
title: XRAnchor
slug: Web/API/XRAnchor
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRAnchor
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRAnchor`** interface creates anchors which keep track of the pose that is fixed relative to the real world. With anchors, you can specify poses in the world that need to be updated to correctly reflect the evolving understanding of the world, such that the poses remain aligned with the same place in the physical world. That helps to build an illusion that the placed objects are really present in the user’s environment.

## Properties

- {{domxref("XRAnchor.anchorSpace")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("XRSpace")}} object to locate the anchor relative to other `XRSpace` objects.

## Methods

- {{domxref("XRAnchor.delete()")}}
  - : Removes the anchor.

## Examples

### Requesting a session with anchors enabled

```js
navigator.xr.requestSession("immersive-ar", {
  requireFeatures: ["anchors"],
}
```

### Adding anchors

You can use {{domxref("XRFrame.createAnchor()")}} to create an anchor.

```js
frame.createAnchor(anchorPose, referenceSpace).then((anchor) => {

  // Do stuff with the anchor (assign objects that will be relative to this anchor)

}, (error) => {
  console.error("Could not create anchor: "" + error);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRAnchorSet")}}
- {{domxref("XRFrame.createAnchor()")}}
- {{domxref("XRFrame.trackedAnchors")}}
- {{domxref("XRHitTestResult.createAnchor()")}}
