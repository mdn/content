---
title: "CSSNumericArray: entries() method"
short-title: entries()
slug: Web/API/CSSNumericArray/entries
page-type: web-api-instance-method
browser-compat: api.CSSNumericArray.entries
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`entries()`** method of the {{domxref("CSSNumericArray")}} interface returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## Examples

### Iterating over index/value pairs

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const [index, value] of sum.values.entries()) {
  console.log(index, value.toString());
}
// 0 "10px"
// 1 "5em"
// 2 "50%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericArray.forEach()")}}
- {{domxref("CSSNumericArray.keys()")}}
- {{domxref("CSSNumericArray.length")}}
- {{domxref("CSSNumericArray.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
