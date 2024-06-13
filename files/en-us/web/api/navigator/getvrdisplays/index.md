---
title: "Navigator: getVRDisplays() method"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Navigator.getVRDisplays
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`getVRDisplays()`** method of the {{domxref("Navigator")}} interface returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR displays connected to the computer.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameters

None.

### Return value

A promise that resolves to an array of {{domxref("VRDisplay")}} objects.

## Examples

See [`VRDisplay`](/en-US/docs/Web/API/VRDisplay#examples) for example code.

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
