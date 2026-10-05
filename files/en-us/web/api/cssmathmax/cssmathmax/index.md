---
title: "CSSMathMax: CSSMathMax() constructor"
short-title: CSSMathMax()
slug: Web/API/CSSMathMax/CSSMathMax
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathMax.CSSMathMax
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathMax()`** constructor creates a new {{domxref("CSSMathMax")}} object which represents the CSS {{CSSXref('max', 'max()')}} function.

## Syntax

```js-nolint
new CSSMathMax(arg1)
new CSSMathMax(arg1, arg2)
new CSSMathMax(arg1, arg2, /* …, */ argN)
```

### Parameters

- `arg1`, …, `argN`
  - : A list of numbers or {{domxref("CSSNumericValue")}} objects.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if no arguments are passed.
- {{jsxref("TypeError")}}
  - : Thrown if `arg1`, …, `argN` have incompatible types (for example, mixing a {{cssxref('length')}} with an {{cssxref('angle')}}), so a common type cannot be determined for comparison.

## Examples

### Basic usage

The following code creates a `CSSMathMax` instance from three values, then reads back its `operator` and `values` properties.

```js
const max = new CSSMathMax(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(max.constructor.name); // "CSSMathMax"
console.log(max.operator); // 'max'
console.log(max.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(max.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Handling incompatible types

The constructor throws a `TypeError` if the values don't resolve to a compatible type.
In the following code we mix a length with a time, and log the error.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathMax(CSS.px(10), CSS.s(2));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

### Empty arguments

The constructor throws a `SyntaxError` if called with no arguments.

```js
try {
  new CSSMathMax();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
