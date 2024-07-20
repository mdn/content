---
title: "Gamepad: index property"
short-title: index
slug: Web/API/Gamepad/index
page-type: web-api-instance-property
browser-compat: api.Gamepad.index
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

The **`Gamepad.index`** property of the {{domxref("Gamepad") }}
interface returns an integer that is auto-incremented to be unique for each device
currently connected to the system.

This can be used to distinguish multiple controllers; a gamepad that is disconnected
and reconnected will retain the same index.

## Value

A {{jsxref("number") }}.

## Examples

```js
window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
