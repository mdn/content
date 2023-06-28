---
title: "Window: gamepaddisconnected event"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
page-type: web-api-event
browser-compat: api.Window.gamepaddisconnected_event
---

{{APIRef}}

The `gamepaddisconnected` event is fired when the browser detects that a gamepad has been disconnected.

The event will not fire if disallowed by the document's {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

This event is not cancelable and does not bubble.

## Examples

To be informed when a gamepad is disconnected, you can add a handler to the window using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Lost connection with the gamepad.");
});
```

Alternatively, you can use the `window.ongamepaddisconnected` event handler property to establish a handler for the `gamepaddisconnected` event:

```js
window.ongamepaddisconnected = (event) => {
  console.log("Lost connection with the gamepad.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [gamepadconnected](/en-US/docs/Web/API/Window/gamepadconnected_event)
- [Using Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
