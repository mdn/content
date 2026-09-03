---
title: "CSSUnparsedValue: forEach() method"
short-title: forEach()
slug: Web/API/CSSUnparsedValue/forEach
page-type: web-api-instance-method
browser-compat: api.CSSUnparsedValue.forEach
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`forEach()`** method of the {{domxref("CSSUnparsedValue")}} interface executes a provided function once for each item in the object.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : The function to execute for each element, taking three arguments:
    - `currentValue`
      - : The item being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The `CSSUnparsedValue` that `forEach()` is being called on.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Iterating with forEach()

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

value.forEach((fragment, index) => {
  console.log(index, fragment);
});
// 0 "1em"
// 1 "#445566"
// 2 "-45px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries()")}}
- {{domxref("CSSUnparsedValue.keys()")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
