---
title: VRStageParameters
slug: Web/API/VRStageParameters
tags:
  - API
  - Experimental
  - Deprecated
  - Interface
  - Reference
  - VR
  - VRStageParameters
  - Virtual Reality
  - WebVR
browser-compat: api.VRStageParameters
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRStageParameters`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents the values describing the stage area for devices that support room-scale experiences.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This interface is accessible through the {{domxref("VRDisplay.stageParameters")}} property.

## Properties

- {{domxref("VRStageParameters.sittingToStandingTransform")}} {{readonlyInline}}
  - : Contains a matrix that transforms the sitting-space view matrices of {{domxref("VRFrameData")}} to standing-space.
- {{domxref("VRStageParameters.sizeX")}} {{readonlyInline}}
  - : *Returns the w*idth of the play-area bounds in meters.
- {{domxref("VRStageParameters.sizeY")}} {{readonlyInline}}
  - : _Returns the depth_ of the play-area bounds in meters.

## Examples

```js
var info = document.querySelector('p');
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  var stageParams = vrDisplay.stageParameters;
  // stageParams is a VRStageParameters object

  if(stageParams === null) {
    info.textContent = 'Your VR Hardware does not support room-scale experiences.'
  } else {
    info.innerHTML = '<strong>Display stage parameters</strong>'
                 + '<br>Sitting to standing transform: ' + stageParams.sittingToStandingTransform
                 + '<br>Play area width (m): ' + stageParams.sizeX
                 + '<br>Play area depth (m): ' + stageParams.sizeY
  }
});
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
