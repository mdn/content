---
title: DeviceMotionEvent.interval
slug: Web/API/DeviceMotionEvent/interval
tags:
  - API
  - Device Orientation
  - Experimental
  - Mobile
  - Motion
  - NeedsExample
  - Orientation
  - Property
  - Reference
browser-compat: api.DeviceMotionEvent.interval
---
{{APIRef("Device Orientation Events")}}

Returns the interval, in milliseconds, at which data is obtained from the underlying
hardware. You can use this to determine the granularity of motion events.

## Syntax

```js
var interval = deviceMotionEvent.interval;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("DeviceMotionEvent")}}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} event
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} event
- {{DOMxRef("DeviceOrientationEvent")}}
- [Detecting device
  orientation](/en-US/docs/Web/API/Detecting_device_orientation)
- [Orientation and motion data
  explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
