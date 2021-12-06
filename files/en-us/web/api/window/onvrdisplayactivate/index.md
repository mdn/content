---
title: Window.onvrdisplayactivate
slug: Web/API/Window/onvrdisplayactivate
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
  - onvrdisplayactivate
browser-compat: api.Window.onvrdisplayactivate
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

The **`onvrdisplayactivate`** property of the
{{domxref("Window")}} interface represents an event handler that will run when a display
is able to be presented to (when the {{event("vrdisplayactivate")}} event fires), for
example if an HMD has been moved to bring it out of standby, or woken up by being put
on.

> **Note:** This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The event object is of type {{domxref("VRDisplayEvent")}}.

## Syntax

```js
window.onvrdisplayactivate = function() { /* ... */ };
```

## Examples

```js
window.onvrdisplayactivate = function() {
  info.textContent = 'Display activated.';
  reportDisplays();
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
