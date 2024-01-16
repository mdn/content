---
title: "KeyboardLayoutMap: forEach() method"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.forEach
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.foreach
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`forEach()`** method of the
{{domxref('KeyboardLayoutMap')}} interface executes a provided function once for
each element of the map.

The method is otherwise the same as {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The KeyboardLayoutMap that `forEach()` is being called on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e., the reference
    `Object`) when executing `callback`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example iterates every location- or layout-specific string and its associated keyboard code on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  keyboardLayoutMap.forEach((key, code) => {
    console.log(`${code} keyboard code represents ${key} key`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.forEach()")}}
