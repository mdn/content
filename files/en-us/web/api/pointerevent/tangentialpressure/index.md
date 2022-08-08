---
title: PointerEvent.tangentialPressure
slug: Web/API/PointerEvent/tangentialPressure
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Pointer Events
  - PointerEvent
  - Property
  - Reference
  - tangentialPressure
browser-compat: api.PointerEvent.tangentialPressure
---
{{ APIRef("Pointer Events") }}

The **`tangentialPressure`** read-only property of the
{{domxref("PointerEvent")}} interface represents the normalized tangential pressure of
the pointer input (also known as barrel pressure or [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)).

## Value

A `float` representing the normalized tangential pressure of the pointer
input in the range `-1` to `1`, inclusive, where `0` is
the neutral position of the control.

Note that some hardware may only support positive values in the range `0` to
`1`. For hardware that does not support tangential pressure, the value will
be `0`.

## Examples

In this snippet, when a {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event is fired, different functions
are called depending on the value of the event's `tangentialPressure`
property.

```js
someElement.addEventListener('pointerdown', (event) => {
  if (event.tangentialPressure === 0) {
    // No pressure
    process_no_tanPressure(event);
  } else if (event.tangentialPressure === 1) {
    // Maximum pressure
    process_max_tanPressure(event);
  } else {
    // Default
    process_tanPressure(event);
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Touch.force") }}
