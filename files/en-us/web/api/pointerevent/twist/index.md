---
title: PointerEvent.twist
slug: Web/API/PointerEvent/twist
tags:
  - API
  - DOM
  - Pointer Events
  - PointerEvent
  - Property
  - Reference
  - twist
browser-compat: api.PointerEvent.twist
---
{{ APIRef("Pointer Events") }}

The **`twist`** read-only property of the
{{domxref("PointerEvent")}} interface represents the clockwise rotation of the pointer
(e.g., pen stylus) around its major axis, in degrees.

## Syntax

```js
var twist = pointerEvent.twist;
```

### Return value

A `long` value representing the amount of twist, in degrees, applied to the
transducer (pointer). The value is in the range `0` to `359`,
inclusive. For devices that do not report `twist`, the value is
`0`.

## Example

When a {{event("pointerdown")}} event is fired, different functions are called
depending on the value of the event's `twist` property.

```js
someElement.addEventListener('pointerdown', function(event) {
  if (event.twist == 0) {
    // No twist
    process_no_twist(event);
  } else {
    // Default
    process_twist(event);
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Touch.force") }}
