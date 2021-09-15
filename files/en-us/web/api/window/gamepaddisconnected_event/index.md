---
title: 'Window: gamepaddisconnected event'
slug: Web/API/Window/gamepaddisconnected_event
browser-compat: api.Window.gamepaddisconnected_event
---
{{APIRef}}

The `gamepaddisconnected` event is fired when the browser detects that a gamepad has been disconnected.

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
        {{ domxref("Window.ongamepaddisconnected","ongamepaddisconnected")}}
      </td>
    </tr>
  </tbody>
</table>

The event will not fire if disallowed by the document's {{httpheader('Feature-Policy/gamepad','gamepad')}} [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy).

## Examples

```js
window.addEventListener('gamepaddisconnected', event => {
    console.log('Lost connection with the gamepad.');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [gamepadconnected](/en-US/docs/Web/API/Window/gamepadconnected_event)
- [Using Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
