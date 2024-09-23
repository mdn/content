---
title: "VRStageParameters: sizeY property"
short-title: sizeY
slug: Web/API/VRStageParameters/sizeY
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRStageParameters.sizeY
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`sizeY`** read-only property of the {{domxref("VRStageParameters")}} interface _returns the depth_ of the play-area bounds in meters.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The bounds are defined as an axis-aligned rectangle on the floor, for safety purposes. Content should not require the user to move beyond these bounds; however, it is possible for the user to ignore the bounds resulting in position values outside of this rectangle. The center of the rectangle is at (0,0,0) in standing-space coordinates.

## Value

A float representing the depth in meters.

## Examples

See [`VRStageParameters`](/en-US/docs/Web/API/VRStageParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
