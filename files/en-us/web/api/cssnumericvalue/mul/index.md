---
title: "CSSNumericValue: mul() method"
short-title: mul()
slug: Web/API/CSSNumericValue/mul
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.mul
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`mul()`** method of the {{domxref("CSSNumericValue")}} interface multiplies the `CSSNumericValue` by the supplied values.

## Syntax

```js-nolint
mul()
mul(number1)
mul(number1, number2)
mul(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathProduct')}}, or a {{domxref('CSSUnitValue')}} if `this` and every argument are plain numbers, or all but one of them are.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

### Basic usage

```js
let mathProduct = CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).mul(CSS.in(9));
// Prints "calc(23px * 4% * 3cm * 9in)"
console.log(mathProduct.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
