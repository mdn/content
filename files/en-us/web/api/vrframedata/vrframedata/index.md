---
title: VRFrameData()
slug: Web/API/VRFrameData/VRFrameData
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - VR
  - VRFrameData
  - Virtual Reality
  - WebVR
browser-compat: api.VRFrameData.VRFrameData
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRFrameData()`** constructor creates a {{domxref("VRFrameData")}} object instance.

> **Note:** This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var myFrameData = new VRFrameData();
```

### Parameters

None.

## Examples

See [`VRDisplay.getFrameData()`](/en-US/docs/Web/API/VRDisplay/getFrameData#examples) for example code.

## Specifications

This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
