---
title: CSSMathSum
slug: Web/API/CSSMathSum
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSMathSum
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSMathSum
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSMathSum`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.

A CSSMathSum is the object type returned when the [`StylePropertyMapReadOnly.get()`](/en-US/docs/Web/API/StylePropertyMapReadOnly/get) method is used on a CSS property whose value is created with a [`calc()`](/en-US/docs/Web/CSS/calc) function.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathSum.CSSMathSum", "CSSMathSum()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathSum` object.

## Properties

- {{domxref('CSSMathSum.values')}} {{Experimental_Inline}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

### Event handlers

No

## Methods

None.

## Examples

We create an element with a [`width`](/en-US/docs/Web/CSS/width) determined using a [`calc()`](/en-US/docs/Web/CSS/calc) function, then {{DOMxRef("console.log()")}} the `operator` and `values`, and dig into the values a bit.

```html
<div>has width</div>
```

We assign a `width`

```css
div {
  width: calc(30% - 20px);
}
```

We add the JavaScript

```js
const styleMap = document.querySelector('div').computedStyleMap();

console.log(styleMap.get('width'));                  // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(styleMap.get('width').operator);         // 'sum'
console.log(styleMap.get('width').values);           // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(styleMap.get('width').values[0]);        // CSSUnitValue {value: 30, unit: "percent"}
console.log(styleMap.get('width').values[0].value);  // 30
console.log(styleMap.get('width').values[0].unit);   // 'percent'
console.log(styleMap.get('width').values[1]);        // CSSUnitValue {value: -20, unit: "px"}
console.log(styleMap.get('width').values[1].value);  //  -20
console.log(styleMap.get('width').values[1].unit);   // 'px'
```

{{EmbedLiveSample("Examples", 120, 300)}}

The specification is still evolving. In the future we may write the last three lines as:

```js
console.log(styleMap.get('width').values[1]);            // CSSMathNegate {value: CSSUnitValue, operator: "negate"}
console.log(styleMap.get('width').values[1].value);      // CSSUnitValue {value: 20, unit: "px"}
console.log(styleMap.get('width').values[1].value.unit); // 'px'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
