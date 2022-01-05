---
title: MouseEvent.getModifierState()
slug: Web/API/MouseEvent/getModifierState
tags:
  - API
  - DOM
  - DOM Events
  - Method
  - MouseEvent
  - Reference
  - getModifierState
browser-compat: api.MouseEvent.getModifierState
---
{{APIRef("DOM Events")}}

The **`MouseEvent.getModifierState()`** method returns the current state of the specified modifier key: `true` if the modifier is active (i.e., the modifier key is pressed or locked), otherwise, `false`.

See {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} for details.

## Syntax

```js
getModifierState(keyArg)
```

### Returns

A boolean value

### Parameters

- _`keyArg`_
  - : A modifier key value.
    The value must be one of the {{domxref("KeyboardEvent.key")}} values which represent modifier keys or `"Accel"`{{deprecated_inline}}.
    This is case-sensitive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("MouseEvent")}} this method belongs to.
- {{domxref("KeyboardEvent.getModifierState")}}
