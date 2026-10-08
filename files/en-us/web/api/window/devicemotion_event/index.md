---
title: "Window: devicemotion event"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
page-type: web-api-event
browser-compat: api.Window.devicemotion_event
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`devicemotion`** event is fired at a regular interval and indicates the acceleration rate of the device with/without the contribution of the gravity force at that time. It also provides information about the rate of rotation, if available.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("devicemotion", (event) => { })

ondevicemotion = (event) => { }
```

## Event type

A {{domxref("DeviceMotionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DeviceMotionEvent")}}

## Examples

```js
function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
