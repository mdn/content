---
title: MouseEvent.movementY
slug: Web/API/MouseEvent/movementY
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - MovementY
  - Property
  - Read-only
  - Reference
  - mouse lock
  - pointer lock
browser-compat: api.MouseEvent.movementY
---
{{APIRef("DOM Events")}}

The **`movementY`** read-only property of the {{domxref("MouseEvent")}} interface provides the difference in the Y coordinate of the mouse pointer between the given event and the previous {{domxref("Element/mousemove_event", "mousemove")}} event.
In other words, the value of the property is computed like this: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> **Warning:** Different from the description in the specification, browsers may use different units for `movementY` and {{domxref("MouseEvent.screenY", "screenY")}}. The unit of `movementY` may be physical pixel of the screen, logical pixel from the operating system, or CSS pixel from the browser.
>
> See also [Issue #42 - w3c/pointerlock](https://github.com/w3c/pointerlock/issues/42)

## Value

A number.

## Examples

This example logs the amount of mouse movement using {{domxref("MouseEvent.movementX", "movementX")}} and `movementY`.

### HTML

```html
<p id="log">Move your mouse around.</p>
```

### JavaScript

```js
function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

const log = document.getElementById('log');
document.addEventListener('mousemove', logMovement);
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
