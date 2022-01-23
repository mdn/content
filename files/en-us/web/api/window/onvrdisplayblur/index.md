---
title: Window.onvrdisplayblur
slug: Web/API/Window/onvrdisplayblur
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
  - onvrdisplayblur
browser-compat: api.Window.onvrdisplayblur
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

The **`onvrdisplayblur`** property of the {{domxref("Window")}}
interface represents an event handler that will run when presentation to a display has
been paused for some reason by the browser, OS, or VR hardware (when the
{{event("vrdisplayblur")}} event fires) — for example, while the user is interacting
with a system menu or browser, to prevent tracking or loss of experience.

> **Note:** This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

While a {{domxref("VRDisplay")}} is blurred it does not lose it’s presenting status
({{domxref("VRDisplay.isPresenting")}} continues to report `true`) but
{{domxref("VRDisplay.getFrameData()")}} returns `false` without updating the
provided {{domxref("VRFrameData")}} and {{domxref("VRDisplay.getPose()")}} returns a
{{domxref("VRPose")}} with `null` members.

The event object is of type {{domxref("VRDisplayEvent")}}.

## Syntax

```js
window.onvrdisplayblur = function() { /* ... */ };
```

## Examples

```js
window.onvrdisplayblur = function() {
  info.textContent = 'Display unfocused.';
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
