---
title: VRDisplay.isConnected
slug: Web/API/VRDisplay/isConnected
tags:
  - API
  - Deprecated
  - Experimental
  - Property
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - isConnected
browser-compat: api.VRDisplay.isConnected
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`isConnected`** read-only property of the {{domxref("VRDisplay")}} interface returns a boolean value indicating whether the `VRDisplay` is connected to the computer.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var isItConnected = vrDisplayInstance.isConnected;
```

### Value

A boolean value; `true` means the display is connected; `false` means it isn't.

## Examples

```js
navigator.getVRDisplays().then(function(displays) {
  // If a display is available, use it to present the scene
  if(displays.length > 0) {
    vrDisplay = displays[0];

    // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
    btn.addEventListener('click', function() {
      // Only request presentation if the display is still connected.
      if(vrDisplay.isConnected) {
        vrDisplay.requestPresent([{ source: canvas }]).then(function() {
          // start rendering the app, etc.
        });
      } else {
        console.log('Connection to display lost');
      }
    });
  }
}); 
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
