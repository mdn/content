---
title: MouseEvent.movementX
slug: Web/API/MouseEvent/movementX
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - MovementX
  - Property
  - Read-only
  - Reference
  - mouse lock
  - pointer lock
browser-compat: api.MouseEvent.movementX
---
{{APIRef("DOM Events")}}

The **`movementX`** read-only property of the {{domxref("MouseEvent")}} interface provides the difference in the X coordinate of the mouse pointer between the given event and the previous {{event("mousemove")}} event.
In other words, the value of the property is computed like this: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

## Value

A number.

## Example

This example logs the amount of mouse movement using `movementX` and {{domxref("MouseEvent.movementY", "movementY")}}.

### HTML

```html
<p id="log">Move your mouse around.</p>
```

### JavaScript

```js
function logMovement(event) {
  log.insertAdjacentHTML('afterbegin', `movement: ${event.movementX}, ${event.movementY}<br>`);
  while (log.childNodes.length > 128) log.lastChild.remove()
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

- {{domxref("MouseEvent.movementY")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
