---
title: GamepadButton
slug: Web/API/GamepadButton
tags:
  - API
  - Gamepad API
  - Games
  - Reference
browser-compat: api.GamepadButton
---
{{APIRef("Gamepad API")}}{{securecontext_header}}

The **`GamepadButton`** interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.

A `GamepadButton` object is returned by querying any value of the array returned by the `buttons` property of the {{domxref("Gamepad")}} interface.

## Properties

- {{domxref("GamepadButton.value")}} {{readonlyInline}}
  - : A double value used to represent the current state of analog buttons, such as the triggers on many modern gamepads. The values are normalized to the range 0.0 —1.0, with 0.0 representing a button that is not pressed, and 1.0 representing a button that is fully pressed.
- {{domxref("GamepadButton.touched")}} {{readonlyInline}}
  - : A boolean value indicating whether the button is currently touched (`true`) or not touched (`false`).
- {{domxref("GamepadButton.pressed")}} {{readonlyInline}}
  - : A boolean value indicating whether the button is currently pressed (`true`) or unpressed (`false`).

## Example

The button values in the following example are stored as an array of {{domxref("GamepadButton")}} objects. This simple example checks to see if the {{domxref("GamepadButton.value")}} of a button is greater than `0`, or if the {{domxref("GamepadButton.pressed")}} property indicates the button has been pressed.

```js
function gameLoop() {

  let gp = navigator.getGamepads()[0];

  if(gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
    b--;
  } else if(gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
    a++;
  } else if(gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
    b++;
  } else if(gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
    a--;
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  let start = rAF(gameLoop);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
