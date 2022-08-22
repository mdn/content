---
title: VRDisplay.getImmediatePose()
slug: Web/API/VRDisplay/getImmediatePose
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Method
  - Deprecated
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - getImmediatePose()
  - Non-standard
browser-compat: api.VRDisplay.getImmediatePose
---
{{Deprecated_Header}}{{APIRef("WebVR API")}}{{Non-standard_Header}}

The **`getImmediatePose()`** method of the {{domxref("VRDisplay")}} interface returns a {{domxref("VRPose")}} object defining the current pose of the `VRDisplay`, with no prediction applied.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
getImmediatePose()
```

### Parameters

None.

### Return value

A {{domxref("VRPose")}} object.

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
