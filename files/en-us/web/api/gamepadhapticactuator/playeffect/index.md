---
title: "GamepadHapticActuator: playEffect() method"
short-title: playEffect()
slug: Web/API/GamepadHapticActuator/playEffect
page-type: web-api-instance-method
browser-compat: api.GamepadHapticActuator.playEffect
---

{{APIRef("Gamepad API")}}

The **`playEffect()`** method of the {{domxref("GamepadHapticActuator")}} interface causes the hardware to play a specific vibration effect.

## Syntax

```js-nolint
playEffect(type, params)
```

### Parameters

- `type`

  - : A string representing the desired effect. Possible values are `"dual-rumble"` and `"trigger-rumble"`, and their effects can vary depending on the hardware type. See {{domxref("GamepadHapticActuator.effects")}} for further details of the effect types.

- `params`

  - : An object to describe a desired haptic effect.

    Expected values are:

    - `duration` {{optional_inline}}
      - : The duration of the effect in milliseconds.
        Defaults to `0`.
    - `startDelay` {{optional_inline}}
      - : The delay in milliseconds before the effect is started.
        Defaults to `0`.
    - `strongMagnitude` {{optional_inline}}
      - : The rumble intensity of the low-frequency (strong) rumble motors, normalized to the range between `0.0` and `1.0`.
        Defaults to `0.0`.
    - `weakMagnitude` {{optional_inline}}
      - : The rumble intensity of the high-frequency (weak) rumble motors, normalized to the range between `0.0` and `1.0`.
        Defaults to `0.0`.
    - `leftTrigger` (relevant to `"trigger-rumble"` effects only) {{optional_inline}}
      - : The rumble intensity of the bottom-left front trigger, normalized to the range between `0.0` and `1.0`.
        Defaults to `0.0`.
    - `rightTrigger` (relevant to `"trigger-rumble"` effects only) {{optional_inline}}
      - : The rumble intensity of the bottom-right front trigger, normalized to the range between `0.0` and `1.0`.
        Defaults to `0.0`.

> [!NOTE]
> A new call to `playEffect()` overrides a previous ongoing call.

### Return value

A promise that resolves with `"complete"` when the effect successfully completes, or `"preempted"` if the current effect is stopped or replaced by another effect.

The promise may reject with the following exception types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not active or hidden.
- `NotSupportedError` {{domxref("DOMException")}}
  - : The requested `type` is not supported by the current gamepad's actuator.
- `TypeError` {{domxref("DOMException")}}
  - : The requested `type` is not a valid effect type.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator
  .playEffect("dual-rumble", {
    startDelay: 0,
    duration: 200,
    weakMagnitude: 1.0,
    strongMagnitude: 1.0,
  })
  .then((result) => console.log(result));
// Should log "complete" if effect successfully runs
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
