---
title: "CSSMathInvert: CSSMathInvert() constructor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
page-type: web-api-constructor
browser-compat: api.CSSMathInvert.CSSMathInvert
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathInvert()`** constructor creates a new {{domxref("CSSMathInvert")}} object which represents the inverse (reciprocal) of a {{domxref('CSSNumericValue')}}.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameters

- `arg`
  - : A number or {{domxref('CSSNumericValue')}} that represents the value to invert.

### Exceptions

None.

## Examples

### Basic usage

The following code creates a `CSSMathInvert` object from a percentage, then logs the constructor name, `value`, and the object's serialization (from {{domxref("CSSStyleValue/toString","toString()")}}).

```js
const inverted = new CSSMathInvert(CSS.percent(4));

console.log(inverted.constructor.name); // "CSSMathInvert"
console.log(inverted.value); // CSSUnitValue {value: 4, unit: "percent"}
console.log(inverted.toString()); // "calc(1 / 4%)"
```

Note that if a plain number is passed to `arg`, the `value` is rectified to a {{domxref("CSSUnitValue")}} with unit `"number"`:

```js
const invertedNumber = new CSSMathInvert(4);

console.log(invertedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
