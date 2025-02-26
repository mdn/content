---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
page-type: web-api-interface
browser-compat: api.XRRigidTransform
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`XRRigidTransform`** is a [WebXR API](/en-US/docs/Web/API/WebXR_Device_API) interface that represents the 3D geometric transform described by a position and orientation.

`XRRigidTransform` is used to specify transforms throughout the WebXR APIs, including:

- The offset and orientation relative to the parent reference space to use when creating a new reference space with {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}.
- The {{domxref("XRView.transform", "transform")}} of an {{domxref("XRView")}}.
- The {{domxref("XRPose.transform", "transform")}} of an {{domxref("XRPose")}}.
- The {{domxref("XRReferenceSpaceEvent")}} event's {{domxref("XRReferenceSpaceEvent.transform", "transform")}} property, as found in the {{domxref("XRReferenceSpace.reset_event", "reset")}} event received by an {{domxref("XRReferenceSpace")}}.

Using `XRRigidTransform` in these places rather than bare arrays that provide the matrix data has an advantage. It automatically computes the inverse of the transform and even caches it making subsequent requests significantly faster.

## Constructor

- {{domxref("XRRigidTransform.XRRigidTransform", "XRRigidTransform()")}}
  - : Creates a new `XRRigidTransform` object which represents a transform that applies a specified position and/or orientation.

## Instance properties

- {{DOMxRef("XRRigidTransform.position")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMPointReadOnly")}} specifying a 3-dimensional point, expressed in meters, describing the translation component of the transform. The {{DOMxRef("DOMPointReadonly.w", "w")}} property is always `1.0`.
- {{DOMxRef("XRRigidTransform.orientation")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMPointReadOnly")}} which contains a unit quaternion describing the rotational component of the transform. As a unit quaternion, its length is always normalized to `1.0`.
- {{DOMxRef("XRRigidTransform.matrix")}} {{ReadOnlyInline}}
  - : Returns the transform matrix in the form of a 16-member {{jsxref("Float32Array")}}. See the section [Matrix format](/en-US/docs/Web/API/XRRigidTransform/matrix#matrix_format) for how the array is used to represent a matrix.
- {{DOMxRef("XRRigidTransform.inverse")}} {{ReadOnlyInline}}
  - : Returns a `XRRigidTransform` which is the inverse of this transform. That is, if applied to an object that had been previously transformed by the original transform, it will undo the transform and return the original object.

## Usage notes

When an `XRRigidTransform` is interpreted, the orientation is always applied to the affected object before the position is applied.

## Example

This code snippet creates an `XRRigidTransform` to specify the offset and orientation in relation to the current reference space to use when creating a new reference space. It then requests the first animation frame callback by calling the session's {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} method.

```js
xrSession.requestReferenceSpace(refSpaceType).then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerStartPosition, cubeOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
