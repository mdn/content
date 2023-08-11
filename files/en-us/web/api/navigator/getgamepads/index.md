---
title: "Navigator: getGamepads() method"
short-title: getGamepads()
slug: Web/API/Navigator/getGamepads
page-type: web-api-instance-method
browser-compat: api.Navigator.getGamepads
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

The **`Navigator.getGamepads()`** method returns an array of
{{domxref("Gamepad")}} objects, one for each gamepad connected to the device.

Elements in the array may be `null` if a gamepad disconnects during a
session, so that the remaining gamepads retain the same index.

## Syntax

```js-nolint
getGamepads()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("Gamepad")}} objects, eventually empty.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    `Gamepad connected at index ${gp.index}: ${gp.id} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
