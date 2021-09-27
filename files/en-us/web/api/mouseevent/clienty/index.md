---
title: MouseEvent.clientY
slug: Web/API/MouseEvent/clientY
tags:
  - API
  - CSSOM View
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.clientY
---
{{APIRef("DOM Events")}}

The **`clientY`** read-only property of the
{{domxref("MouseEvent")}} interface provides the vertical coordinate within the
application's {{glossary("viewport")}} at which the event occurred (as opposed to the
coordinate within the page).

For example, clicking on the top edge of the viewport will always result in a mouse
event with a `clientY` value of `0`, regardless of whether the
page is scrolled vertically.

## Syntax

```js
var y = instanceOfMouseEvent.clientY
```

### Return value

A `double` floating point value, as redefined by the CSSOM View Module.
Originally, this property was defined as a `long` integer. See the "Browser
compatibility" section for details.

## Example

This example displays your mouse's coordinates whenever you trigger the
{{Event("mousemove")}} event.

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
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} /
  {{domxref("MouseEvent.screenY","screenY")}}
