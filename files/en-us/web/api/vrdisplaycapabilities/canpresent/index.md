---
title: "VRDisplayCapabilities: canPresent property"
short-title: canPresent
slug: Web/API/VRDisplayCapabilities/canPresent
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplayCapabilities.canPresent
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`canPresent`** read-only property of the {{domxref("VRDisplayCapabilities")}} interface returns a boolean value stating whether the VR display is capable of presenting content (e.g. through an HMD).

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This is useful for identifying "magic window" devices that are capable of 6DoF tracking but for which {{domxref("VRDisplay.requestPresent()")}} is not meaningful. If `canPresent` is `false`, calls to {{domxref("VRDisplay.requestPresent()")}} will fail, and {{domxref("VRDisplay.getEyeParameters()")}} will return `null`.

## Value

A boolean value.

## Examples

See [`VRDisplayCapabilities`](/en-US/docs/Web/API/VRDisplayCapabilities#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
