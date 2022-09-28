---
title: <munderover>
slug: Web/MathML/Element/munderover
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.munderover
---

{{MathMLRef}}

The MathML `<munderover>` element is used to attach accents or limits both under and over an expression.

It uses the following syntax: `<munderover> base underscript overscript </munderover>`

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `accent`
  - : If `true`, the overscript is an _accent_, which is drawn closer to the base expression.
    If `false` (default value), the overscript is a _limit_ over the base expression.
- `accentunder`
  - : If `true`, the underscript is an _accent_, which is drawn closer to the base expression.
    If `false` (default value), the underscript is a _limit_ under the base expression.

## Examples

```html hidden
 <link
   rel="stylesheet"
   href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css"
  />
```

```html
<math display="block">
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
</math>
```

{{ EmbedLiveSample('munderover_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)
