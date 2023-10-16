---
title: "HMDVRDevice: getEyeParameters() method"
short-title: getEyeParameters()
slug: Web/API/HMDVRDevice/getEyeParameters
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.HMDVRDevice.getEyeParameters
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

The **`getEyeParameters()`** method of the {{domxref("HMDVRDevice")}} interface returns current parameters for the eye specified as its argument ("left" or "right") — stored in a {{domxref("VREyeParameters")}} object.

This includes field of view information, and more.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameters

- `whichEye`
  - : A string representing the eye you want to return information about. The value can be `left` or `right`.

### Return value

A {{domxref("VREyeParameters")}} object.

## Examples

The following example is taken from the Mozilla VR Team's [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) code — to be precise, the [VREffect.js file](https://github.com/MozillaReality/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js). Early on in the code the `getEyeParameters()` method is used to access information about each eye, which is then used for rendering calculations later on.

```js
if (vrHMD.getEyeParameters !== undefined) {
  const eyeParamsL = vrHMD.getEyeParameters("left");
  const eyeParamsR = vrHMD.getEyeParameters("right");

  eyeTranslationL = eyeParamsL.eyeTranslation;
  eyeTranslationR = eyeParamsR.eyeTranslation;
  eyeFOVL = eyeParamsL.recommendedFieldOfView;
  eyeFOVR = eyeParamsR.recommendedFieldOfView;
} else {
  // …
}
```

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
