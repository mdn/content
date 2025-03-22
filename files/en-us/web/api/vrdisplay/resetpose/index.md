---
title: "VRDisplay: resetPose() method"
short-title: resetPose()
slug: Web/API/VRDisplay/resetPose
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay.resetPose
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`resetPose()`** method of the {{domxref("VRDisplay")}} interface resets the pose for the `VRDisplay`, treating its current {{domxref("VRPose.position")}} and {{domxref("VRPose.orientation")}} as the "origin/zero" values.

> [!NOTE]
> This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

After `resetPost()` has been called, future poses returned from {{domxref("VRDisplay.getPose()")}}/{{domxref("VRDisplay.getImmediatePose()")}} will describe positions relative to the `VRDisplay`'s position when `resetPose()` was last called and will treat the display's yaw when `resetPose()` was last called as the forward orientation.

The VRDisplay's reported roll and pitch do not change when `resetPose()` is called as they are relative to gravity. Calling `resetPose()` may change the {{domxref("VRStageParameters.sittingToStandingTransform")}} matrix.

## Syntax

```js-nolint
resetPose()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Assuming vrDisplay already contains a VRDisplay object,
// and we have a <button> referenced inside btn
btn.addEventListener("click", () => {
  vrDisplay.resetPose();
  console.log("Current pose set as origin/center");
});
```

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
