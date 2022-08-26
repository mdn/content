---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
page-type: web-api-interface
tags:
  - API
  - Gamepad
  - GamepadHapticActuator
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebVR
browser-compat: api.GamepadHapticActuator
---
{{APIRef("Gamepad API")}}{{securecontext_header}}

The **`GamepadHapticActuator`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.

This interface is accessible through the {{domxref("Gamepad.hapticActuators")}} property.

## Properties

- {{domxref("GamepadHapticActuator.type")}} {{ReadOnlyInline}}
  - : Returns an enum representing the type of the haptic hardware.

## Methods

- {{domxref("GamepadHapticActuator.pulse()")}} {{ReadOnlyInline}}
  - : Makes the hardware pulse at a certain intensity for a specified duration.

- {{domxref("GamepadHapticActuator.playEffect()")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Makes the hardware play a specific vibration pattern.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);

gamepad.vibrationActuator.playEffect('dual-rumble', {
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
