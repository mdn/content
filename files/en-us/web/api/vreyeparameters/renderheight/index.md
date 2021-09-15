---
title: VREyeParameters.renderHeight
slug: Web/API/VREyeParameters/renderHeight
tags:
  - API
  - Experimental
  - Deprecated
  - Property
  - Reference
  - VR
  - VREyeParameters
  - Virtual Reality
  - WebVR
  - renderHeight
browser-compat: api.VREyeParameters.renderHeight
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`renderHeight`** read-only property of the {{domxref("VREyeParameters")}} interface describes the recommended render target height of each eye viewport, in pixels.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This is already in device pixel units, so there's no need to multiply by [Window.devicePixelRatio](/en-US/docs/Web/API/Window/devicePixelRatio) before setting to [HTMLCanvasElement.height.](/en-US/docs/Web/API/HTMLCanvasElement/height)

## Syntax

```js
var myRenderHeight = eyeParametersInstance.renderHeight;
```

### Value

A number, representing the height in pixels.

## Examples

See [`VREyeParameters`](/en-US/docs/Web/API/VREyeParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
