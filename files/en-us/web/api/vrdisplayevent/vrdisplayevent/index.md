---
title: "VRDisplayEvent: VRDisplayEvent() constructor"
short-title: VRDisplayEvent()
slug: Web/API/VRDisplayEvent/VRDisplayEvent
page-type: web-api-constructor
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplayEvent.VRDisplayEvent
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`VRDisplayEvent()`** constructor creates a {{domxref("VRDisplayEvent")}} object.

> [!NOTE]
> This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js-nolint
new VRDisplayEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `vrdisplayconnect`, `vrdisplaydisconnect`, `vrdisplayactivate`, `vrdisplaydeactivate`, `vrdisplayblur`,
    `vrdisplaypointerrestricted`, `vrdisplaypointerunrestricted`, or `vrdisplaypresentchange`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `display`
      - : The {{domxref("VRDisplay")}} the event is to be associated with.
    - `reason`
      - : A string representing the human-readable reason why the event is to be fired (see {{domxref("VRDisplayEvent.reason")}}).

### Return value

A new {{domxref("VRDisplayEvent")}} object.

## Examples

```js
const myEventObject = new VRDisplayEvent("custom", {
  display: vrDisplay,
  reason: "Custom reason",
});
```

## Specifications

This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
