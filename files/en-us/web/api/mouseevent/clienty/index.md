---
title: "MouseEvent: clientY property"
short-title: clientY
slug: Web/API/MouseEvent/clientY
page-type: web-api-instance-property
browser-compat: api.MouseEvent.clientY
---

{{APIRef("UI Events")}}

The **`clientY`** read-only property of the {{domxref("MouseEvent")}} interface provides the vertical coordinate within the application's {{glossary("viewport")}} at which the event occurred (as opposed to the coordinate within the page).

For example, clicking on the top edge of the viewport will always result in a mouse event with a `clientY` value of `0`, regardless of whether the page is scrolled vertically.

## Value

A `double` floating point value in pixels.

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
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
