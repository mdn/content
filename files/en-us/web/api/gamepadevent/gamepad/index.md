---
title: "GamepadEvent: gamepad property"
short-title: gamepad
slug: Web/API/GamepadEvent/gamepad
page-type: web-api-instance-property
browser-compat: api.GamepadEvent.gamepad
---

{{APIRef("Gamepad API")}}

The **`GamepadEvent.gamepad`** property of the
**{{domxref("GamepadEvent")}} interface** returns a {{domxref("Gamepad")}}
object, providing access to the associated gamepad data for fired
{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events.

## Value

A {{domxref("Gamepad")}} object.

## Examples

The `gamepad` property being called on a fired
{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} event.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
