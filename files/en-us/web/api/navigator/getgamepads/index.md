---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
page-type: web-api-instance-method
tags:
  - API
  - Gamepad API
  - Games
  - Method
  - Navigator
  - Reference
browser-compat: api.Navigator.getGamepads
---
{{APIRef("Gamepad API")}}{{securecontext_header}}

The **`Navigator.getGamepads()`** method returns an array of
{{domxref("Gamepad")}} objects, one for each gamepad connected to the device.

Elements in the array may be `null` if a gamepad disconnects during a
session, so that the remaining gamepads retain the same index.

Calls to this method will throw a `SecurityError` {{domxref('DOMException')}} if disallowed by the {{httpheader('Feature-Policy/gamepad','gamepad')}} [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy).

## Syntax

```js
getGamepads()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("Gamepad")}} objects, eventually empty.

## Examples

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(`Gamepad connected at index ${gp.index}: ${gpid} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
