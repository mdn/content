---
title: "MouseEvent: getModifierState() method"
short-title: getModifierState()
slug: Web/API/MouseEvent/getModifierState
page-type: web-api-instance-method
browser-compat: api.MouseEvent.getModifierState
---

{{APIRef("UI Events")}}

The **`MouseEvent.getModifierState()`** method returns the current state of the specified modifier key: `true` if the modifier is active (i.e., the modifier key is pressed or locked), otherwise, `false`.

See {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} for details.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameters

- `key`
  - : A modifier key value.
    The value must be one of the {{domxref("KeyboardEvent.key")}} values which represent modifier keys or `"Accel"` {{deprecated_inline}}.
    This is case-sensitive.

### Return value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("MouseEvent")}} this method belongs to.
- {{domxref("KeyboardEvent.getModifierState")}}
