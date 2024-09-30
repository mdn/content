---
title: "VRDisplayCapabilities: maxLayers property"
short-title: maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplayCapabilities.maxLayers
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`maxLayers`** read-only property of the {{domxref("VRDisplayCapabilities")}} interface returns a number indicating the maximum number of {{domxref("VRLayerInit")}}s that the VR display can present at once (e.g. the maximum length of the array that {{domxref("VRDisplay.requestPresent()")}} can accept.)

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A number, which must be 1 if {{domxref("VRDisplayCapabilities.canPresent")}} is `true`, or 0 otherwise.

## Examples

See [`VRDisplayCapabilities`](/en-US/docs/Web/API/VRDisplayCapabilities#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
