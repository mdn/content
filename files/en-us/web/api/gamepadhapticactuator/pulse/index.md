---
title: "GamepadHapticActuator: pulse() method"
short-title: pulse()
slug: Web/API/GamepadHapticActuator/pulse
page-type: web-api-instance-method
browser-compat: api.GamepadHapticActuator.pulse
---

{{APIRef("Gamepad")}}

The **`pulse()`** method of the {{domxref("GamepadHapticActuator")}} interface makes the hardware pulse at a certain intensity for a specified duration.

## Syntax

```js-nolint
pulse(value, duration)
```

### Parameters

- `value`
  - : A double representing the intensity of the pulse. This can vary depending on the hardware type, but generally takes a value between 0.0 (no intensity) and 1.0 (full intensity).
- `duration`
  - : A double representing the duration of the pulse, in milliseconds.

> **Note:** Repeated calls to `pulse()` override the previous calls if they are still ongoing.

### Return value

A promise that resolves with a value of `true` when the pulse has successfully completed.

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
