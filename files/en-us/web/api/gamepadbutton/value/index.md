---
title: "GamepadButton: value property"
short-title: value
slug: Web/API/GamepadButton/value
page-type: web-api-instance-property
browser-compat: api.GamepadButton.value
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

The **`GamepadButton.value`** property of the
{{domxref("GamepadButton")}} interface returns a double value used to represent the
current state of analog buttons on many modern gamepads, such as the triggers.

The values are normalized to the range `0.0` — `1.0`, with
`0.0` representing a button that is not pressed, and 1.0 representing a
button that is fully pressed.

## Examples

```js
let gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // respond to analog button being pressed in
}
```

## Value

A double.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
