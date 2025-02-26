---
title: "KeyboardLayoutMap: values() method"
short-title: values()
slug: Web/API/KeyboardLayoutMap/values
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.values
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.values
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`values()`** method of the {{domxref("KeyboardLayoutMap")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the values for each index in the `KeyboardLayoutMap` object.

The method is otherwise the same as {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Return value

A new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object.

## Examples

The following example iterates every location- or layout-specific string on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const key of keyboardLayoutMap.values()) {
    console.log(`${key} key`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.values()")}}
