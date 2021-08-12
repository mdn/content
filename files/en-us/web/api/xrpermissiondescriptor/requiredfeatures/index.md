---
title: XRPermissionDescriptor.requiredFeatures
slug: Web/API/XRPermissionDescriptor/requiredFeatures
tags:
  - API
  - AR
  - Mixed
  - Permissions
  - Property
  - Reality
  - Reference
  - Reference Space
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRPermissionDescriptor
  - augmented
  - features
  - requiredFeatures
browser-compat: api.XRPermissionDescriptor.requiredFeatures
---
{{APIRef("WebXR Device API")}}{{SecureContext_header}}

The {{domxref("XRPermissionDescriptor")}}
dictionary's **`requiredFeatures`** property should be set
prior to calling {{domxref("permissions.query", "navigator.permissions.query()")}} to
a list of WebXR features which must be supported for the app to work. This
ensures that permissions are checked as applicable to ensure that those features are
available upon request.

## Syntax

```js
xrPermissionDescriptor = {
   mode: xrSessionMode,
   requiredFeatures: reqFeatureList,
   optionalFeatures: optFeatureList
};

xrPermissionDescriptor.requiredFeatures = reqFeatureList;
reqFeatureList = xrPermissionDescriptor.requiredFeatures;
```

### Value

An array of strings indicating the WebXR features which *must* be available for
use by the app or site. The permissions check will be performed in such a manner as to
verify that all features in the list are available for use with the user's permission.

Currently, all features indicate the reference space types that your app would like
permission to use. Future editions of WebXR may add more
recognized features.

The permitted values are:

| XRReferenceSpaceType | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Interface                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `bounded-floor`      | Similar to the `local` type, except the user is not expected to move outside a predetermined boundary, given by the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} in the returned object.                                                                                                                                                                                                                                                                                    | {{domxref("XRBoundedReferenceSpace")}} |
| `local`              | A tracking space whose native origin is located near the viewer's position at the time the session was created. The exact position depends on the underlying platform and implementation. The user isn't expected to move much if at all beyond their starting position, and tracking is optimized for this use case. For devices with six degrees of freedom (6DoF) tracking, the `local` reference space tries to keep the origin stable relative to the environment.                                                         | {{domxref("XRReferenceSpace")}}             |
| `local-floor`        | Similar to the `local` type, except the starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level. If that floor level isn't known, the {{Glossary("user agent")}} will estimate the floor level. If the estimated floor level is non-zero, the browser is expected to round it such a way as to avoid fingerprinting (likely to the nearest centimeter).                                                                                             | {{domxref("XRReferenceSpace")}}             |
| `unbounded`          | A tracking space which allows the user total freedom of movement, possibly over extremely long distances from their origin point. The viewer isn't tracked at all; tracking is optimized for stability around the user's current position, so the native origin may drift as needed to accommodate that need.                                                                                                                                                                                                                   | {{domxref("XRReferenceSpace")}}             |
| `viewer`             | A tracking space whose native origin tracks the viewer's position and orientation. This is used for environments in which the user can physically move around, and is supported by all instances of {{domxref("XRSession")}}, both immersive and inline, though it's most useful for inline sessions. It's particularly useful when determining the distance between the viewer and an input, or when working with offset spaces. Otherwise, typically, one of the other reference space types will be used more often. | {{domxref("XRReferenceSpace")}}             |

## Examples

In this example, permissions are checked to ensure that the user has granted permission
for the site or app to use immersive augmented reality mode with the
`local-floor` reference space (presumably since the user is unlikely to start
to fly).

```js
let xrPermissionDesc = {
  name: "xr",
  mode: "immersive-ar",
  requiredFeatures: [ "local-floor" ]
};

if (navigator.permissions) {
  navigator.permissions.query(xrPermissionDesc).then(({state}) => {
    switch(state) {
      case "granted":
        setupXR();
        break;
      case "prompt":
        promptAndSetupXR();
        break;
      default:
        /* do nothing otherwise */
       break;
  }
  .catch(err) {
    console.log(err);
  }
} else {
  setupXR();
}
```

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
