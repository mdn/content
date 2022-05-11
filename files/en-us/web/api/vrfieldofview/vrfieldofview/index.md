---
title: VRFieldOfView()
slug: Web/API/VRFieldOfView/VRFieldOfView
tags:
  - API
  - Constructor
  - Deprecated
  - Reference
  - VR
  - VRFieldOfView
  - Virtual Reality
  - WebVR
browser-compat: api.VRFieldOfView.VRFieldOfView
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRFieldOfView()`** constructor creates a new {{domxref("VRFieldOFView")}} object.

> **Note:** This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
new VRFieldOfView(upDegrees, rightDegrees, downDegrees, leftDegrees)

new VRFieldOfView(options)
```

### Parameters

- Four argument version:

  - `upDegrees`
    - : The number of degrees upwards that the field of view will extend in.
  - `rightDegrees`
    - : The number of degrees to the right that the field of view will extend in.
  - `downDegrees`
    - : The number of degrees downwards that the field of view will extend in.
  - `leftDegrees`
    - : The number of degrees to the left that the field of view will extend in.

- One argument version:

  - `options`
    - : A dictionary object containing the four degree values specified above.

## Examples

The following simple example shows a function that can be used to set a custom field of view with four specified degree values for up, right, down and left. The `VRFieldOfView()` constructor is used to create a {{domxref("VRFieldOfView")}} object from the supplied values, which is then fed into the {{domxref("HMDVRDevice.setFieldOfView")}} method.

```js
function setCustomFOV(up,right,down,left) {
  var testFOV = new VRFieldOfView(up,right,down,left);

  gHMD.setFieldOfView(testFOV,testFOV,0.01,10000.0);

  var lEye = gHMD.getEyeParameters('left');
  var rEye = gHMD.getEyeParameters('right');
  console.log(lEye.currentFieldOfView);
  console.log(rEye.currentFieldOfView);
}
```

> **Note:** When testing, setting a weird/tiny field of view can really mess up your view. It is a good idea to grab the current field of view first (using {{domxref("VREyeParameters.fieldOfView")}}) before making any drastic changes, so you can reset it afterwards if needed.

## Specifications

This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
