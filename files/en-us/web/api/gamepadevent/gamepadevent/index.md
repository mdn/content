---
title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
tags:
  - API
  - Constructor
  - Gamepad API
  - Games
  - Reference
browser-compat: api.GamepadEvent.GamepadEvent
---
{{APIRef("Gamepad API")}}

The **`GamepadEvent()`** constructor creates a new
{{domxref("GamepadEvent")}} object.

## Syntax

```js
var gamepadEvent = new GamepadEvent(typeArg, options)
```

### Parameters

- _typeArg_
  - : A {{domxref("DOMString")}} that must be one of `gamepadconnected` or
    `gamepaddisconnected`.
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `gamepad`: An instance of {{domxref("Gamepad")}} describing the
      gamepad associated with the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
