---
title: VRDisplay.requestPresent()
slug: Web/API/VRDisplay/requestPresent
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Method
  - Reference
  - VR
  - VRDisplay
  - Virtual Display
  - WebVR
  - requestPresent()
  - Non-standard
browser-compat: api.VRDisplay.requestPresent
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`requestPresent()`** method of the {{domxref("VRDisplay")}} interface starts the `VRDisplay` presenting a scene.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
requestPresent(layers)
```

### Parameters

- `layers`
  - : An array of {{domxref("VRLayerInit")}} objects representing the scene you want to present. At the moment, this can be a minimum of 0 and a maximum of 1.

### Return value

A promise that resolves once the presentation has begun. there are a number of rules surrounding the promise's fulfillment or rejection:

- If {{domxref("VRDisplayCapabilities.canPresent")}} is false, or if the VRLayer array contains more than {{domxref("VRDisplayCapabilities.maxLayers")}} layers, the promise will be rejected.
- If the {{domxref("VRDisplay")}} is already presenting when `requestPresent()` is called, the `VRDisplay` will update the `VRLayer` array being presented.
- If a call to `requestPresent()` is rejected while the `VRDisplay` is already presenting it will end its presentation.
- If `requestPresent()` is called outside of an engagement gesture the promise will be rejected unless the `VRDisplay` was already presenting. This engagement gesture is also sufficient to allow [`requestPointerLock()`](/en-US/docs/Web/API/Element/requestPointerLock) calls until presentation has ended.

## Examples

```js
if (navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log('Display found');
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener('click', () => {
        if (btn.textContent === 'Start VR display') {
          vrDisplay.requestPresent([{ source: canvas }]).then(() => {
            console.log('Presenting to WebVR display');

            // Set the canvas size to the size of the vrDisplay viewport

            const leftEye = vrDisplay.getEyeParameters('left');
            const rightEye = vrDisplay.getEyeParameters('right');

            canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

            // stop the normal presentation, and start the vr presentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = 'Exit VR display';
          });
        } else {
          vrDisplay.exitPresent();
          console.log('Stopped presenting to WebVR display');

          btn.textContent = 'Start VR display';

          // Stop the VR presentation, and start the normal presentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
}
```

> **Note:** You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js).

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
