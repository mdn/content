---
title: "KeyboardLayoutMap: get() method"
short-title: get()
slug: Web/API/KeyboardLayoutMap/get
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.get
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.get
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`get()`** method of the
{{domxref('KeyboardLayoutMap')}} interface returns the element with the given
key.

A list of valid keys is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

The method is otherwise the same as {{jsxref("Map.prototype.get()")}}.

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key of the item to return from the map.

### Return value

The value of the specified key.

## Examples

The following example demonstrates how to get the location- or layout-specific string associated with the keyboard code that corresponds to the 'W' key on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.get()")}}
