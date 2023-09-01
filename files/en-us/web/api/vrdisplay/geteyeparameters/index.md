---
title: "VRDisplay: getEyeParameters() method"
short-title: getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay.getEyeParameters
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`getEyeParameters()`** method of the {{domxref("VRDisplay")}} interface returns the {{domxref("VREyeParameters")}} object containing the eye parameters for the specified eye.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameters

- `whichEye`
  - : A string representing the eye you want to return the eye parameters for. Available values are `left` and `right` (defined in the [VREye enum](https://w3c.github.io/webvr/spec/1.1/#interface-vreye)).

### Return value

A {{domxref("VREyeParameters")}} object, or null if the VR is not able to present content (e.g. {{domxref("VRDisplayCapabilities.canPresent")}} returns `false`).

## Examples

See [`VREyeParameters`](/en-US/docs/Web/API/VREyeParameters#examples) for example code.

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
