---
title: GamepadHapticActuator.playEffect()
slug: Web/API/GamepadHapticActuator/playEffect
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - GamepadHapticActuator
  - Method
  - Reference
  - playEffect
  - Non-standard
browser-compat: api.GamepadHapticActuator.playEffect
---
{{APIRef("Gamepad")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`playEffect()`** method of the {{domxref("GamepadHapticActuator")}} interface makes the hardware play a specific vibration pattern.

## Syntax

```js
playEffect(type, params)
```

### Parameters

- `type`
  - : A string representing the desired effect. This can vary depending on the hardware type. Possible values are "dual-rumble" or "vibration".

- `params`

  - : An object to describe a desired haptic effect.

    Expected values are:

    - `duration`
      - : The duration of the effect in milliseconds.
    - `startDelay`
      - : The delay in milliseconds before the effect is started.
    - `strongMagnitude`
      - : Rumble intensity of the low-frequency (strong) rumble motors, normalized to the range between 0.0 and 1.0.
    - `weakMagnitude`
      - : Rumble intensity of the high-frequency (weak) rumble motors, normalized to the range between 0.0 and 1.0.

> **Note:** A new call to `playEffect()` overrides a previous ongoing call.

### Return value

A promise that resolves with `true` when the playEffect successfully completes.

## Examples

```js
const gamepad = navigator.getGamepads()[0];

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
