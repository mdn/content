---
title: Window.onvrdisplaypointerunrestricted
slug: Web/API/Window/onvrdisplaypointerunrestricted
tags:
  - Event Handler
  - Experimental
  - Property
  - WebVR
  - Window
  - onvrdisplaypointerunrestricted
browser-compat: api.Window.onvrdisplaypointerunrestricted
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

The **`onvrdisplaypointerunrestricted`** property of the
{{domxref("Window")}} interface represents an event handler that will run when the VR
display's pointer input is no longer restricted to consumption via a [pointerlocked element](/en-US/docs/Web/API/Pointer_Lock_API).

> **Note:** This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The event object is of type {{domxref("VRDisplayEvent")}}.

## Syntax

```js
window.onvrdisplaypointerunrestricted = functionRef;
```

## Examples

```js
window.onvrdisplaypointerunrestricted = function() {
  // Run code to handle freeing app from pointer lock
};
```

## Specifications

This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR Device API](https://immersive-web.github.io/webxr/), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> —
  demos, downloads, and other resources from the Mozilla VR team.
