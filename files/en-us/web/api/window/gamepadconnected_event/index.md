---
title: "Window: gamepadconnected event"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
page-type: web-api-event
browser-compat: api.Window.gamepadconnected_event
---

{{APIRef}}

The `gamepadconnected` event is fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.

The event will not fire if disallowed by the document's {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

This event is not cancelable and does not bubble.

## Examples

To be informed when a gamepad is connected, you can add a handler to the window using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
window.addEventListener("gamepadconnected", (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
});
```

Alternatively, you can use the `window.ongamepadconnected` event handler property to establish a handler for the `gamepadconnected` event:

```js
window.ongamepadconnected = (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [gamepaddisconnected](/en-US/docs/Web/API/Window/gamepaddisconnected_event)
- [Using Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
