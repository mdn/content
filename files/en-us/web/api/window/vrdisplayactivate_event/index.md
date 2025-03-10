---
title: "Window: vrdisplayactivate event"
short-title: vrdisplayactivate
slug: Web/API/Window/vrdisplayactivate_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Window.vrdisplayactivate_event
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`vrdisplayactivate`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a VR display is able to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.

> [!NOTE]
> This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("vrdisplayactivate", (event) => {});

onvrdisplayactivate = (event) => {};
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

You can use the `vrdisplayactivate` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener("vrdisplayactivate", () => {
  info.textContent = "Display activated.";
  reportDisplays();
});
```

Or use the `onvrdisplayactivate` event handler property:

```js
window.onvrdisplayactivate = () => {
  info.textContent = "Display activated.";
  reportDisplays();
};
```

## Specifications

This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR Device API](https://immersive-web.github.io/webxr/), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
