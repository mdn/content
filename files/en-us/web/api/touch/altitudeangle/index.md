---
title: "Touch: altitudeAngle property"
short-title: altitudeAngle
slug: Web/API/Touch/altitudeAngle
page-type: web-api-instance-property
browser-compat: api.Touch.altitudeAngle
---

{{ APIRef("Touch Events") }}

The **`altitudeAngle`** read-only property of the {{domxref("Touch")}} interface returns the angle between a transducer (a pointer or stylus) axis and the X-Y plane of a device screen. The altitude angle describes whether the transducer is perpendicular to the screen, parallel, or at some angle in between.

> [!NOTE]
> The default value of `altitudeAngle` is `0` (parallel to the device surface), which differs from the {{domxref("PointerEvent.altitudeAngle")}} property, which defaults to `π/2` (perpendicular to the surface).

For hardware and platforms that do not report tilt or angle, the value is `0`.

## Value

An angle in radians between `0` and `π/2` where `0` is parallel to the device surface (X-Y plane), and `π/2` is perpendicular to the surface.

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

- {{domxref("Touch.azimuthAngle")}}
- {{domxref("Touch.touchType")}}
- {{domxref("PointerEvent.altitudeAngle")}}
- [Touch events](/en-US/docs/Web/API/Touch_events)
