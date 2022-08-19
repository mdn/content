---
title: VRStageParameters.sizeX
slug: Web/API/VRStageParameters/sizeX
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Non-standard

  - Deprecated
  - Property
  - Reference
  - VR
  - VRStageParameters
  - Virtual Reality
  - WebVR
  - sizeX
browser-compat: api.VRStageParameters.sizeX
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`sizeX`** read-only property of the {{domxref("VRStageParameters")}} interface _returns the width_ of the play-area bounds in meters.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The bounds are defined as an axis-aligned rectangle on the floor, for safety purposes. Content should not require the user to move beyond these bounds; however, it is possible for the user to ignore the bounds resulting in position values outside of this rectangle. The center of the rectangle is at (0,0,0) in standing-space coordinates.

## Value

A float representing the width in meters.

## Examples

See [`VRStageParameters`](/en-US/docs/Web/API/VRStageParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
