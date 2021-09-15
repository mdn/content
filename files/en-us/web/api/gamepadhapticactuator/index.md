---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
tags:
  - API
  - Experimental
  - Gamepad
  - GamepadHapticActuator
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebVR
browser-compat: api.GamepadHapticActuator
---
{{APIRef("Gamepad API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`GamepadHapticActuator`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.

This interface is accessible through the {{domxref("Gamepad.hapticActuators")}} property.

## Properties

- {{domxref("GamepadHapticActuator.type")}} {{readonlyInline}}
  - : Returns an enum representing the type of the haptic hardware.

## Methods

- {{domxref("GamepadHapticActuator.pulse()")}} {{readonlyInline}}
  - : Makes the hardware pulse at a certain intensity for a specified duration.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
