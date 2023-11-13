---
title: "VRDisplayEvent: reason property"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplayEvent.reason
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`reason`** read-only property of the {{domxref("VRDisplayEvent")}} interface returns a human-readable reason why the event was fired.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A string representing the reason why the event was fired. The available reasons are defined in the [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason) enum, and are as follows:

- `mounted` — The {{domxref("VRDisplay")}} has detected that the user has put it on (or it has been otherwise activated).
- `navigation` — The page has been navigated to from a context that allows this page to begin presenting immediately, such as from another site that was already in VR presentation mode.
- `requested` — The user agent has requested that VR presentation mode be started. This allows user agents to include a consistent UI to enter VR across different sites.
- `unmounted` — The {{domxref("VRDisplay")}} has detected that the user has taken it off (or it has been otherwise slept/put on standby).

## Examples

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
