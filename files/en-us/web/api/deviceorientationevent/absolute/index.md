---
title: "DeviceOrientationEvent: absolute property"
short-title: absolute
slug: Web/API/DeviceOrientationEvent/absolute
page-type: web-api-instance-property
browser-compat: api.DeviceOrientationEvent.absolute
---

{{ apiref("Device Orientation Events") }}

Indicates whether or not the device is providing orientation data absolutely (that is,
in reference to the Earth's coordinate frame) or using some arbitrary frame determined
by the device.
See [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) for details.

## Value

- `true` if the orientation data in `instanceOfDeviceOrientationEvent` is provided as the difference between the Earth's coordinate frame and the device's coordinate frame
- `false` if the orientation data is being provided in reference to some arbitrary, device-determined coordinate frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} event
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
