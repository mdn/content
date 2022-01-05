---
title: DeviceOrientationEvent.gamma
slug: Web/API/DeviceOrientationEvent/gamma
tags:
  - API
  - Device Orientation API
  - DeviceOrientationEvent
  - NeedsBetterSpecLink
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.DeviceOrientationEvent.gamma
---
{{ apiref("Device Orientation Events") }}

Returns the rotation of the device around the Y axis; that is, the number of degrees,
ranged between `-90` and `90`, by which the device is tilted left
or right. See [Orientation and motion data
explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained "Orientation and motion data explained") for details.

## Syntax

```js
var gamma = orientationEvent.gamma;
```

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
