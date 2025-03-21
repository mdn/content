---
title: "MouseEvent: screenY property"
short-title: screenY
slug: Web/API/MouseEvent/screenY
page-type: web-api-instance-property
browser-compat: api.MouseEvent.screenY
---

{{APIRef("UI Events")}}

The **`screenY`** read-only property of the {{domxref("MouseEvent")}} interface provides the vertical coordinate (offset) of the mouse pointer in [screen coordinates](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).

## Value

A `double` floating point value in pixels.

Early versions of the spec defined this as an integer referring to the number of pixels.

## Examples

This example displays your mouse's coordinates whenever you trigger the {{domxref("Element/mousemove_event", "mousemove")}} event.

### HTML

```html
<p>Move your mouse to see its position.</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenX","screenX") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
