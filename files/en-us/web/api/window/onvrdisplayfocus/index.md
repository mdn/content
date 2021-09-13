---
title: Window.onvrdisplayfocus
slug: Web/API/Window/onvrdisplayfocus
tags:
  - API
  - Event Handler
  - Experimental
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - Window
  - events
  - onvrdisplayfocus
browser-compat: api.Window.onvrdisplayfocus
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

The **`onvrdisplayfocus`** property of the
{{domxref("Window")}} interface represents an event handler that will run when
presentation to a display has resumed after being blurred (when the
{{event("vrdisplayfocus")}} event fires).

> **Note:** This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The event object is of type {{domxref("VRDisplayEvent")}}.

## Syntax

```js
window.onvrdisplayfocus = function() { ... };
```

## Examples

```js
window.onvrdisplayfocus = function() {
  info.textContent = 'Display focused.';
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
