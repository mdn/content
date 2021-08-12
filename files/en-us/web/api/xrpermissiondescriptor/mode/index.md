---
title: XRPermissionDescriptor.mode
slug: Web/API/XRPermissionDescriptor/mode
tags:
  - API
  - AR
  - Mixed
  - Permissions
  - Property
  - Reality
  - Reference
  - Session
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRPermissionDescriptor
  - XRSessionMode
  - augmented
  - mode
browser-compat: api.XRPermissionDescriptor.mode
---
{{APIRef("WebXR Device API")}}{{SecureContext_header}}

The **`mode`** property of
the {{domxref("XRPermissionDescriptor")}} dictionary is a string, specifying which Web XR session mode
(`inline`, `immersive-vr`, or `immersive-ar`) the
described permissions will be used for.

## Syntax

```js
xrPermissionDescriptor = {
  mode: xrSessionMode,
  requiredFeatures: reqFeatureList,
  optionalFeatures: optFeatureList
};

xrPermissionDescriptor.mode = xrSessionMode;
xrMode = xrPermissionDescriptor.mode;
```

### Value

A {{domxref("DOMString")}} whose value is one of the following strings

- {{experimental_inline}} `immersive-ar`: The session's output will be given exclusive access to the immersive device,
  but the rendered content will be blended with the real-world environment.
  The session's {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} indicates the method
  to be used to blend the content together.
- `immersive-vr`: Indicates that the rendered session will be displayed using an immersive XR device
  in VR mode; it is not intended to be overlaid or integrated into the surrounding environment.
  The {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} is expected to be
  `opaque` if possible, but might be `additive` if the hardware requires it.
- `inline`: The output is presented inline within the context of an element in a standard HTML document,
  rather than occupying the full visual space. Inline sessions can be presented in either mono or stereo mode,
  and may or may not have viewer tracking available. Inline sessions don't require special hardware and should be
  available on any {{Glossary("user agent")}} offering WebXR API support.

## Usage notes

## Examples

The example below checks to ensure that permission has been granted to allow the user
to use WebXR for an immersive virtual reality experience. No specific features are
specified during this query; see {{domxref("XRPermissionDescriptor.requiredFeatures",
  "requiredFeatures")}} and {{domxref("XRPermissionDescriptor.optionalFeatures",
  "optionalFeatures")}} for more information on specifying features during a WebXR
permission check.

```js
let xrPermissionDesc = {
  name: "xr",
  mode: "immersive-vr"
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
