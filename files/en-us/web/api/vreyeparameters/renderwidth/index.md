---
title: "VREyeParameters: renderWidth property"
short-title: renderWidth
slug: Web/API/VREyeParameters/renderWidth
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VREyeParameters.renderWidth
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`renderWidth`** read-only property of the {{domxref("VREyeParameters")}} interface describes the recommended render target width of each eye viewport, in pixels.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This is already in device pixel units, so there's no need to multiply by [Window.devicePixelRatio](/en-US/docs/Web/API/Window/devicePixelRatio) before setting to [HTMLCanvasElement.width.](/en-US/docs/Web/API/HTMLCanvasElement/width)

## Value

A number, representing the width in pixels.

## Examples

See [`VREyeParameters`](/en-US/docs/Web/API/VREyeParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
