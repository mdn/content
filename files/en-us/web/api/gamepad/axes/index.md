---
title: Gamepad.axes
slug: Web/API/Gamepad/axes
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Gamepad.axes
---
{{APIRef("Gamepad API")}}

The **`Gamepad.axes`** property of the {{domxref("Gamepad") }}
interface returns an array representing the controls with axes present on the device
(e.g. analog thumb sticks).

Each entry in the array is a floating point value in the range -1.0 – 1.0, representing
the axis position from the lowest value (-1.0) to the highest value (1.0).

## Syntax

```js
const axes = gamepad.axes;
```

## Example

```js
function gameLoop() {
  if(navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];
  } else {
    var gp = navigator.getGamepads()[0];
  }

  if(gp.axes[0] != 0) {
    b -= gp.axes[0];
  } else if(gp.axes[1] != 0) {
    a += gp.axes[1];
  } else if(gp.axes[2] != 0) {
    b += gp.axes[2];
  } else if(gp.axes[3] != 0) {
    a -= gp.axes[3];
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  var start = rAF(gameLoop);
};
```

## Value

An array of {{domxref("double") }} values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
