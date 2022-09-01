---
title: DOMPoint
slug: Web/API/DOMPoint
page-type: web-api-interface
tags:
  - API
  - Coordinate
  - Coordinates
  - DOM
  - DOMPoint
  - Geometry
  - Geometry Interfaces
  - Interface
  - Point
  - Reference
  - VR
browser-compat: api.DOMPoint
---
{{APIRef("Geometry Interfaces")}}

A **`DOMPoint`** object represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value. `DOMPoint` is based on {{domxref("DOMPointReadOnly")}} but allows its properties' values to be changed.

In general, a positive `x` component represents a position to the right of the origin, a positive `y` component is downward from the origin, and a positive `z` component extends outward from the screen (in other words, toward the user).

{{InheritanceDiagram}}

## Constructor

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : Creates and returns a new `DOMPoint` object given the values of zero or more of its coordinate components and optionally the `w` perspective value. You can also use an existing `DOMPoint` or `DOMPointReadOnly` or an object to create a new point by calling the {{domxref("DOMPoint.fromPoint()")}} static method.

## Methods

_`DOMPoint` inherits methods from its parent, {{domxref("DOMPointReadOnly")}}._

## Static methods

- {{domxref("DOMPoint.fromPoint()", "DOMPoint.fromPoint()")}}
  - : Creates a new mutable `DOMPoint` object given an existing point (or an object containing matching properties) which provides the values for its properties.

## Properties

_`DOMPoint` inherits properties from its parent, {{domxref("DOMPointReadOnly")}}._

- {{domxref("DOMPoint.x")}}
  - : The `x` coordinate of the `DOMPoint`.
- {{domxref("DOMPoint.y")}}
  - : The `y` coordinate of the `DOMPoint`.
- {{domxref("DOMPoint.z")}}
  - : The `z` coordinate of the `DOMPoint`.
- {{domxref("DOMPoint.w")}}
  - : The perspective value of the `DOMPoint`.

## Examples

In the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API), `DOMPointReadOnly` values are used to represent positions and orientations. In the following snippet, the pose of the XR device (such as a VR headset or phone with AR capabilities) can be retrieved by calling using {{domxref("XRFrame.getViewerPose()")}} during an {{domxref("XRSession")}} animation frame, then accessing the resulting {{domxref("XRPose")}}'s {{domxref("XRPose.transform","transform")}} property, which contains two `DOMPointReadOnly` attributes: {{domxref("XRRigidTransform.position","position")}} as a vector and {{domxref("XRViewerPose.orientation","orientation")}} as a quaternion.

```js
function onXRFrame(time, xrFrame) {
  let viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  if (viewerPose) {
    let position = viewerPose.transform.position;
    let orientation = viewerPose.transform.orientation;

    console.log(`XR Viewer Position: {x: ${roundToTwo(position.x)}, y: ${roundToTwo(position.y)}, z: ${roundToTwo(position.z)}`);

    console.log(`XR Viewer Orientation: {x: ${roundToTwo(orientation.x)}, y: ${roundToTwo(orientation.y)}, z: ${roundToTwo(orientation.z)}, w: ${roundToTwo(orientation.w)}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
