---
title: CSSNumericArray
slug: Web/API/CSSNumericArray
page-type: web-api-interface
browser-compat: api.CSSNumericArray
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSNumericArray`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents an iterable of {{domxref("CSSNumericValue")}}-based objects.

An object of this type is used to represent the operands of a mathematical operation in the `values` property of {{domxref("CSSMathSum")}}, {{domxref("CSSMathProduct")}}, {{domxref("CSSMathMin")}}, and {{domxref("CSSMathMax")}}.

The items can be accessed by index (`array[0]`), and as an iterable it can be used with a {{jsxref("Statements/for...of", "for...of")}} loop or the spread syntax.

## Instance properties

- {{domxref("CSSNumericArray.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the object.

## Instance methods

- {{domxref("CSSNumericArray.entries()")}}
  - : Returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.
- {{domxref("CSSNumericArray.forEach()")}}
  - : Executes a provided function once for each item in the object.
- {{domxref("CSSNumericArray.keys()")}}
  - : Returns a new _array iterator_ that yields the index of each item in the object.
- {{domxref("CSSNumericArray.values()")}}
  - : Returns a new _array iterator_ that yields each item in the object.

## Examples

### Reading the terms of a `CSSMathSum`

The `values` property of a {{domxref("CSSMathSum")}} is a `CSSNumericArray` containing the terms of the sum.
This example creates a `CSSMathSum`, then reads its `values` via `length`, indexed access, and iteration.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));
const values = sum.values;

console.log(values.length); // 3
console.log(values[0]); // CSSUnitValue {value: 10, unit: "px"}

for (const value of values) {
  console.log(value.toString());
}
// "10px"
// "5em"
// "50%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathSum")}}
- {{domxref("CSSMathProduct")}}
- {{domxref("CSSMathMin")}}
- {{domxref("CSSMathMax")}}
- {{domxref("CSSNumericValue")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
