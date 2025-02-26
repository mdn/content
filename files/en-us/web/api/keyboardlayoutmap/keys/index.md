---
title: "KeyboardLayoutMap: keys() method"
short-title: keys()
slug: Web/API/KeyboardLayoutMap/keys
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.keys
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.keys
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`keys()`** method of the {{domxref("KeyboardLayoutMap")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys for each index in the `KeyboardLayoutMap` object.

The method is otherwise the same as {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Return value

A new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object.

## Examples

The following example iterates every keyboard code on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const code of keyboardLayoutMap.keys()) {
    console.log(`${code} keyboard code`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.keys()")}}
