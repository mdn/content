---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
tags:
  - API
  - Experimental
  - Gamepad API
  - Games
  - Method
  - Navigator
  - Reference
browser-compat: api.Navigator.getGamepads
---
{{APIRef("Gamepad API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`Navigator.getGamepads()`** method returns an array of
{{domxref("Gamepad")}} objects, one for each gamepad connected to the device.

Elements in the array may be `null` if a gamepad disconnects during a
session, so that the remaining gamepads retain the same index.

Calls to this method will throw a `SecurityError` {{domxref('DOMException')}} if disallowed by the {{httpheader('Feature-Policy/gamepad','gamepad')}} [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy).

## Syntax

```js
 var gamepads = navigator.getGamepads();
```

## Example

```js
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index, gp.id, gp.buttons.length, gp.axes.length
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
