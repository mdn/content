---
title: HMDVRDevice.setFieldOfView()
slug: Web/API/HMDVRDevice/setFieldOfView
page-type: web-api-instance-method
tags:
  - API
  - HMDVRDevice
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - Deprecated
  - Non-standard
browser-compat: api.HMDVRDevice.setFieldOfView
---
{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

The **`setFieldOfView()`** method of the {{domxref("HMDVRDevice")}} interface can be used to set the field of view for one eye, or both eyes simultaneously.

## Syntax

```js
setFieldOfView(leftFOV, rightFOV, zNear, zFar)
```

### Parameters

- `leftFOV` {{optional_inline}}
  - : A {{domxref("VRFieldOfView")}} object that defines the new field of view for the left eye. If not specified, the left eye field of view does not change.
- `rightFOV` {{optional_inline}}
  - : A {{domxref("VRFieldOfView")}} object that defines the new field of view for the right eye. If not specified, the right eye field of view does not change.
- `zNear` {{optional_inline}}
  - : The distance from the eyes of the nearest point of the view. The closest things can be and still be in the view. If not specified, the default is used — `0.01`.
- `zFar` {{optional_inline}}
  - : The distance from the eyes of the farthest point of the view. The furthest away things can be and still be in the view. If not specified, the default is used — `10000.0`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following simple example shows a function that can be used to set a custom field of view with four specified degree values for up, right, down and left. The {{domxref("VRFieldOfView.VRFieldOfView","VRFieldOfView()")}} constructor is used to create a {{domxref("VRFieldOfView")}} object from the supplied values, which is then fed into the `setFieldOfView()` method (the default `zNear` and `zFar` values are always used, in this case.)

```js
function setCustomFOV(up,right,down,left) {
  const testFOV = new VRFieldOfView(up,right,down,left);

  gHMD.setFieldOfView(testFOV,testFOV,0.01,10000.0);

  const lEye = gHMD.getEyeParameters('left');
  const rEye = gHMD.getEyeParameters('right');
  console.log(lEye.currentFieldOfView);
  console.log(rEye.currentFieldOfView);
}
```

> **Note:** When testing, setting a weird/tiny field of view can really mess up your view. It is a good idea to grab the current field of view first (using {{domxref("VREyeParameters.fieldOfView")}}) before making any drastic changes, so you can reset it afterwards if needed.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
