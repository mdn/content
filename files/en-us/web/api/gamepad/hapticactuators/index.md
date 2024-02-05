---
title: "Gamepad: hapticActuators property"
short-title: hapticActuators
slug: Web/API/Gamepad/hapticActuators
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Gamepad.hapticActuators
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`hapticActuators`** read-only property of the {{domxref("Gamepad")}} interface returns an array containing {{domxref("GamepadHapticActuator")}} objects, each of which represents haptic feedback hardware available on the controller.

## Value

An array containing {{domxref("GamepadHapticActuator")}} objects.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
