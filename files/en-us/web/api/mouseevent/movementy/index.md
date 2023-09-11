---
title: "MouseEvent: movementY property"
short-title: movementY
slug: Web/API/MouseEvent/movementY
page-type: web-api-instance-property
browser-compat: api.MouseEvent.movementY
---

{{APIRef("UI Events")}}

The **`movementY`** read-only property of the {{domxref("MouseEvent")}} interface provides the difference in the Y coordinate of the mouse pointer between the given event and the previous {{domxref("Element/mousemove_event", "mousemove")}} event.
In other words, the value of the property is computed like this: `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`.

> **Warning:** Browsers [use different units for `movementY` and {{domxref("MouseEvent.screenY", "screenY")}}](https://github.com/w3c/pointerlock/issues/42) than what the specification defines. Depending on the browser and operating system, the `movementY` units may be a physical pixel, a logical pixel, or a CSS pixel.

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

const log = document.getElementById("log");
document.addEventListener("mousemove", logMovement);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
