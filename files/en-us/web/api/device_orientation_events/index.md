---
title: Device orientation events
slug: Web/API/Device_orientation_events
page-type: web-api-overview
browser-compat:
  - api.Window.deviceorientation_event
  - api.Window.devicemotion_event
  - api.Window.deviceorientationabsolute_event
  - api.DeviceOrientationEvent
  - api.DeviceMotionEvent
  - api.DeviceMotionEventAcceleration
  - api.DeviceMotionEventRotationRate
spec-urls: https://w3c.github.io/deviceorientation/
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Device orientation events are events that allow you to [detect a device's physical orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events), as well as allowing you to [detect the device's motion](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events).

## Concepts and usage

Mobile devices commonly have sensors such as gyroscopes, compasses, and accelerometers that can enable applications running on the device to detect the device's orientation and motion.

The device orientation events enable you to write web applications that can change their behavior based on the orientation of the user's device, and that can react when the user moves their device.

Some typical features for which you might want to use the device orientation events include:

- in web-based games, to enable the user to control the motion of characters or objects in the game by tilting and moving the device

- in mapping applications, to re-orient a map based on the device's position, or to provide turn-by-turn directions that update with the user's movements

- for gesture recognition — for example, recognizing a "shake" gesture and using it to perform some action such as clearing an input area when the user shakes the device

> [!NOTE]
> This API is widely supported on mobile browsers. While some desktop-only browsers may have limitations due to hardware differences, these constraints are rarely significant given the API's primary usage on sensor-equipped devices.

## Interfaces

- {{domxref("DeviceMotionEvent")}}
  - : Represents changes in the acceleration of a device, as well as the rotation rate.
- {{domxref("DeviceMotionEventAcceleration")}}
  - : Represents the amount of acceleration the device is experiencing along all three axes
- {{domxref("DeviceMotionEventRotationRate")}}
  - : Represents the rate at which the device is rotating around all three axes.
- {{domxref("DeviceOrientationEvent")}}
  - : Represents changes in the physical orientation of a device.

### Extensions to other interfaces

- {{domxref("Window.devicemotion_event", "devicemotion")}} event
  - : Fired at a regular interval to indicate the amount of physical force of acceleration the device is receiving at that time, and the rate of rotation of the device.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} event
  - : Fired when fresh data is available from the device about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} event
  - : Fired when absolute device orientation changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) at web.dev
