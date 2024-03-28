---
title: "PointerEvent: tiltY property"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
page-type: web-api-instance-property
browser-compat: api.PointerEvent.tiltY
---

{{ APIRef("Pointer Events") }}

The **`tiltY`** read-only property of the
{{domxref("PointerEvent")}} interface is the angle (in degrees) between the _X-Z
plane_ of the pointer and the screen. This property is typically only useful for a
pen/stylus pointer type.

For an illustration of this property, see [Figure 3 in the specification](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Value

The angle in degrees between the X-Z plane of the pointer (stylus) and the screen. The range of values is `-90` to `90`, inclusive, where a positive value is a tilt towards the user. For devices that do not support this property, the value is `0`.

## Examples

This example illustrates simple accessing of the
{{domxref("PointerEvent.tiltX","tiltX")}} and `tiltY` properties.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    process_tilt(event.tiltX, event.tiltY);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
