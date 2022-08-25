---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - DOM
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.clientX
---
{{APIRef("UI Events")}}

The **`clientX`** read-only property of the {{domxref("MouseEvent")}} interface provides the horizontal coordinate within the application's {{glossary("viewport")}} at which the event occurred (as opposed to the coordinate within the page).

For example, clicking on the left edge of the viewport will always result in a mouse event with a `clientX` value of `0`, regardless of whether the page is scrolled horizontally.

## Value

A `double` floating point value.

## Examples

This example displays your mouse's coordinates whenever you trigger the {{domxref("Element/mousemove_event", "mousemove")}} event.

### HTML

```html
<p>Move your mouse to see its position.</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

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
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} /
  {{domxref("MouseEvent.screenY","screenY")}}
