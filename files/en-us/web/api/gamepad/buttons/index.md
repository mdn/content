---
title: "Gamepad: buttons property"
short-title: buttons
slug: Web/API/Gamepad/buttons
page-type: web-api-instance-property
browser-compat: api.Gamepad.buttons
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

The **`buttons`** property of the {{domxref("Gamepad")}} interface returns an array of {{domxref("gamepadButton")}} objects representing the buttons present on the device.

Each entry in the array is `0` if the button is not pressed, and non-zero (typically `1.0`) if the button is pressed.

Each {{domxref("gamepadButton")}} object has two properties:

- `pressed`

  - : A boolean indicating whether the button is currently pressed (`true`) or unpressed (`false`).

- `value`

  - : A floating point value used to enable representing analog buttons, such as the triggers on many modern gamepads. The values are normalized to the range 0.0 – 1.0, with 0.0 representing a button that is not pressed, and 1.0 representing a button that is fully pressed.

## Value

An array of {{domxref("gamepadButton")}} objects.

## Examples

Depending on the type of button, we need to access the {{domxref("GamepadButton.value")}} or {{domxref("GamepadButton.pressed")}} properties. This
example supports both:

```js
function gameLoop() {
  const gp = navigator.getGamepads()[0];

  if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
    b--;
  } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
    a++;
  } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
    b++;
  } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
    a--;
  }

  ball.style.left = `${a * 2}px`; // ball is a UI widget
  ball.style.top = `${b * 2}px`;

  requestAnimationFrame(gameLoop);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
