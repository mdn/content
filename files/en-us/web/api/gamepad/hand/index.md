---
title: Gamepad.hand
slug: Web/API/Gamepad/hand
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - Property
  - Reference
  - hand
browser-compat: api.Gamepad.hand
---
{{APIRef("Gamepad")}}{{SeeCompatTable}}

The **`hand`** read-only property of the {{domxref("Gamepad")}} interface returns an enum defining what hand the controller is being held in, or is most likely to be held in.

## Syntax

```js
var myHand = gamepadInstance.hand;
```

### Value

A [`GamepadHand`](https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum) enum; possible values are:

- `left` — the left hand.
- `right` — the right hand.
- Empty string ("") — this value is returned if the other values are not applicable, e.g. the controller is held in both hands, or would be fine in either.

## Examples

TBC

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
