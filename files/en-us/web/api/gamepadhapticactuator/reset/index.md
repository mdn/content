---
title: "GamepadHapticActuator: reset() method"
short-title: reset()
slug: Web/API/GamepadHapticActuator/reset
page-type: web-api-instance-method
browser-compat: api.GamepadHapticActuator.reset
---

{{APIRef("Gamepad API")}}

The **`reset()`** method of the {{domxref("GamepadHapticActuator")}} interface stops the hardware from playing an active vibration effect.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

A promise that resolves with `"complete"` if the effect is successfully reset, or `"preempted"` if the effect was stopped or replaced by another effect.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});

gamepad.vibrationActuator.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
