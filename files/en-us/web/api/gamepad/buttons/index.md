---
title: "Gamepad: buttons property"
short-title: buttons
slug: Web/API/Gamepad/buttons
page-type: web-api-instance-property
browser-compat: api.Gamepad.buttons
---

{{APIRef("Gamepad API")}}

The **`Gamepad.buttons`** property of the {{domxref("Gamepad")
  }} interface returns an array of {{domxref("gamepadButton")}} objects representing the
buttons present on the device.

Each entry in the array is 0 if the button is not pressed, and non-zero (typically 1.0)
if the button is pressed. Each {{domxref("gamepadButton")}} object has two properties:
`pressed` and `value`:

- The `pressed` property is a boolean indicating whether the button is
  currently pressed (`true`) or unpressed (`false`).
- The `value` property is a floating point value used to enable
  representing analog buttons, such as the triggers on many modern gamepads. The values
  are normalized to the range 0.0 – 1.0, with 0.0 representing a button that is not
  pressed, and 1.0 representing a button that is fully pressed.

## Value

An array of {{domxref("gamepadButton")}} objects.

## Examples

The following code is taken from my Gamepad API button demo (you can [view the demo live](https://chrisdavidmills.github.io/gamepad-buttons/), and
[find the source code](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) on GitHub.) Note the code fork — in Chrome
{{domxref("Navigator.getGamepads")}} needs a `webkit` prefix and the button
values are stores as an array of double values, whereas in Firefox
{{domxref("Navigator.getGamepads")}} doesn't need a prefix, and the button values are
stored as an array of {{domxref("GamepadButton")}} objects; it is the
{{domxref("GamepadButton.value")}} or {{domxref("GamepadButton.pressed")}} properties of
these we need to access, depending on what type of buttons they are. In this simple
example I've just allowed either.

```js
function gameLoop() {
  let a = 0;
  let b = 0;
  if (navigator.webkitGetGamepads) {
    const gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] === 1) {
      b--;
    } else if (gp.buttons[1] === 1) {
      a++;
    } else if (gp.buttons[2] === 1) {
      b++;
    } else if (gp.buttons[3] === 1) {
      a--;
    }
  } else {
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
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  const start = rAF(gameLoop);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
