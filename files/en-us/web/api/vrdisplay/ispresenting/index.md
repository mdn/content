---
title: "VRDisplay: isPresenting property"
short-title: isPresenting
slug: Web/API/VRDisplay/isPresenting
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay.isPresenting
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`isPresenting`** read-only property of the {{domxref("VRDisplay")}} interface returns a boolean value indicating whether the `VRDisplay` is currently having content presented through it.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A boolean value; `true` means the display is presenting; `false` means it isn't.

## Examples

```js
function onVRExitPresent() {
  // No sense in exiting presentation if we're not actually presenting.
  // (This may happen if we get an event like vrdisplaydeactivate when
  // we weren't presenting.)
  if (!vrDisplay.isPresenting) return;
  vrDisplay.exitPresent().then(
    () => {
      // Nothing to do because we're handling things in onVRPresentChange.
    },
    (err) => {
      let errMsg = "exitPresent failed.";
      if (err && err.message) {
        errMsg += `<br/>${err.message}`;
      }
      VRSamplesUtil.addError(errMsg, 2000);
    },
  );
}
```

> [!NOTE]
> Code snippet taken from [Google's VR Presentation demo](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html).

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
