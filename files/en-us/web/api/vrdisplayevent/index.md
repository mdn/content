---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
tags:
  - API
  - Experimental
  - Deprecated
  - Interface
  - Reference
  - VR
  - VRDisplayEvent
  - Virtual Reality
  - WebVR
browser-compat: api.VRDisplayEvent
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRDisplayEvent`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents the event object of WebVR-related events (see the [list of WebVR window extensions](/en-US/docs/Web/API/WebVR_API#window)).

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Constructor

- {{domxref("VRDisplayEvent.VRDisplayEvent()")}}
  - : Creates a `VRDisplayEvent` object instance.

## Properties

_`VRDisplayEvent` also inherits properties from its parent object, {{domxref("Event")}}._

- {{domxref("VRDisplayEvent.display")}} {{readonlyInline}}
  - : The {{domxref("VRDisplay")}} associated with this event.
- {{domxref("VRDisplayEvent.reason")}} {{readonlyInline}}
  - : A human-readable reason why the event was fired.

## Examples

```js
window.addEventListener('vrdisplaypresentchange', function(e) {
  console.log('Display ' + e.display.displayId + ' presentation has changed. Reason given: ' + e.reason + '.');
})
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
