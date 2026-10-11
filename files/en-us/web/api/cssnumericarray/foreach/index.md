---
title: "CSSNumericArray: forEach() method"
short-title: forEach()
slug: Web/API/CSSNumericArray/forEach
page-type: web-api-instance-method
browser-compat: api.CSSNumericArray.forEach
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`forEach()`** method of the {{domxref("CSSNumericArray")}} interface executes a provided function once for each item in the object.

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
      - : The `CSSNumericArray` that `forEach()` is being called on.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Iterating with forEach()

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

sum.values.forEach((value, index) => {
  console.log(index, value.toString());
});
// 0 "10px"
// 1 "5em"
// 2 "50%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericArray.entries()")}}
- {{domxref("CSSNumericArray.keys()")}}
- {{domxref("CSSNumericArray.length")}}
- {{domxref("CSSNumericArray.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
