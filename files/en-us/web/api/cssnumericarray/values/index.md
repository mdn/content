---
title: "CSSNumericArray: values() method"
short-title: values()
slug: Web/API/CSSNumericArray/values
page-type: web-api-instance-method
browser-compat: api.CSSNumericArray.values
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`values()`** method of the {{domxref("CSSNumericArray")}} interface returns a new _array iterator_ that yields each item in the object.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over values

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const value of sum.values.values()) {
  console.log(value.toString());
}
// "10px"
// "5em"
// "50%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericArray.entries()")}}
- {{domxref("CSSNumericArray.forEach()")}}
- {{domxref("CSSNumericArray.keys()")}}
- {{domxref("CSSNumericArray.length")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
