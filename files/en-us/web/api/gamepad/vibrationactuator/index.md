---
title: Gamepad.vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Gamepad.vibrationActuator
---

{{APIRef("Gamepad")}}{{Non-standard_Header}}

The **`vibrationActuator`** read-only property of the {{domxref("Gamepad")}} interface returns a {{domxref("GamepadHapticActuator")}} object, which represents haptic feedback hardware available on the controller.

## Value

A {{domxref("GamepadHapticActuator")}} object.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

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
