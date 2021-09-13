---
title: Gamepad.index
slug: Web/API/Gamepad/index
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Gamepad.index
---
{{APIRef("Gamepad API")}}

The **`Gamepad.index`** property of the {{domxref("Gamepad") }}
interface returns an integer that is auto-incremented to be unique for each device
currently connected to the system.

This can be used to distinguish multiple controllers; a gamepad that is disconnected
and reconnected will retain the same index.

## Syntax

```js
const index = gamepad.index;
```

## Example

```js
window.addEventListener("gamepadconnected", function() {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

### Value

A {{jsxref("number") }}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
