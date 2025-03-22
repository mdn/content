---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
page-type: web-api-interface
browser-compat: api.GamepadHapticActuator
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

The **`GamepadHapticActuator`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.

This interface is accessible through the {{domxref("Gamepad.hapticActuators")}} property.

## Instance properties

- {{domxref("GamepadHapticActuator.effects")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns an array of enumerated values representing the different haptic effects that the actuator supports.
- {{domxref("GamepadHapticActuator.type")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns an enumerated value representing the type of the haptic hardware. This property is deprecated: use `GamepadHapticActuator.effects` to detect effect support.

## Instance methods

- {{domxref("GamepadHapticActuator.playEffect()")}} {{ReadOnlyInline}}
  - : Causes the hardware to play a specific vibration effect.
- {{domxref("GamepadHapticActuator.pulse()")}} {{ReadOnlyInline}}
  - : Makes the hardware pulse at a certain intensity for a specified duration.
- {{domxref("GamepadHapticActuator.reset()")}} {{ReadOnlyInline}}
  - : Stops the hardware from playing an active vibration effect.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
