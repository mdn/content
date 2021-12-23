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

The **`movementY`** read-only property of the {{domxref("MouseEvent")}} interface provides the difference in the Y coordinate of the mouse pointer between the given event and the previous {{event("mousemove")}} event.
In other words, the value of the property is computed like this: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

## Value

A number.

## Example

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
