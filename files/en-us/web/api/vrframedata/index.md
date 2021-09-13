---
title: VRFrameData
slug: Web/API/VRFrameData
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - VR
  - VRFrameData
  - Virtual Reality
  - WebVR
browser-compat: api.VRFrameData
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRFrameData`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents all the information needed to render a single frame of a VR scene; constructed by {{domxref("VRDisplay.getFrameData()")}}.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Constructor

- {{domxref("VRFrameData.VRFrameData()")}}
  - : Creates a `VRFrameData` object instance.

## Properties

- {{domxref("VRFrameData.leftProjectionMatrix")}} {{readonlyInline}}
  - : A {{jsxref("Float32Array")}} representing a 4x4 matrix that describes the projection to be used for the left eye’s rendering.
- {{domxref("VRFrameData.leftViewMatrix")}} {{readonlyInline}}
  - : A {{jsxref("Float32Array")}} representing a 4x4 matrix that describes the view transform to be used for the left eye’s rendering.
- {{domxref("VRFrameData.pose")}} {{readonlyInline}}
  - : The {{domxref("VRPose")}} of the {{domxref("VRDisplay")}} at the current {{domxref("VRFrameData.timestamp")}}.
- {{domxref("VRFrameData.rightProjectionMatrix")}} {{readonlyInline}}
  - : A {{jsxref("Float32Array")}} representing a 4x4 matrix that describes the projection to be used for the right eye’s rendering.
- {{domxref("VRFrameData.rightViewMatrix")}} {{readonlyInline}}
  - : A {{jsxref("Float32Array")}} representing a 4x4 matrix that describes the view transform to be used for the right eye’s rendering.
- {{domxref("VRFrameData.timestamp")}} {{readonlyInline}}
  - : A constantly increasing timestamp value representing the time a frame update occurred.

## Examples

See [`VRDisplay.getFrameData()`](/en-US/docs/Web/API/VRDisplay/getFrameData#examples) for example code.

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
