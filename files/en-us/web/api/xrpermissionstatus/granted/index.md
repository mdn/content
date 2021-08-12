---
title: XRPermissionStatus.granted
slug: Web/API/XRPermissionStatus/granted
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

The WebXR Device API's {{domxref("XRPermissionStatus")}}
interface's **`granted`** property is an array of strings, each
identifying one of the WebXR features for which permission has been granted as of the
time at which the Permission API's {{domxref("Permissions.query",
  "navigator.permissions.query()")}} method was called.

## Syntax

```js
grantedFeatures = xrPermissionStatus.granted;
```

### Value

An array of strings, each identifying a single WebXR feature
which the app or site has been granted permission to use. Currently, all of these
strings are reference space types.

| XRReferenceSpaceType | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Interface                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `bounded-floor`      | Similar to the `local` type, except the user is not expected to move outside a predetermined boundary, given by the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} in the returned object.                                                                                                                                                                                                                                                                                    | {{domxref("XRBoundedReferenceSpace")}} |
| `local`              | A tracking space whose native origin is located near the viewer's position at the time the session was created. The exact position depends on the underlying platform and implementation. The user isn't expected to move much if at all beyond their starting position, and tracking is optimized for this use case. For devices with six degrees of freedom (6DoF) tracking, the `local` reference space tries to keep the origin stable relative to the environment.                                                         | {{domxref("XRReferenceSpace")}}             |
| `local-floor`        | Similar to the `local` type, except the starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level. If that floor level isn't known, the {{Glossary("user agent")}} will estimate the floor level. If the estimated floor level is non-zero, the browser is expected to round it such a way as to avoid fingerprinting (likely to the nearest centimeter).                                                                                             | {{domxref("XRReferenceSpace")}}             |
| `unbounded`          | A tracking space which allows the user total freedom of movement, possibly over extremely long distances from their origin point. The viewer isn't tracked at all; tracking is optimized for stability around the user's current position, so the native origin may drift as needed to accommodate that need.                                                                                                                                                                                                                   | {{domxref("XRReferenceSpace")}}             |
| `viewer`             | A tracking space whose native origin tracks the viewer's position and orientation. This is used for environments in which the user can physically move around, and is supported by all instances of {{domxref("XRSession")}}, both immersive and inline, though it's most useful for inline sessions. It's particularly useful when determining the distance between the viewer and an input, or when working with offset spaces. Otherwise, typically, one of the other reference space types will be used more often. | {{domxref("XRReferenceSpace")}}             |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions
  and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
- {{domxref("XRPermissionStatus")}}
- {{domxref("navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}}
- {{domxref("Permissions")}}
