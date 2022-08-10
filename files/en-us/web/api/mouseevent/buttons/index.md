---
title: MouseEvent.buttons
slug: Web/API/MouseEvent/buttons
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM Events
  - Property
  - Read-only
  - Reference
  - UIEvent
browser-compat: api.MouseEvent.buttons
---
{{APIRef("UI Events")}}

The **`MouseEvent.buttons`** read-only property indicates which buttons are pressed on the mouse (or other input device) when a mouse event is triggered.

Each button that can be pressed is represented by a given number (see below).
If more than one button is pressed, the button values are added together to produce a new number.
For example, if the secondary (`2`) and auxiliary (`4`) buttons are pressed simultaneously, the value is `6` (i.e., `2 + 4`).

> **Note:** Do not confuse this property with the {{domxref("MouseEvent.button")}} property.
> The {{domxref("MouseEvent.buttons")}} property indicates the state of buttons pressed during any kind of mouse event,
> while the {{domxref("MouseEvent.button")}} property only guarantees the correct value for mouse events caused by pressing or releasing one or multiple buttons.

## Value

A number representing one or more buttons.
For more than one button pressed simultaneously, the values are combined (e.g., `3` is primary + secondary).

- `0`: No button or un-initialized
- `1`: Primary button (usually the left button)
- `2`: Secondary button (usually the right button)
- `4`: Auxiliary button (usually the mouse wheel button or middle
  button)
- `8`: 4th button (typically the "Browser Back" button)
- `16` : 5th button (typically the "Browser Forward" button)

## Examples

This example logs the `buttons` property when you trigger a {{domxref("Element/mousedown_event", "mousedown")}} event.

### HTML

```html
<p>Click anywhere with one or more mouse buttons.</p>
<pre id="log">buttons: </pre>
```

### JavaScript

```js
let log = document.createTextNode('?');   // let log = new Text('?');

function logButtons(e) {
  log.data = `${e.buttons} (${e.type})`;  // log.nodeValue= `${e.buttons} (${e.type})`;
}

document.addEventListener('mouseup', logButtons);
document.addEventListener('mousedown', logButtons);
// document.addEventListener('mousemove', logButtons);

document.querySelector('#log').appendChild(log)
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Firefox notes

Firefox supports the `buttons` attribute on Windows, Linux (GTK), and macOS
with the following restrictions:

- Utilities allow customization of button actions.
  Therefore, _primary_ might not be the left button on the device, _secondary_ might not be the right button, and so on.
  Moreover, the middle (wheel) button, 4th button, and 5th button might not be assigned a value, even when they are pressed.
- Single-button devices may emulate additional buttons with combinations of button and keyboard presses.
- Touch devices may emulate buttons with configurable gestures (e.g., one-finger touch for _primary_, two-finger touch for _secondary_, etc.).
- On Linux (GTK), the 4th button and the 5th button are not supported.
  In addition, a {{domxref("Element/mouseup_event", "mouseup")}} event always includes the releasing button information in the `buttons` value.
- On Mac OS X 10.5, the `buttons` attribute always returns `0` because there is no platform API for implementing this feature.

## See also

- {{domxref("MouseEvent")}}
