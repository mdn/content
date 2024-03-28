---
title: GamepadEvent
slug: Web/API/GamepadEvent
page-type: web-api-interface
browser-compat: api.GamepadEvent
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} are fired in response to.

{{InheritanceDiagram}}

## Constructor

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : Returns a new `GamepadEvent` object.

## Instance properties

- {{ domxref("GamepadEvent.gamepad") }} {{ReadOnlyInline}}
  - : Returns a {{ domxref("Gamepad") }} object, providing access to the associated gamepad data for the event fired.

## Examples

The gamepad property being called on a fired {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} event.

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

And on a {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} event.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
