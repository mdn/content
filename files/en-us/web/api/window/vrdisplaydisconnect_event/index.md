---
title: "Window: vrdisplaydisconnect event"
short-title: vrdisplaydisconnect
slug: Web/API/Window/vrdisplaydisconnect_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Window.vrdisplaydisconnect_event
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`vrdisplaydisconnect`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a compatible VR display is disconnected from the computer.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("vrdisplaydisconnect", (event) => {});

onvrdisplaydisconnect = (event) => {};
```

## Event type

A {{domxref("VRDisplayEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("VRDisplayEvent")}}

## Event properties

_`VRDisplayEvent` also inherits properties from its parent object, {{domxref("Event")}}._

- {{domxref("VRDisplayEvent.display")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : The {{domxref("VRDisplay")}} associated with this event.
- {{domxref("VRDisplayEvent.reason")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : A human-readable reason why the event was fired.

## Examples

You can use the `vrdisplaydisconnect` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

> **Note:** This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

```js
window.addEventListener("vrdisplaydisconnect", () => {
  info.textContent = "Display disconnected.";
  reportDisplays();
});
```

Or use the `onvrdisplaydisconnect` event handler property:

```js
window.onvrdisplaydisconnect = () => {
  info.textContent = "Display disconnected.";
  reportDisplays();
};
```

## Specifications

This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR Device API](https://immersive-web.github.io/webxr/), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
