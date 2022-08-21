---
title: GamepadButton.touched
slug: Web/API/GamepadButton/touched
page-type: web-api-instance-property
tags:
  - API
  - Gamepad API
  - Games
  - Property
  - Reference
browser-compat: api.GamepadButton.touched
---
{{APIRef("Gamepad API")}}

The **`touched`** property of the
{{domxref("GamepadButton")}} interface returns a `boolean` indicating whether
a button capable of detecting touch is currently touched (`true`) or not touched (`false`).

If the button is not capable of detecting touch but can return an analog value, the property will be `true` if the value is greater than `0`, and `false` otherwise. If the button is not capable of detecting touch and can only report a digital value, then it should mirror the {{domxref("GamepadButton.pressed")}} property.

## Value

A {{jsxref("Boolean")}}. True if touched.

## Examples

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].touched) {
  // respond to button being touched
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
