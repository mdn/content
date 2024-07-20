---
title: "XRFrame: createAnchor() method"
short-title: createAnchor()
slug: Web/API/XRFrame/createAnchor
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.createAnchor
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`createAnchor()`** method of the {{domxref("XRFrame")}} interface creates a free-floating {{domxref("XRAnchor")}} which will be fixed relative to the real world.

See {{domxref("XRHitTestResult.createAnchor()")}} for creating an anchor from a hit test result that is attached to a real-world object.

## Syntax

```js-nolint
createAnchor(pose, space)
```

### Parameters

- `pose`
  - : An {{domxref("XRRigidTransform")}} object with the initial pose where the anchor should be created. The system will make sure that the relationship with the physical world made at this moment in time is maintained as the tracking system's understanding of the world evolves.
- `space`
  - : An {{domxref("XRSpace")}} object the pose is relative to.

### Return value

A {{jsxref("Promise")}} resolving to an {{domxref("XRAnchor")}} object.

## Examples

### Creating an anchor

```js
frame.createAnchor(anchorPose, referenceSpace).then(
  (anchor) => {
    // Do stuff with the anchor (assign objects that will be relative to this anchor)
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRHitTestResult.createAnchor()")}}
