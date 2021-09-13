---
title: DeviceOrientationEvent.absolute
slug: Web/API/DeviceOrientationEvent/absolute
tags:
  - API
  - Device Orientation API
  - DeviceOrientationEvent
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.DeviceOrientationEvent.absolute
---
{{ apiref("Device Orientation Events") }}

Indicates whether or not the device is providing orientation data absolutely (that is,
in reference to the Earth's coordinate frame) or using some arbitrary frame determined
by the device. See [Orientation and motion data
explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained "Orientation and motion data explained") for details.

## Syntax

```js
var absolute = instanceOfDeviceOrientationEvent.absolute;
```

On return, _`absolute`_ is `true` if the orientation data
in `instanceOfDeviceOrientationEvent` is provided as the difference between
the Earth's coordinate frame and the device's coordinate frame, or `false` if
the orientation data is being provided in reference to some arbitrary, device-determined
coordinate frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/en-US/docs/Web/API/Detecting_device_orientation "Detecting device orientation")
- [Orientation and motion data
  explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained "Orientation and motion data explained")
- {{ domxref("window.ondeviceorientation") }}
- {{ event("deviceorientation") }}
