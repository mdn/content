---
title: "MouseEvent: movementX property"
short-title: movementX
slug: Web/API/MouseEvent/movementX
page-type: web-api-instance-property
browser-compat: api.MouseEvent.movementX
---

{{APIRef("Pointer Lock API")}}

The **`movementX`** read-only property of the {{domxref("MouseEvent")}} interface provides the difference in the X coordinate of the mouse (or pointer) between the given move event and the previous move event of the same type.

In other words, the value of the property is computed like this: `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.
The value is zero for all events other than {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/pointermove_event", "pointermove")}}, and {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}.

> [!WARNING]
> Browsers [use different units for `movementX` and `screenX`](https://github.com/w3c/pointerlock/issues/42) than what the specification defines.
> Depending on the browser and operating system, the `movementX` units may be a physical pixel, a logical pixel, or a CSS pixel. You may want to avoid the movement properties, and instead calculate the delta between the current client values ({{domxref("MouseEvent.screenX", "screenX")}}, {{domxref("MouseEvent.screenY", "screenY")}}) and the previous client values.

## Value

A number.
Always zero on any {{domxref("MouseEvent")}} other than `mousemove`, and any {{domxref("PointerEvent")}} other than `pointermove` or `pointerrawupdate`.

## Examples

### Log mouse movement for `mousemove` events

This example logs the amount of mouse movement using `movementX` and {{domxref("MouseEvent.movementY", "movementY")}}.

#### HTML

```html
<p id="log">Move your mouse around.</p>
```

#### JavaScript

```js
const log = document.getElementById("log");

function logMovement(event) {
  log.insertAdjacentHTML(
    "afterbegin",
    `movement: ${event.movementX}, ${event.movementY}<br>`,
  );
  while (log.childNodes.length > 128) log.lastChild.remove();
}

document.addEventListener("mousemove", logMovement);
```

#### Result

{{EmbedLiveSample("### Log mouse movement for `mousemove` events")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.movementY")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
