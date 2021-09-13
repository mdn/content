---
title: GamepadButton.pressed
slug: Web/API/GamepadButton/pressed
tags:
  - API
  - Gamepad API
  - Games
  - Property
  - Reference
browser-compat: api.GamepadButton.pressed
---
{{APIRef("Gamepad API")}}

The **`GamepadButton.pressed`** property of the
{{domxref("GamepadButton")}} interface returns a `boolean` indicating whether
the button is currently pressed (`true`) or unpressed (`false`).

## Example

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if(gp.buttons[0].pressed == true) {
  // respond to button being pressed
}
```

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
