---
title: "CSSMathProduct: CSSMathProduct() constructor"
short-title: CSSMathProduct()
slug: Web/API/CSSMathProduct/CSSMathProduct
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathProduct.CSSMathProduct
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`CSSMathProduct()`** constructor creates a new {{domxref("CSSMathProduct")}} object representing the product of the arguments passed into it.

Numeric arguments are wrapped into {{domxref("CSSUnitValue")}} objects with a unit of `"number"`.
All arguments are stored as separate items in its {{domxref("CSSMathProduct/values","values")}} property.

## Syntax

```js-nolint
new CSSMathProduct(arg1)
new CSSMathProduct(arg1, arg2)
new CSSMathProduct(arg1, arg2, /* …, */ argN)
```

### Parameters

- `arg1`, …, `argN`
  - : One or more numbers or {{domxref("CSSNumericValue")}} objects.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if no arguments are passed.
- {{jsxref("TypeError")}}
  - : Thrown if the types of `arg1`, …, `argN` can't be combined into a product.
    This is rare: multiplying values of different units (a length by a time, for example) is allowed and produces a compound type.

## Examples

### Basic usage

The following code creates a `CSSMathProduct` instance from two values, then reads back its `operator` and `values` properties.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.operator); // 'product'
console.log(product.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Empty arguments

The constructor throws a `SyntaxError` if called with no arguments.

```js
try {
  new CSSMathProduct();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

### Handling incompatible percentages

Multiplying a length by a time produces a valid (if unusual) compound type — unlike addition, multiplication doesn't require its arguments to share a dimension.

```js
const compound = new CSSMathProduct(CSS.px(10), CSS.s(2));

console.log(compound.constructor.name); // "CSSMathProduct"
console.log(compound.toString()); // "calc(10px * 2s)"
```

A `TypeError` can occur in the more contrived case where two or more arguments are themselves composite values that each mix a percentage with a different unit, and the product can't resolve them to a compatible type.
In the following code, `percentageLength` mixes a percentage with a length (so its percentage resolves to `"length"`), and `percentageAngle` mixes a percentage with an angle (so its percentage resolves to `"angle"`).
Multiplying them fails, because their percentages can't be resolved to a common type.

```js
const percentageLength = CSS.percent(50).add(CSS.px(10)); // percentage resolves to "length"
const percentageAngle = CSS.percent(50).add(CSS.deg(10)); // percentage resolves to "angle"

try {
  new CSSMathProduct(percentageLength, percentageAngle);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
