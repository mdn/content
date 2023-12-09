---
title: "KeyboardLayoutMap: size property"
short-title: size
slug: Web/API/KeyboardLayoutMap/size
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.size
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`size`** read-only property of
the {{domxref("KeyboardLayoutMap")}} interface returns the number of elements in the
map.

The property is otherwise the same as {{jsxref("Map.prototype.size")}}.

## Value

A number.

## Examples

The following example get the count of the location- or layout-specific string and its associated keyboard code on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.size);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.size")}}
