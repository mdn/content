---
title: VREyeParameters.offset
slug: Web/API/VREyeParameters/offset
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
  - offset
browser-compat: api.VREyeParameters.offset
---
{{APIRef("WebVR API")}}{{Deprecated_header}}

The **`offset`** read-only property of the {{domxref("VREyeParameters")}} interface *r\*\*epresents the o*ffset from the center point between the user's eyes to the center of the eye, measured in meters.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This value should represent half the user’s interpupillary distance (IPD), but may also represent the distance from the center point of the headset to the center point of the lens for the given eye.

## Syntax

```js
var myOffset = eyeParametersInstance.offset;
```

### Value

A {{jsxref("Float32Array")}} representing a vector describing the offset from the center point between the users eyes to the center of the eye in meters.

> **Note:** Values for the left eye will be negative; values for the right eye will be positive.

## Examples

See [`VRFieldOfView`](/en-US/docs/Web/API/VRFieldOfView#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
