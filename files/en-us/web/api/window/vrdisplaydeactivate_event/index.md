---
title: "Window: vrdisplaydeactivate event"
short-title: vrdisplaydeactivate
slug: Web/API/Window/vrdisplaydeactivate_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Window.vrdisplaydeactivate_event
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`vrdisplaydeactivate`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a VR display can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.

> [!NOTE]
> This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("vrdisplaydeactivate", (event) => {});

onvrdisplaydeactivate = (event) => {};
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

You can use the `vrdisplaydeactivate` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener("vrdisplaydeactivate", () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
});
```

Or use the `onvrdisplaydeactivate` event handler property:

```js
window.onvrdisplaydeactivate = () => {
  info.textContent = "Display deactivated.";
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
