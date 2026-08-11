---
title: "CSSNumericValue: div() method"
short-title: div()
slug: Web/API/CSSNumericValue/div
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.div
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`div()`** method of the {{domxref("CSSNumericValue")}} interface divides the `CSSNumericValue` by the supplied value.

## Syntax

```js-nolint
div()
div(number1)
div(number1, number2)
div(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathProduct')}}, or a {{domxref('CSSUnitValue')}} if `this` and every argument are plain numbers, or all but one of them are.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.
- [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Thrown if any of `number1`, …, `numberN` is, or resolves to, 0 or -0.

## Examples

### Basic usage

```js
let mathProduct = CSS.px(24).div(CSS.percent(4));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
