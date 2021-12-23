---
title: MouseEvent.button
slug: Web/API/MouseEvent/button
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.button
---
{{APIRef("DOM Events")}}

The **`MouseEvent.button`** read-only property indicates which button was pressed on the mouse to trigger the event.

This property only guarantees to indicate which buttons are pressed during events caused by pressing or releasing one or multiple buttons.
As such, it is not reliable for events such as {{event("mouseenter")}}, {{event("mouseleave")}}, {{event("mouseover")}}, {{event("mouseout")}} or {{event("mousemove")}}.

Users may change the configuration of buttons on their pointing device so that if an event's button property is zero, it may not have been caused by the button that is physically left–most on the pointing device; however, it should behave as if the left button was clicked in the standard button layout.

> **Note:** Do not confuse this property with the {{domxref("MouseEvent.buttons")}} property, which indicates which buttons are pressed for all mouse events types.

## Value

A number representing a given button:

- `0`: Main button pressed, usually the left button or the un-initialized
  state
- `1`: Auxiliary button pressed, usually the wheel button or the middle
  button (if present)
- `2`: Secondary button pressed, usually the right button
- `3`: Fourth button, typically the _Browser Back_ button
- `4`: Fifth button, typically the _Browser Forward_ button

As noted above, buttons may be configured differently to the standard "left to right" layout.
A mouse configured for left-handed use may have the button actions reversed.
Some pointing devices only have one button and use keyboard or other input mechanisms to indicate main, secondary, auxilary, etc.
Others may have many buttons mapped to different functions and button values.

## Example

### HTML

```html
<button id="button" oncontextmenu="event.preventDefault();">Click here with your mouse...</button>
<p id="log"></p>
```

### JavaScript

```js
let button = document.querySelector('#button');
let log = document.querySelector('#log');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        log.textContent = 'Left button clicked.';
        break;
      case 1:
        log.textContent = 'Middle button clicked.';
        break;
      case 2:
        log.textContent = 'Right button clicked.';
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
    }
  }
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}
