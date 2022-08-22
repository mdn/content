---
title: CSSMathValue.operator
slug: Web/API/CSSMathValue/operator
page-type: web-api-instance-property
tags:
  - API
  - CSS Typed Object Model API
  - CSSMathValue
  - Experimental
  - Houdini
  - Operator
  - Property
  - Reference
browser-compat: api.CSSMathValue.operator
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSMathValue.operator`** read-only
property of the {{domxref("CSSMathValue")}} interface indicates the operator that the
current subtype represents. For example, if the current `CSSMathValue`
subtype is `CSSMathSum`, this property will return the string
`"sum"`.

## Value

A {{jsxref('String')}}.

| Interface                         | Value       |
|-----------------------------------| ----------- |
| {{domxref('CSSMathSum')}}         | `"sum"`     |
| {{domxref('CSSMathProduct')}}     | `"product"` |
| {{domxref('CSSMathMin')}}         | `"min"`     |
| {{domxref('CSSMathMax')}}         | `"max"`     |
| {{domxref('CSSMathClamp')}}     | `"clamp"`   |
| {{domxref('CSSMathNegate')}}      | `"negate"`  |
| {{domxref('CSSMathInvert')}}      | `"invert"`  |

## Examples

We create an element with a [`width`](/en-US/docs/Web/CSS/width)
determined using a [`calc()`](/en-US/docs/Web/CSS/calc) function,
then {{DOMxRef("console.log()")}} the
`operator`.

```html
<div>My width has a <code>calc()</code> function</div>
```

We assign a `width` with a calculation

```css
div {
  width: calc(50% - 0.5vw);
}
```

We add the JavaScript

```js
const styleMap = document.querySelector('div').computedStyleMap();

console.log(styleMap.get('width'));                   // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(styleMap.get('width').values);            // CSSNumericArray {0: CSSUnitValue, 1: CSSMathNegate, length: 2}
console.log(styleMap.get('width').operator);          // 'sum'
console.log(styleMap.get('width').values[1].operator); // 'negate'
```

{{EmbedLiveSample("Examples", 120, 300)}}

The `CSSMathValue.operator` returns `sum` for the equation and
`negate` for the operator on the second value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
