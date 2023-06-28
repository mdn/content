---
title: "GamepadButton: pressed property"
short-title: pressed
slug: Web/API/GamepadButton/pressed
page-type: web-api-instance-property
browser-compat: api.GamepadButton.pressed
---

{{APIRef("Gamepad API")}}

The **`GamepadButton.pressed`** property of the
{{domxref("GamepadButton")}} interface returns a `boolean` indicating whether
the button is currently pressed (`true`) or unpressed (`false`).

## Examples

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].pressed) {
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
