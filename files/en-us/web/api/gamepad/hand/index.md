---
title: "Gamepad: hand property"
short-title: hand
slug: Web/API/Gamepad/hand
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Gamepad.hand
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`hand`** read-only property of the {{domxref("Gamepad")}} interface returns an enum defining what hand the controller is being held in, or is most likely to be held in.

## Value

A [`GamepadHand`](https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum) enum; possible values are:

- `left` — the left hand.
- `right` — the right hand.
- `""` (Empty string) – if the other values are not applicable. E.g., the controller is held in both hands or would be fine in either.

## Examples

TBC

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
