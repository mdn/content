---
title: "Gamepad: displayId property"
short-title: displayId
slug: Web/API/Gamepad/displayId
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.Gamepad.displayId
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`displayId`** read-only property of the {{domxref("Gamepad")}} interface _returns the {{domxref("VRDisplay.displayId")}} of the associated {{domxref("VRDisplay")}} — the `VRDisplay` that the gamepad is controlling the displayed scene of._

A Gamepad is considered to be associated with a {{domxref("VRDisplay")}} if it reports a pose that is in the same space as the display's pose, see {{domxref("VRDisplay.getPose()")}}.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute). It has been superseded by the [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/).
>
> There is no direct replacement for this property. The {{domxref("Gamepad")}} object associated with an {{domxref("XRInputSource")}} can be obtained using the {{domxref("XRInputSource.gamepad")}} property.

## Value

A number representing the associated {{domxref("VRDisplay.displayId")}}. If the number is 0, then the gamepad is not associated with a VR display.

## Examples

```js
window.addEventListener("gamepadconnected", (e) => {
  if (!e.gamepad.displayId) {
    console.log("Gamepad connected");
  } else {
    console.log(
      `Gamepad connected, associated with VR display ${e.gamepad.displayId}`,
    );
  }
});
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute) that has been superseded by the [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
