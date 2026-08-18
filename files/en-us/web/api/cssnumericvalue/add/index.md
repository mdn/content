---
title: "CSSNumericValue: add() method"
short-title: add()
slug: Web/API/CSSNumericValue/add
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.add
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`add()`** method of the {{domxref("CSSNumericValue")}} interface adds a supplied number to the `CSSNumericValue`.

## Syntax

```js-nolint
add()
add(number1)
add(number1, number2)
add(number1, number2, /* …, */ numberN)
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
let mathSum = CSS.px(23).add(CSS.percent(4)).add(CSS.cm(3)).add(CSS.in(9));
// Prints "calc(23px + 4% + 3cm + 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
