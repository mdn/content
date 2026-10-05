---
title: "CSSMathNegate: CSSMathNegate() constructor"
short-title: CSSMathNegate()
slug: Web/API/CSSMathNegate/CSSMathNegate
page-type: web-api-constructor
browser-compat: api.CSSMathNegate.CSSMathNegate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathNegate()`** constructor creates a new {{domxref("CSSMathNegate")}} object which negates the value passed into it.

## Syntax

```js-nolint
new CSSMathNegate(arg)
```

### Parameters

- `arg`
  - : A number or {{domxref("CSSNumericValue")}} that represents the value to negate.

### Exceptions

None.

## Examples

### Basic usage

The following code creates a `CSSMathNegate` object from a length, then logs the constructor name, `value`, and the object's serialization (from {{domxref("CSSStyleValue/toString","toString()")}}).

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.constructor.name); // "CSSMathNegate"
console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
console.log(negated.toString()); // "calc(-10px)"
```

Note that if a plain number is passed to `arg`, the `value` is rectified to a {{domxref("CSSUnitValue")}} with unit `"number"`:

```js
const negatedNumber = new CSSMathNegate(4);

console.log(negatedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
