---
title: Window.onvrdisplaydeactivate
slug: Web/API/Window/onvrdisplaydeactivate
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
  - onvrdisplaydeactivate
browser-compat: api.Window.onvrdisplaydeactivate
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

The **`onvrdisplaydeactivate`** property of the
{{domxref("Window")}} interface represents an event handler that will run when a display
can no longer be presented to (when the {{event("vrdisplaydeactivate")}} event fires),
for example if an HMD has gone into standby or sleep mode due to a period of inactivity.

> **Note:** This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The event object is of type {{domxref("VRDisplayEvent")}}.

## Syntax

```js
window.onvrdisplaydeactivate = function() { ... };
```

## Examples

```js
window.onvrdisplaydeactivate = function() {
  info.textContent = 'Display deactivated.';
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
