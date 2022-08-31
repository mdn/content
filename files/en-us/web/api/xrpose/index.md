---
title: XRPose
slug: Web/API/XRPose
page-type: web-api-interface
tags:
  - 3DoF
  - 6DoF
  - API
  - AR
  - Interface
  - Orientation
  - Position
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRPose
  - augmented
  - pose
  - space
  - transform
browser-compat: api.XRPose
---
{{APIRef("WebXR Device API")}}{{securecontext_header}}

`XRPose` is a [WebXR API](/en-US/docs/Web/API/WebXR_Device_API) interface representing a position and orientation in the 3D space, relative to the {{domxref("XRSpace")}} within which it resides. The `XRSpace`—which is either an {{domxref("XRReferenceSpace")}} or an {{domxref("XRBoundedReferenceSpace")}}—defines the coordinate system used for the pose and, in the case of an {{domxref("XRViewerPose")}}, its underlying views.

To obtain the `XRPose` for the `XRSpace` used as the local coordinate system of an object, call {{domxref("XRFrame.getPose()")}}, specifying that local `XRSpace` and the space to which you wish to convert:

```js
thePose = xrFrame.getPose(localSpace, baseSpace);
```

The pose for a viewer (or camera) is represented by the {{domxref("XRViewerPose")}} subclass of `XRPose`. This is obtained using {{domxref("XRFrame.getViewerPose()")}}  instead of `getPose()`, specifying a reference space which has been adjusted to position and orient the node to provide the desired viewing position and angle:

```js
viewerPose = xrFrame.getViewerPose(adjReferenceSpace);
```

Here, `adjReferenceSpace` is a reference space which has been updated using the base frame of reference for the frame and any adjustments needed to position the viewer based on movement or rotation which is being supplied from a source other than the XR device, such as keyboard or mouse inputs.

See the article [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion) for further details and an example with thorough explanations of what's going on.

## Properties

- {{DOMxRef("XRPose.angularVelocity")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMPointReadOnly")}} describing the angular velocity in radians per second relative to the base {{DOMxRef("XRSpace")}}.
- {{DOMxRef("XRPose.emulatedPosition")}} {{ReadOnlyInline}}
  - : A Boolean value which is `false` if the position and orientation given by {{DOMxRef("XRPose.transform", "transform")}} is obtained directly from a full six degree of freedom (6DoF) XR device (that is, a device which tracks not only the pitch, yaw, and roll of the head but also the forward, backward, and side-to-side motion of the viewer). If any component of the `transform` is computed or created artificially (such as by using mouse or keyboard controls to move through space), this value is instead `true`, indicating that the `transform` is in part emulated in software.
- {{DOMxRef("XRPose.linearVelocity")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMPointReadOnly")}} describing the linear velocity in meters per second relative to the base {{DOMxRef("XRSpace")}}.
- {{DOMxRef("XRPose.transform")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("XRRigidTransform")}} which provides the position and orientation of the pose relative to the base {{DOMxRef("XRSpace")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRFrame.getPose()")}}
- {{DOMxRef("XRViewerPose")}}
