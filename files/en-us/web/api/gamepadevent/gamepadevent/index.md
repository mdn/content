---
title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Gamepad API
  - Games
  - Reference
browser-compat: api.GamepadEvent.GamepadEvent
---
{{APIRef("Gamepad API")}}

The **`GamepadEvent()`** constructor creates a new {{domxref("GamepadEvent")}} object.

## Syntax

```js
new GamepadEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `gamepadconnected` or `gamepaddisconnected`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `gamepad`
      - : A {{domxref("Gamepad")}} object describing the gamepad associated with the event.

### Return value

A new {{domxref("GamepadEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
