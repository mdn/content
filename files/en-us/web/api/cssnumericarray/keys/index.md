---
title: "CSSNumericArray: keys() method"
short-title: keys()
slug: Web/API/CSSNumericArray/keys
page-type: web-api-instance-method
browser-compat: api.CSSNumericArray.keys
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`keys()`** method of the {{domxref("CSSNumericArray")}} interface returns a new _array iterator_ that yields the index of each item in the object.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over indexes

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const index of sum.values.keys()) {
  console.log(index);
}
// 0
// 1
// 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericArray.entries()")}}
- {{domxref("CSSNumericArray.forEach()")}}
- {{domxref("CSSNumericArray.length")}}
- {{domxref("CSSNumericArray.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
