---
title: Gamepad.id
slug: Web/API/Gamepad/id
page-type: web-api-instance-property
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Gamepad.id
---
{{APIRef("Gamepad API")}}

The **`Gamepad.id`** property of the {{domxref("Gamepad") }}
interface returns a string containing some information about the controller.

The exact syntax is not strictly specified, but in Firefox it will contain three pieces
of information separated by dashes (`-`):

- Two 4-digit hexadecimal strings containing the USB vendor and product id of the
  controller
- The name of the controller as provided by the driver.

For example, a PS2 controller returned **810-3-USB Gamepad**.

This information is intended to allow you to find a mapping for the controls on the
device as well as display useful feedback to the user.

## Value

A string.

## Examples

```js
window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## Value

A {{jsxref("String")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
