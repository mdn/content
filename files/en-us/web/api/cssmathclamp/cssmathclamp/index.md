---
title: "CSSMathClamp: CSSMathClamp() constructor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
page-type: web-api-constructor
browser-compat: api.CSSMathClamp.CSSMathClamp
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathClamp()`** constructor creates a new {{domxref("CSSMathClamp")}} object representing a CSS {{CSSXref("clamp", "clamp()")}} function.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameters

- `lower`
  - : A number or {{domxref("CSSNumericValue")}} that represents the minimum value.
- `value`
  - : A number or {{domxref("CSSNumericValue")}} that represents the preferred value.
- `upper`
  - : A number or {{domxref("CSSNumericValue")}} that represents the maximum value.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Thrown if the parameters have conflicting unit types.
    For example, mixing a length value with a time value.

## Examples

### Basic usage

The following code creates a `CSSMathClamp` instance from three lengths, then reads back its `lower`, `value`, and `upper` properties.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### Handling incompatible types

The constructor throws a `TypeError` if the three arguments don't resolve to a compatible type.
In the following code we mix a length with a time, and log the error.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathClamp(CSS.px(10), CSS.s(2), CSS.px(500));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
