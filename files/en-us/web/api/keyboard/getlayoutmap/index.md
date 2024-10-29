---
title: "Keyboard: getLayoutMap() method"
short-title: getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Keyboard.getLayoutMap
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`getLayoutMap()`** method of the
{{domxref("Keyboard")}} interface returns a {{jsxref('Promise')}} that resolves with
an instance of {{domxref('KeyboardLayoutMap')}} which is a map-like object with
functions for retrieving the strings associated with specific physical keys.

## Syntax

```js-nolint
getLayoutMap()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with an instance of
{{domxref('KeyboardLayoutMap')}}.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the call is blocked by a [permission policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

The following example demonstrates how to get the location- or layout-specific string
associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
const keyboard = navigator.keyboard;
keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
