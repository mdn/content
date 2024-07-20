---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplayCapabilities
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`VRDisplayCapabilities`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) describes the capabilities of a {{domxref("VRDisplay")}} — its features can be used to perform VR device capability tests, for example can it return position information.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This interface is accessible through the {{domxref("VRDisplay.capabilities")}} property.

## Instance properties

- {{domxref("VRDisplayCapabilities.canPresent")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns a boolean value stating whether the VR display is capable of presenting content (e.g. through an HMD).
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns a boolean value stating whether the VR display is separate from the device's primary display.
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns a boolean value stating whether the VR display can track and return orientation information.
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns a boolean value stating whether the VR display can track and return position information.
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns a number indicating the maximum number of {{domxref("VRLayerInit")}}s that the VR display can present at once (e.g. the maximum length of the array that {{domxref("VRDisplay.requestPresent()")}} can accept.)

## Examples

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement("li");
      listItem.innerText = `
VR Display ID: ${display.displayId}
VR Display Name: ${display.displayName}
Display can present content: ${cap.canPresent}
Display is separate from the computer's main display: ${cap.hasExternalDisplay}
Display can return position info: ${cap.hasPosition}
Display can return orientation info: ${cap.hasOrientation}
Display max layers: ${cap.maxLayers}`;
      listItem.insertBefore(
        document.createElement("strong"),
        listItem.firstChild,
      ).textContent = `Display ${i + 1}`;
      list.appendChild(listItem);
    });
  });
}
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
