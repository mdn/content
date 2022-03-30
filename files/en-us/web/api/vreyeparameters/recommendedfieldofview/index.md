---
title: VREyeParameters.recommendedFieldOfView
slug: Web/API/VREyeParameters/recommendedFieldOfView
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - VR
  - VREyeParameters
  - Virtual Reality
  - WebVR
  - recommendedFieldOfView
browser-compat: api.VREyeParameters.recommendedFieldOfView
---
{{deprecated_header}}{{APIRef("WebVR API")}}

The **`recommendedFieldOfView`** read-only property of the {{domxref("VREyeParameters")}} interface describes the recommended field of view for the current eye — ideally based on user calibration.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A {{domxref("VRFieldOfView")}} object.

## Examples

The following example is taken from the Mozilla VR Team's [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) code — to be precise, the [VREffect.js file](https://github.com/MozVR/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js#L28-L29). Early on in the code the {{domxref("HMDVRDevice.getEyeParameters")}} method is used to access information about each eye — {{domxref("VREyeParameters.offset")}} and {{domxref("VREyeParameters.recommendedFieldOfView")}} — which are used for rendering calculations later on.

```js
if ( vrHMD.getEyeParameters !== undefined ) {

    var eyeParamsL = vrHMD.getEyeParameters( 'left' );
    var eyeParamsR = vrHMD.getEyeParameters( 'right' );

    eyeTranslationL = eyeParamsL.eyeTranslation;
    eyeTranslationR = eyeParamsR.eyeTranslation;
    eyeFOVL = eyeParamsL.recommendedFieldOfView;
    eyeFOVR = eyeParamsR.recommendedFieldOfView;

} else {

  ...

}
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- {{domxref("VRFieldOfView")}}
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
