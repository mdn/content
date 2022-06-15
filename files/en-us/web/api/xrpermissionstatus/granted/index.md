---
title: XRPermissionStatus.granted
slug: Web/API/XRPermissionStatus/granted
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Mixed
  - Permissions
  - Property
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR API
  - WebXR Device API
  - WenXR
  - XR
  - XRPermissionStatus
  - augmented
  - granted
browser-compat: api.XRPermissionStatus.granted
---
{{APIRef("WebXR Device API")}}

The WebXR Device API's {{domxref("XRPermissionStatus")}}
interface's **`granted`** property is an array of strings, each
identifying one of the WebXR features for which permission has been granted as of the
time at which the Permission API's {{domxref("Permissions.query",
  "navigator.permissions.query()")}} method was called.

## Value

An array of strings, each identifying a single WebXR feature which the app or site has been granted permission to use. Possible values:

- `anchor`
  - : Use of {{domxref("XRAnchor")}} objects has been enabled.
- `bounded-floor`
  - : A tracking space similar to the `local` type, except the user is not expected to move outside a predetermined boundary, given by the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} in the returned object, has been enabled.
- `depth-sensing`
  - : The ability to obtain depth information using {{domxref("XRDepthInformation")}} objects has been enabled.
- `dom-overlay`
  - : Allowing to specify a DOM overlay element that will be displayed to the user has been enabled.
- `hand-tracking`
  - : Articulated hand pose information from hand-based input controllers (see {{domxref("XRHand")}} and {{domxref("XRInputSource.hand")}}) has been enabled.
- `hit-test`
  - : Hit testing features for performing hit tests against real world geometry has been enabled.
- `layers`
  - : The ability to create various layer types (other than {{domxref("XRProjectionLayer")}}) has been enabled.
- `light-estimation`
  - : The ability to estimate environmental lighting conditions using {{domxref("XRLightEstimate")}} objects has been enabled.
- `local`
  - : A tracking space whose native origin is located near the viewer's position at the time the session was created has been enabled.
- `local-floor`
  - : A tracking space similar to the `local` type, except the starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level, has been enabled.
- `secondary-views`
  - : The ability to use {{domxref("XRView")}} objects as secondary views has been enabled. This can be used for first-person observer views used for video capture, or "quad views" where there are two views per eye, with differing resolution and fields of view.
- `unbounded`
  - : A tracking space which allows the user total freedom of movement, possibly over extremely long distances from their origin point, has been enabled.
- `viewer`
  - : A tracking space whose native origin tracks the viewer's position and orientation has been enabled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
- {{domxref("XRPermissionStatus")}}
- {{domxref("navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}}
- {{domxref("Permissions")}}
