---
title: "GamepadHapticActuator: type property"
short-title: type
slug: Web/API/GamepadHapticActuator/type
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.GamepadHapticActuator.type
---

{{APIRef("Gamepad API")}}{{deprecated_header}}{{non-standard_header}}

The **`type`** read-only property of the {{domxref("GamepadHapticActuator")}} interface returns an enumerated value representing the type of the haptic hardware.

This property is deprecated: use {{domxref("GamepadHapticActuator.effects")}} to detect effect support.

## Value

An enumerated value representing the haptic hardware type. Currently available types are:

- `"vibration"`
  - : Simple vibration hardware, which creates a rumbling effect.
- `"dual-rumble"`
  - : A controller with a vibration motor in each handle. Each motor can be vibrated independently to create positional rumbling effects.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

// Logs "vibration" or "dual-rumble"
console.log(gamepad.hapticActuators[0].type);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
