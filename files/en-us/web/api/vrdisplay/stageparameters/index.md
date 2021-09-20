---
title: VRDisplay.stageParameters
slug: Web/API/VRDisplay/stageParameters
tags:
  - API
  - Experimental
  - Deprecated
  - Property
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - stageParameters
browser-compat: api.VRDisplay.stageParameters
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`stageParameters`** read-only property of the {{domxref("VRDisplay")}} interface returns a {{domxref("VRStageParameters")}} object containing room-scale parameters, if the `VRDisplay` is capable of supporting room-scale experiences.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var myStageParameters = vrDisplayInstance.stageParameters;
```

### Value

{{domxref("VRStageParameters")}} object containing the `VRDisplay`'s room-scale parameters, or `null` if the `VRDisplay` is not capable of supporting room-scale experiences.

## Examples

See [`VRStageParameters`](/en-US/docs/Web/API/VRStageParameters#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
