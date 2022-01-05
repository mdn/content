---
title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
tags:
  - API
  - Constructor
  - Device Orientation API
  - DeviceOrientationEvent
  - Experimental
  - Reference
browser-compat: api.DeviceOrientationEvent.DeviceOrientationEvent
---
{{APIRef("Device Orientation Events")}}{{Non-standard_header}}

The **`DeviceOrientationEvent()`** constructor creates a new
{{domxref("DeviceOrientationEvent")}}.

## Syntax

```js
var deviceOrientationEvent = new DeviceOrientationEvent(type[, options])
```

### Parameters

- _type_
  - : Either `"deviceorientation"` or `"deviceorientationabsolute"`.
    If the latter, then `options.absolute` should be true.
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `alpha`: A number representing the motion of the device around the z
      axis, express in degrees with values ranging from 0 to 360.
    - `beta`: A number representing the motion of the device around the x
      axis, express in degrees with values ranging from -180 to 180. This represents a
      front to back motion of the device.
    - `gamma`: A number representing the motion of the device around the y
      axis, express in degrees with values ranging from -90 to 90. This represents a
      left to right motion of the device.
    - `absolute`: A boolean that indicates whether or not the device is
      providing orientation data absolutely.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
