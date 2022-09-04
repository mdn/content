---
title: <math>
slug: Web/MathML/Element/math
tags:
  - MathML
  - MathML Reference
  - MathML:Element
browser-compat: mathml.elements.math
---
{{MathMLRef}}

The `<math>` element is the top-level MathML element, used to write a single mathematical formula. It can be placed in HTML content where [flow content](/en-US/docs/Web/Guide/HTML/Content_categories#flow_content) is permitted.

> **Note:** See the [Authoring MathML page](/en-US/docs/Web/MathML/Authoring#using_mathml) for tips to properly integrate MathML formulas in your web pages and the [Examples](/en-US/docs/Web/MathML/Examples) page for more demos.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attribute:

- `display`

  - : This enumerated attribute specifies how the enclosed MathML markup should be rendered. It can have one of the following values:

    - `block`, which means that this element will be displayed in its own block outside the current span of text and with [`math-style`](/en-US/docs/Web/CSS/math-style) set to `normal`.
    - `inline`, which means that this element will be displayed inside the current span of text and with [`math-style`](/en-US/docs/Web/CSS/math-style) set to `compact`.

    If not present, its default value is `inline`.

## Examples

This example contains two MathML formula. The first one is rendered in its own centered block, taking as much space as needed. The second one is rendered inside the paragraph of text, with reduced size and spacing in order to minimize its height.

```html
<p>The infinite sum
  <math display="block">
   <mrow>
     <munderover>
       <mo>∑</mo>
       <mrow>
         <mi>n</mi>
         <mo>=</mo>
         <mn>1</mn>
       </mrow>
       <mrow>
         <mo>+</mo>
         <mn>∞</mn>
       </mrow>
     </munderover>
     <mfrac>
       <mn>1</mn>
       <msup>
         <mi>n</mi>
         <mn>2</mn>
       </msup>
     </mfrac>
   </mrow>
  </math>
  is equal to the real number
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac>
  </math>.</p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML top-level element: {{ HTMLElement("html") }}
- SVG top-level element: {{ SVGElement("svg") }}
