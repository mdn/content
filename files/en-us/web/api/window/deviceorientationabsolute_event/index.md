---
title: "Window: deviceorientationabsolute event"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
page-type: web-api-event
browser-compat: api.Window.deviceorientationabsolute_event
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`deviceorientationabsolute`** event is fired when absolute device orientation changes.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("deviceorientationabsolute", (event) => { })

ondeviceorientationabsolute = (event) => { }
```

## Event type

A {{domxref("DeviceOrientationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("window.devicemotion_event", "devicemotion")}} event
- {{DOMxRef("window.deviceorientation_event", "deviceorientation")}} event
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
