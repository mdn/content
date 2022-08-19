---
title: VRDisplayCapabilities.maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - VR
  - VRDisplayCapabilities
  - Virtual Reality
  - WebVR
  - maxLayers
  - Non-standard
browser-compat: api.VRDisplayCapabilities.maxLayers
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`maxLayers`** read-only property of the {{domxref("VRDisplayCapabilities")}} interface returns a number indicating the maximum number of {{domxref("VRLayerInit")}}s that the VR display can present at once (e.g. the maximum length of the array that {{domxref("Display.requestPresent()")}} can accept.)

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A number, which must be 1 if {{domxref("VRDisplayCapabilities.canPresent")}} is `true`, or 0 otherwise.

## Examples

See [`VRDisplayCapabilities`](/en-US/docs/Web/API/VRDisplayCapabilities#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
