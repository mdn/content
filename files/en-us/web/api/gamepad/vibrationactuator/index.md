---
title: "Gamepad: vibrationActuator property"
short-title: vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Gamepad.vibrationActuator
---

{{APIRef("Gamepad")}}{{Non-standard_Header}}{{SecureContext_Header}}

The **`vibrationActuator`** read-only property of the {{domxref("Gamepad")}} interface returns a {{domxref("GamepadHapticActuator")}} object, which represents haptic feedback hardware available on the controller.

> [!NOTE]
> Support for this property may vary across different combinations of platforms and controllers. Even if the controller supports haptic feedback, the platform may not support it.

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
