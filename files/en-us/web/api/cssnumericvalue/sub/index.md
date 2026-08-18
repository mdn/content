---
title: "CSSNumericValue: sub() method"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.sub
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`sub()`** method of the {{domxref("CSSNumericValue")}} interface subtracts a supplied number from the `CSSNumericValue`.

## Syntax

```js-nolint
sub()
sub(number1)
sub(number1, number2)
sub(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathSum')}}, or a {{domxref('CSSUnitValue')}} if `this` and every argument share the same unit.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

### Basic usage

```js
let mathSum = CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).sub(CSS.in(9));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
