---
title: CSSMathValue
slug: Web/API/CSSMathValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSMathValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSMathValue
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSMathValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} a base class for classes representing complex numeric values.

{{InheritanceDiagram}}

## Interfaces based on CSSMathValue

Below is a list of interfaces based on the CSSMathValue interface.

- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}

## Properties

- {{domxref('CSSMathValue.operator')}} {{Experimental_Inline}}
  - : Indicates the operator that the current subtype represents.

### Event handlers

No

## Methods

None.

## Examples

We create an element with a [`width`](/en-US/docs/Web/CSS/width) determined using a [`calc()`](/en-US/docs/Web/CSS/calc) function, then {{DOMxRef("console.log()")}} the `operator`.

```html
<div>has width</div>
```

We assign a `width` with a calculation

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
console.log(styleMap.get('width').values[1].value);  // -20
```

{{EmbedLiveSample("Examples", 120, 300)}}

The `CSSMathValue.operator` returns '`sum`' because `styleMap.get('width').values[1].value );` is `-20`: adding a negative number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
