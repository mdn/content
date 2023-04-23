---
title: "DeviceOrientationEvent: DeviceOrientationEvent() constructor"
short-title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
page-type: web-api-constructor
browser-compat: api.DeviceOrientationEvent.DeviceOrientationEvent
---

{{APIRef("Device Orientation Events")}}

The **`DeviceOrientationEvent()`** constructor creates a new {{domxref("DeviceOrientationEvent")}} object.

## Syntax

```js-nolint
new DeviceOrientationEvent(type)
new DeviceOrientationEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `deviceorientation` or `deviceorientationabsolute`.
    In the latter case, `options.absolute` is always `true`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `alpha` {{optional_inline}}
      - : A number representing the motion of the device around the z axis,
        expressed in degrees with values ranging from 0 to 360.
        It defaults to `null`.
    - `beta` {{optional_inline}}
      - : A number representing the motion of the device around the x axis,
        expressed in degrees with values ranging from -180 to 180.
        This represents a front to back motion of the device.
        It defaults to `null`.
    - `gamma` {{optional_inline}}
      - : A number representing the motion of the device around the y axis,
        expressed in degrees with values ranging from -90 to 90.
        This represents a left to right motion of the device.
        It defaults to `null`.
    - `absolute`
      - : A boolean value that indicates whether or not the device is providing orientation data absolutely.
        It defaults to `false`.

## Return value

A new {{domxref("DeviceOrientationEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
