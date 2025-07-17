---
title: "VRStageParameters: sittingToStandingTransform property"
short-title: sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRStageParameters.sittingToStandingTransform
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`sittingToStandingTransform`** read-only property of the {{domxref("VRStageParameters")}} interface contains a matrix that transforms the sitting-space view matrices of {{domxref("VRFrameData")}} to standing-space.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

Basically, this can be passed into your WebGL code to transform the rendered view from a sitting to standing view.

## Value

A 16-element {{jsxref("Float32Array")}} containing the components of a 4×4 transform matrix.

## Examples

See [`VRStageParameters`](/en-US/docs/Web/API/VRStageParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
