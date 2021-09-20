---
title: Gamepad.connected
slug: Web/API/Gamepad/connected
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Gamepad.connected
---
{{APIRef("Gamepad API")}}

The **`Gamepad.connected`** property of the
{{domxref("Gamepad") }} interface returns a boolean indicating whether the gamepad is
still connected to the system.

If the gamepad is connected, the value is `true`; if not, it is
`false`.

## Syntax

```js
const connected = gamepad.connected;
```

## Example

```js
var gp = navigator.getGamepads()[0];
console.log(gp.connected);
```

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
