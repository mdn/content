---
title: PointerEvent.pressure
slug: Web/API/PointerEvent/pressure
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
browser-compat: api.PointerEvent.pressure
---
{{ APIRef("Pointer Events") }}

The **`pressure`** read-only property of the
{{domxref("PointerEvent")}} interface indicates the normalized pressure of the pointer
input.

## Value

The normalized pressure of the pointer input in the range of `0` to `1`, inclusive, where `0` and `1` represent the minimum and maximum pressure the hardware is capable of detecting, respectively. For hardware that does not support pressure, such as a mouse, the value is `0.5` when the pointer is active buttons state and `0`  otherwise.

## Examples

In this snippet, when a {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event is fired, different functions
are called depending on the value of the event's `pressure` property.

```js
someElement.addEventListener('pointerdown', (event) => {
  if (event.pressure === 0) {
    // No pressure
    process_no_pressure(event);
  } else if (event.pressure === 1) {
    // Maximum pressure
    process_max_pressure(event);
  } else {
    // Default
    process_pressure(event);
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Touch.force") }}
