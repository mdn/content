---
title: "Touch: touchType property"
short-title: touchType
slug: Web/API/Touch/touchType
page-type: web-api-instance-property
browser-compat: api.Touch.touchType
---

{{ APIRef("Touch Events") }}

The **`touchType`** read-only property of the {{domxref("Touch")}} interface returns the type of device that triggered the touch, indicating whether it was a direct touch from a finger or from a stylus.

## Value

A string from the `TouchType` enumeration. Possible values are:

- `"direct"`
  - : The touch was made by a direct contact, such as a finger on the screen.
- `"stylus"`
  - : The touch was made using a stylus or pen device.

## Example

```js
someElement.addEventListener(
  "touchstart",
  (event) => {
    for (const touch of event.changedTouches) {
      console.log(`Touch type: ${touch.touchType}`);

      if (touch.touchType === "stylus") {
        // Handle stylus-specific input, such as altitude and azimuth angles.
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
- {{domxref("Touch.azimuthAngle")}}
- [Touch events](/en-US/docs/Web/API/Touch_events)
