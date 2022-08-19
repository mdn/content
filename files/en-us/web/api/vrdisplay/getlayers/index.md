---
title: VRDisplay.getLayers()
slug: Web/API/VRDisplay/getLayers
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Deprecated
  - Method
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - getLayers()
  - Non-standard
browser-compat: api.VRDisplay.getLayers
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`getLayers()`** method of the {{domxref("VRDisplay")}} interface returns the layers currently being presented by the `VRDisplay`.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
getLayers()
```

### Parameters

None.

### Return value

If the {{domxref("VRDisplay")}} is presenting, this method returns an array of the {{domxref("VRLayerInit")}} objects currently being presented (this will currently be one, as {{domxref("VRDisplayCapabilities.maxLayers")}} is currently always 1). If the {{domxref("VRDisplay")}} is not presenting, this method returns an empty array.

## Examples

See [`VRLayerInit`](/en-US/docs/Web/API/VRLayerInit#examples) for example code.

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
