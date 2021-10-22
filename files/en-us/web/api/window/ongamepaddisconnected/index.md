---
title: Window.ongamepaddisconnected
slug: Web/API/Window/ongamepaddisconnected
tags:
  - API
  - Event Handler
  - Experimental
  - Gamepad API
  - Property
  - Reference
  - Window
  - ongamepaddisconnected
browser-compat: api.Window.ongamepaddisconnected
---
{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

The **`ongamepaddisconnected`** property of the
{{domxref("Window")}} interface represents an event handler that will run when a gamepad
is disconnected (when the {{event('gamepaddisconnected')}} event fires).

The event object is of type {{domxref("GamepadEvent")}}.

## Syntax

```js
window.ongamepaddisconnected = function() { ... };
```

## Examples

```js
window.ongamepaddisconnected = function() {
  // A gamepad has been disconnected
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](https://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
