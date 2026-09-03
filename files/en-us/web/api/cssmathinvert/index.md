---
title: CSSMathInvert
slug: Web/API/CSSMathInvert
page-type: web-api-interface
browser-compat: api.CSSMathInvert
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathInvert`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the inverse (reciprocal) of a {{domxref('CSSNumericValue')}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathInvert.CSSMathInvert", "CSSMathInvert()")}}
  - : Creates a new `CSSMathInvert` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref('CSSMathInvert.value')}} {{ReadOnlyInline}}
  - : Returns a {{domxref('CSSNumericValue')}} object containing the value being inverted.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

When you divide one {{domxref('CSSNumericValue')}} by another using {{domxref('CSSNumericValue.div', 'div()')}}, if the divisor is a plain number, it can immediately be scaled into a value of the original type.

If the divisor is a different type, the result can't be resolved to a single object.
In this case, the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the divisor as a `CSSMathInvert`.

Generally you won't construct a `CSSMathInvert` directly.
It's produced when `div()` is called with a divisor that isn't a plain number: the result is a {{domxref('CSSMathProduct')}}, and `CSSMathInvert` is the operand holding that divisor — found by walking the product's operands, or by checking {{domxref('CSSMathValue.operator')}} for the string `"invert"`.

`CSSMathInvert` serializes using CSS {{CSSXref('calc','calc()')}} syntax, as `calc(1 / <value>)`.

## Examples

### Constructing a CSSMathInvert with a non-number divisor

This example shows how you can use {{domxref('CSSNumericValue.div', 'div()')}} with a divisor that isn't a plain number to get a {{domxref('CSSMathProduct')}} that has a `CSSMathInvert` as one of its operands.
The value and serialization of that operand are also logged.

```js
const product = CSS.px(200).div(CSS.percent(4));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.values[1].constructor.name); // "CSSMathInvert"
console.log(product.values[1].value); // CSSUnitValue {value: 4, unit: "percent"}
console.log(product.toString()); // "calc(200px / 4%)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.div", "div()")}}
- {{domxref("CSSMathNegate")}}
- {{domxref("CSSMathValue.operator")}}
