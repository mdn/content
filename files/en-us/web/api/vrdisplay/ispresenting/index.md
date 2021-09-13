---
title: VRDisplay.isPresenting
slug: Web/API/VRDisplay/isPresenting
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - isPresenting
browser-compat: api.VRDisplay.isPresenting
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`isPresenting`** read-only property of the {{domxref("VRDisplay")}} interface returns a boolean value indicating whether the `VRDisplay` is currently having content presented through it.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var isItPresenting = vrDisplayInstance.isPresenting;
```

### Value

A boolean value; `true` means the display is presenting; `false` means it isn't.

## Examples

```js
function onVRExitPresent () {
  // No sense in exiting presentation if we're not actually presenting.
  // (This may happen if we get an event like vrdisplaydeactivate when
  // we weren't presenting.)
  if (!vrDisplay.isPresenting)
    return;
  vrDisplay.exitPresent().then(function () {
    // Nothing to do because we're handling things in onVRPresentChange.
  }, function (err) {
    var errMsg = "exitPresent failed.";
    if (err && err.message) {
      errMsg += "<br/>" + err.message
    }
    VRSamplesUtil.addError(errMsg, 2000);
  });
}
```

> **Note:** Code snippet taken from [Google's VR Presentation demo](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html).

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
