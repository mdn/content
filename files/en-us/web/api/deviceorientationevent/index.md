---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
page-type: web-api-interface
browser-compat: api.DeviceOrientationEvent
---

{{apiref("Device Orientation Events")}}

The **`DeviceOrientationEvent`** object provides web developers with information from the physical orientation of the device running the web page.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DeviceOrientationEvent.DeviceOrientationEvent","DeviceOrientationEvent.DeviceOrientationEvent()")}}
  - : Creates a new `DeviceOrientationEvent`.

## Instance properties

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : A boolean that indicates whether or not the device is providing orientation data absolutely.
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the z axis, express in degrees with values ranging from 0 (inclusive) to 360 (exclusive).
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the x axis, express in degrees with values ranging from -180 (inclusive) to 180 (exclusive). This represents a front to back motion of the device.
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : A number representing the motion of the device around the y axis, express in degrees with values ranging from -90 (inclusive) to 90 (exclusive). This represents a left to right motion of the device.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : A number represents the difference between the motion of the device around the z axis of the world system and the direction of the north, express in degrees with values ranging from 0 to 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : The accuracy of the compass means that the deviation is positive or negative. It's usually 10.

## Example

```js
window.addEventListener("deviceorientation", (event) => {
  console.log(`${event.alpha} : ${event.beta} : ${event.gamma}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
- {{ domxref("DeviceMotionEvent") }}
- {{domxref("Window.devicemotion_event", "devicemotion")}}
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
