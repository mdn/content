---
title: GamepadHapticActuator.pulse()
slug: Web/API/GamepadHapticActuator/pulse
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - GamepadHapticActuator
  - Method
  - Reference
  - pulse
browser-compat: api.GamepadHapticActuator.pulse
---
{{APIRef("Gamepad")}}{{SeeCompatTable}}

The **`pulse()`** method of the {{domxref("GamepadHapticActuator")}} interface makes the hardware pulse at a certain intensity for a specified duration.

## Syntax

```js
gamepadHapticActuatorInstance.pulse(value, duration).then(function(result) { /* ... */ });
```

### Parameters

- _value_
  - : A double representing the intensity of the pulse. This can vary depending on the hardware type, but generally takes a value between 0.0 (no intensity) and 1.0 (full intensity).
- _duration_
  - : A double representing the duration of the pulse, in milliseconds.

> **Note:** Repeated calls to `pulse()` override the previous calls if they are still ongoing.

### Return value

A promise that resolves with a value of `true` when the pulse has successfully completed.

## Examples

TBC

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
