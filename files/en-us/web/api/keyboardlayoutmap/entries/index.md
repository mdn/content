---
title: "KeyboardLayoutMap: entries() method"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.entries
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.entries
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`entries()`** method of the {{domxref("KeyboardLayoutMap")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the key/value pairs, in the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop (the difference being that a `for-in` loop enumerates properties in the prototype chain as well).

The method is otherwise the same as {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Return value

A new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object.

## Examples

The following example iterates every location- or layout-specific string and its associated keyboard code on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const [code, key] of keyboardLayoutMap.entries()) {
    console.log(`${code} keyboard code represents ${key} key`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.entries()")}}
