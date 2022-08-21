---
title: VREyeParameters
slug: Web/API/VREyeParameters
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - Landing
  - Reference
  - VR
  - VREyeParameters
  - Virtual Reality
  - WebVR
  - Non-standard
browser-compat: api.VREyeParameters
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`VREyeParameters`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents all the information required to correctly render a scene for a given eye, including field of view information.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This interface is accessible through the {{domxref("VRDisplay.getEyeParameters()")}} method.

> **Warning:** The values in this interface should not be used to compute view or projection matrices. In order to ensure the widest possible hardware compatibility use the matrices provided by {{domxref("VRFrameData")}}.

## Properties

- {{domxref("VREyeParameters.offset")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : *Represents the o*ffset from the center point between the user's eyes to the center of the eye, measured in meters.
- {{domxref("VREyeParameters.fieldOfView")}}  {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : *Describes t*he current field of view for the eye, which can vary as the user adjusts their interpupillary distance (IPD).
- {{domxref("VREyeParameters.renderWidth")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Describes the recommended render target width of each eye viewport, in pixels.
- {{domxref("VREyeParameters.renderHeight")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Describes the recommended render target height of each eye viewport, in pixels.

## Examples

```js
navigator.getVRDisplays().then((displays) => {
  // If a display is available, use it to present the scene
  vrDisplay = displays[0];
  console.log('Display found');
  // Starting the presentation when the button is clicked:
  //   It can only be called in response to a user gesture
  btn.addEventListener('click', () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log('Presenting to WebVR display');

      // Set the canvas size to the size of the vrDisplay viewport

      const leftEye = vrDisplay.getEyeParameters('left');
      const rightEye = vrDisplay.getEyeParameters('right');

      canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
      canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

      drawVRScene();
    });
  });
});
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
