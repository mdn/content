---
title: "VREyeParameters: offset property"
short-title: offset
slug: Web/API/VREyeParameters/offset
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VREyeParameters.offset
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`offset`** read-only property of the {{domxref("VREyeParameters")}} interface represents the offset from the center point between the user's eyes to the center of the eye, measured in meters.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This value should represent half the user's interpupillary distance (IPD), but may also represent the distance from the center point of the headset to the center point of the lens for the given eye.

## Value

A {{jsxref("Float32Array")}} representing a vector describing the offset from the center point between the users eyes to the center of the eye in meters.

> [!NOTE]
> Values for the left eye will be negative; values for the right eye will be positive.

## Examples

See [`VRFieldOfView`](/en-US/docs/Web/API/VRFieldOfView#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
