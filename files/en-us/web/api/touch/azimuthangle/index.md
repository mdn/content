---
title: "Touch: azimuthAngle property"
short-title: azimuthAngle
slug: Web/API/Touch/azimuthAngle
page-type: web-api-instance-property
browser-compat: api.Touch.azimuthAngle
---

{{ APIRef("Touch Events") }}

The **`azimuthAngle`** read-only property of the {{domxref("Touch")}} interface returns the angle between the Y-Z plane and the plane containing both the transducer (pointer or stylus) axis and the Y axis. This represents the compass direction that the transducer is pointing in relative to the device surface.

For hardware and platforms that do not report tilt or angle, the value is `0`. When the transducer is perpendicular to the surface ({{domxref("Touch.altitudeAngle", "altitudeAngle")}} of `π/2`), the value is `0`.

## Value

An angle in radians between `0` and `2π` where `0` represents a transducer whose cap is pointing in the direction of increasing X values (point to "3 o'clock" if looking straight down) on the X-Y plane, and the values progressively increase when going clockwise (`π/2` at "6 o'clock", `π` at "9 o'clock", `3π/2` at "12 o'clock").

## Example

```js
someElement.addEventListener(
  "touchstart",
  (event) => {
    for (const touch of event.changedTouches) {
      // Log the altitude and azimuth angles for each stylus touch point.
      if (touch.touchType === "stylus") {
        console.log(`altitudeAngle: ${touch.altitudeAngle}`);
        console.log(`azimuthAngle: ${touch.azimuthAngle}`);
      }
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Touch.altitudeAngle")}}
- {{domxref("Touch.touchType")}}
- {{domxref("PointerEvent.azimuthAngle")}}
- [Touch events](/en-US/docs/Web/API/Touch_events)
