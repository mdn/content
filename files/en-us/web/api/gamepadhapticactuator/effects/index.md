---
title: "GamepadHapticActuator: effects property"
short-title: effects
slug: Web/API/GamepadHapticActuator/effects
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadHapticActuator.effects
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

The **`effects`** read-only property of the {{domxref("GamepadHapticActuator")}} interface returns an array of enumerated values representing the different haptic effects that the actuator supports.

## Value

An array representing the supported haptic effects. Possible included values are:

- `"dual-rumble"`
  - : A positional rumbling effect created by dual vibration motors in each handle of a controller, which can be vibrated independently.
- `"trigger-rumble"`
  - : Localized rumbling effects on the surface of a controller's trigger buttons created by vibrational motors located in each button. These buttons most commonly take the form of spring-loaded triggers.

> [!NOTE]
> If an effect is not listed that is known to be supported by the hardware, it may be that the browser does not support playing effects of that type.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

// Logs "dual-rumble" or "trigger-rumble"
console.log(gamepad.hapticActuators[0].effects[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
