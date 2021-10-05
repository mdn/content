---
title: Window.ongamepadconnected
slug: Web/API/Window/ongamepadconnected
tags:
  - API
  - Event Handler
  - Experimental
  - Gamepad API
  - Property
  - Reference
  - Window
  - ongamepadconnected
browser-compat: api.Window.ongamepadconnected
---
{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

The **`ongamepadconnected`** property of the
{{domxref("Window")}} interface represents an event handler that will run when a gamepad
is connected (when the {{event('gamepadconnected')}} event fires).

The event object is of type {{domxref("GamepadEvent")}}.

## Syntax

```js
window.ongamepadconnected = function() { ... };
```

## Examples

```js
window.ongamepadconnected = function(event) {
  // All buttons and axes values can be accessed through
  event.gamepad;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](https://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
