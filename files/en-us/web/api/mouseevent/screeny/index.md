---
title: MouseEvent.screenY
slug: Web/API/MouseEvent/screenY
tags:
  - API
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.screenY
---
{{APIRef("DOM Events")}}

The **`screenY`** read-only property of the {{domxref("MouseEvent")}} interface provides the vertical coordinate (offset) of the mouse pointer in global (screen) coordinates.

## Value

A `double` floating point value.

Early versions of the spec defined this as an integer referring to the number of pixels.

## Example

This example displays your mouse's coordinates whenever you trigger the {{Event("mousemove")}} event.

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

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenX","screenX") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
