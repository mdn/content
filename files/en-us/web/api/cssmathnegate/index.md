---
title: CSSMathNegate
slug: Web/API/CSSMathNegate
page-type: web-api-interface
browser-compat: api.CSSMathNegate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathNegate`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the negation of a {{domxref("CSSNumericValue")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathNegate.CSSMathNegate", "CSSMathNegate()")}}
  - : Creates a new `CSSMathNegate` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref("CSSMathNegate.value")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CSSNumericValue")}} object.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

`CSSMathNegate` corresponds to applying unary minus to a numeric value (`x` becomes `-x`).

Generally you won't construct a `CSSMathNegate` directly.
It's produced by the internal negation step that {{domxref("CSSNumericValue.sub", "sub()")}} applies to its arguments before adding them: negating a {{domxref("CSSMathSum")}}, {{domxref("CSSMathProduct")}}, {{domxref("CSSMathMin")}}, {{domxref("CSSMathMax")}}, {{domxref("CSSMathClamp")}}, or {{domxref("CSSMathInvert")}} wraps it in a `CSSMathNegate`.
Negating a plain {{domxref("CSSUnitValue")}} (a length, percentage, etc.) instead flips the sign of its `value` directly, so subtracting simple values doesn't normally produce a `CSSMathNegate`.

A `CSSMathNegate` can also appear when reading a computed value: for example, {{domxref("StylePropertyMapReadOnly.get", "get()")}} on a property set with a {{cssxref("calc", "calc()")}} expression that subtracts a value returns a {{domxref("CSSMathSum")}} whose operands may include a `CSSMathNegate`.
You can identify it by checking the {{domxref("CSSMathValue.operator", "operator")}} property for the string `"negate"`.

`CSSMathNegate` serializes using CSS {{CSSXref("calc", "calc()")}} syntax, as `calc(-<value>)`.

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
console.log(negatedNumber.toString()); // "calc(-4)"
```

### Subtracting a composite value

{{domxref("CSSNumericValue.sub", "sub()")}} produces a `CSSMathNegate` when the value being subtracted is itself a composite value, such as a `CSSMathSum` (rather than a plain {{domxref("CSSUnitValue")}}).

This is demonstrated by the following code.
The `px` and `percent` can't be combined into a single value without knowing the containing block size, so the value of `composite` is represented as a `CSSMathSum`.
When this value is subtracted, the value of `composite` is wrapped in a `CSSMathNegate`.

```js
const composite = CSS.px(10).add(CSS.percent(5)); // CSSMathSum: calc(10px + 5%)
const result = CSS.px(100).sub(composite);

console.log(result.constructor.name); // "CSSMathSum"
console.log(result.values[1].constructor.name); // "CSSMathNegate"
console.log(result.values[1].value); // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(result.toString()); // "calc(100px - (10px + 5%))"
```

### Parsing `calc()`

A `CSSMathNegate` can also be created when using {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}} to parse a {{cssxref("calc", "calc()")}} expression that can't be resolved to a single value.

For example, in the following code {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}} parses a value for the `width` property that subtracts a length from a percentage (which can't be combined until layout).
The result is a {{domxref("CSSMathSum")}} where the first value in the array is a `CSSUnitValue`, and the second value is a `CSSMathNegate` object representing negation of the second operand passed to the `calc()` function.

```js
const width = CSSStyleValue.parse("width", "calc(50% - 10px)");

console.log(width.constructor.name); // "CSSMathSum"
console.log(width.values[0]); // CSSUnitValue {value: 50, unit: 'percent'}
console.log(width.values[1]); // CSSMathNegate {value: CSSUnitValue, operator: 'negate'}
console.log(width.values[1].value); // CSSUnitValue {value: 10, unit: "px"}

console.log(width.toString()); // "calc(50% - 10px)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.sub", "sub()")}}
- {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}}
- {{domxref("CSSMathInvert")}}
- {{domxref("CSSMathValue.operator")}}
