---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - VR
  - VRDisplayCapabilities
  - Virtual Reality
  - WebVR
browser-compat: api.VRDisplayCapabilities
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRDisplayCapabilities`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) describes the capabilities of a {{domxref("VRDisplay")}} — its features can be used to perform VR device capability tests, for example can it return position information.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This interface is accessible through the {{domxref("VRDisplay.capabilities")}} property.

## Properties

- {{domxref("VRDisplayCapabilities.canPresent")}} {{readonlyInline}}
  - : Returns a boolean value stating whether the VR display is capable of presenting content (e.g. through an HMD).
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{readonlyInline}}
  - : Returns a boolean value stating whether the VR display is separate from the device's primary display.
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{deprecated_inline}} {{readonlyInline}}
  - : Returns a boolean value stating whether the VR display can track and return orientation information.
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{readonlyInline}}
  - : Returns a boolean value stating whether the VR display can track and return position information.
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{readonlyInline}}
  - : Returns a number indicating the maximum number of {{domxref("VRLayerInit")}}s that the VR display can present at once (e.g. the maximum length of the array that {{domxref("VRDisplay.requestPresent()")}} can accept.)

## Examples

```js
function reportDisplays() {
  navigator.getVRDisplays().then(function(displays) {
    for(var i = 0; i < displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>Display ' + (i+1) + '</strong>'
                   + '<br>VR Display ID: ' + displays[i].displayId
                   + '<br>VR Display Name: ' + displays[i].displayName
                   + '<br>Display can present content: ' + cap.canPresent
                   + '<br>Display is separate from the computer\'s main display: ' + cap.hasExternalDisplay
                   + '<br>Display can return position info: ' + cap.hasPosition
                   + '<br>Display can return orientation info: ' + cap.hasOrientation
                   + '<br>Display max layers: ' + cap.maxLayers;
      list.appendChild(listItem);
    }
  });
}
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
