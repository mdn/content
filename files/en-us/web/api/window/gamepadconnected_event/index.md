---
title: 'Window: gamepadconnected event'
slug: Web/API/Window/gamepadconnected_event
browser-compat: api.Window.gamepadconnected_event
---
{{APIRef}}

The `gamepadconnected` event is fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("GamepadEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{ domxref("Window.ongamepadconnected","ongamepadconnected")}}
      </td>
    </tr>
  </tbody>
</table>

The event will not fire if disallowed by the document's {{httpheader('Feature-Policy/gamepad','gamepad')}} [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy).

## Examples

```js
window.addEventListener('gamepadconnected', event => {

    // All buttons and axes values can be accessed through
    event.gamepad;

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [gamepaddisconnected](/en-US/docs/Web/API/Window/gamepaddisconnected_event)
- [Using Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
