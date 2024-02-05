---
title: "Window: deviceorientation event"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
page-type: web-api-event
browser-compat: api.Window.deviceorientation_event
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`deviceorientation`** event is fired when fresh data is available from an orientation sensor about the current orientation of the device as compared to the Earth coordinate frame. This data is gathered from a magnetometer inside the device.

See [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) for details.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("deviceorientation", (event) => {});

ondeviceorientation = (event) => {};
```

## Event type

A {{domxref("DeviceOrientationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Event properties

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : A boolean that indicates whether the device is providing orientation data absolutely.
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the z axis, express in degrees with values ranging from 0 (inclusive) to 360 (exclusive).
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the x axis, expressed in degrees with values ranging from -180 (inclusive) to 180 (exclusive). This represents the front to back motion of the device.
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the y axis, expressed in degrees with values ranging from -90 (inclusive) to 90 (exclusive). This represents the left to right motion of the device.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : A number represents the difference between the motion of the device around the z axis of the world system and the direction of the north, expressed in degrees with values ranging from 0 to 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : The accuracy of the compass given as a positive or negative deviation. It's usually 10.

## Examples

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // do something amazing
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`devicemotion`](/en-US/docs/Web/API/Window/devicemotion_event)
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
