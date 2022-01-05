---
title: HMDVRDevice.getEyeParameters()
slug: Web/API/HMDVRDevice/getEyeParameters
tags:
  - API
  - Experimental
  - HMDVRDevice
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - Deprecated
browser-compat: api.HMDVRDevice.getEyeParameters
---
{{deprecated_header}}{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`getEyeParameters()`** method of the {{domxref("HMDVRDevice")}} interface returns current parameters for the eye specified as its argument ("left" or "right") — stored in a {{domxref("VREyeParameters")}} object.

This includes field of view information, and more.

## Syntax

```js
var myLeftEye = HMDVRDevice.getEyeParameters('left');
```

### Parameters

- `whichEye`
  - : A {{domxref("DOMString")}} representing the eye you want to return information about. The value can be `left` or `right`.

### Returns

A {{domxref("VREyeParameters")}} object.

## Examples

The following example is taken from the Mozilla VR Team's [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) code — to be precise, the [VREffect.js file](https://github.com/MozVR/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js#L28-L29). Early on in the code the `getEyeParameters()` method is used to access information about each eye, which is then used for rendering calculations later on.

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

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
