---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
tags:
  - API
  - CSSOM View
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.screenX
---
{{APIRef("DOM Events")}}

The **`screenX`** read-only property of the {{domxref("MouseEvent")}} interface provides the horizontal coordinate (offset) of the mouse pointer in global (screen) coordinates.

**Note:** In a multiscreen environment, screens aligned horizontally will be treated as a single device, and so the range of the `screenX` value will increase to the combined width of the screens.

## Syntax

```js
var x = instanceOfMouseEvent.screenX
```

### Return value

A `double` floating point value.

Early versions of the spec defined this as an integer referring to the number of pixels.

## Example

This example displays your mouse's coordinates whenever you trigger the {{Event("mousemove")}} event.

#### HTML

```html
<p>Move your mouse to see its position.</p>
<p id="screen-log"></p>
```

#### JavaScript

```js
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

#### Result

{{EmbedLiveSample("Example")}}

### Routing an event

When you trap events on the window, document, or other roomy elements, you can get the coordinates of that event (e.g., a click) and route it properly, as the following example demonstrates:

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenY","screenY") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
