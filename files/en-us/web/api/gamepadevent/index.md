---
title: GamepadEvent
slug: Web/API/GamepadEvent
tags:
  - API
  - Gamepad API
  - Games
  - Interface
  - Reference
browser-compat: api.GamepadEvent
---
{{APIRef("Gamepad API")}}{{securecontext_header}}

The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events {{domxref("Window.gamepadconnected")}} and {{domxref("Window.gamepaddisconnected")}} are fired in response to.

## Constructor

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : Returns a new `GamepadEvent` object.

## Properties

- {{ domxref("GamepadEvent.gamepad") }} {{readonlyInline}}
  - : Returns a {{ domxref("Gamepad") }} object, providing access to the associated gamepad data for the event fired.

## Examples

The gamepad property being called on a fired {{domxref("Window.gamepadconnected")}} event.

```js
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
```

And on a {{domxref("Window.gamepaddisconnected")}} event.

```js
window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
  e.gamepad.index, e.gamepad.id);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
