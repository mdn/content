---
title: VRLayerInit
slug: Web/API/VRLayerInit
page-type: web-api-interface
status:
  - deprecated
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRLayerInit`** dictionary of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents a content layer (an {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}}) that you want to present in a VR display.

> **Note:** This dictionary was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

You can retrieve `VRLayerInit` objects using {{domxref("VRDisplay.getLayers()")}}, and present them using the {{domxref("VRDisplay.requestPresent()")}} method.

## Instance properties

- {{domxref("VRLayerInit.leftBounds")}} {{deprecated_inline}}
  - : Defines the left texture bounds of the canvas whose contents will be presented by the {{domxref("VRDisplay")}}.
- {{domxref("VRLayerInit.rightBounds")}} {{deprecated_inline}}
  - : Defines the right texture bounds of the canvas whose contents will be presented by the {{domxref("VRDisplay")}}.
- {{domxref("VRLayerInit.source")}} {{deprecated_inline}}
  - : Defines the canvas whose contents will be presented by the {{domxref("VRDisplay")}} when {{domxref("VRDisplay.submitFrame()")}} is called.

## Examples

```js
// currently returns an empty array
let layers = vrDisplay.getLayers();

if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display found");
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener("click", () => {
        vrDisplay.requestPresent([{ source: canvas }]).then(() => {
          console.log("Presenting to WebVR display");

          // Here it returns an array of VRLayerInit objects
          layers = vrDisplay.getLayers();

          // …
        });
      });
    }
  });
}
```

{{domxref("VRLayerInit")}} objects look something like this:

```js
{
  leftBounds : [/* … */],
  rightBounds: [/* … */],
  source: canvasReference
}
```

> **Note:** The `canvasReference` refers to the {{htmlelement("canvas")}} element itself, not the WebGL context associated with the canvas. The other two members are arrays

## Specifications

This dictionary was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
