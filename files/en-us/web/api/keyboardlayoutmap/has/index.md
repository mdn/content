---
title: "KeyboardLayoutMap: has() method"
short-title: has()
slug: Web/API/KeyboardLayoutMap/has
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.has
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.has
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`has()`** method of the
{{domxref('KeyboardLayoutMap')}} interface returns a boolean indicating whether the
object has an element with the specified key.

A list of valid keys is found in
the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

The method is otherwise the same as {{jsxref("Map.prototype.has()")}}.

## Syntax

```js-nolint
has(key)
```

### Parameters

- `key`
  - : The key of an element to search for in the map.

### Return value

A {{jsxref('Boolean')}} indicating whether the specified key was found.

## Examples

The following example checks whether the location- or layout-specific string associated with the keyboard code that corresponds to the 'W' key on an English QWERTY keyboard exists.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.has("KeyW"));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.has()")}}
