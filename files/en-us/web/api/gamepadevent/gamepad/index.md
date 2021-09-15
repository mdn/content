---
title: GamepadEvent.gamepad
slug: Web/API/GamepadEvent/gamepad
tags:
  - API
  - Gamepad API
  - Property
  - Reference
browser-compat: api.GamepadEvent.gamepad
---
{{APIRef("Gamepad API")}}

The **`GamepadEvent.gamepad`** property of the
**{{domxref("GamepadEvent")}} interface** returns a {{domxref("Gamepad")}}
object, providing access to the associated gamepad data for fired
{{event("gamepadconnected")}} and {{event("gamepaddisconnected")}} events.

## Syntax

```js
readonly attribute Gamepad gamepad;
```

## Example

The `gamepad` property being called on a fired
{{event("gamepadconnected")}} event.

```js
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
```

## Value

A {{domxref("Gamepad")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
