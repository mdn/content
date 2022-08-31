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

Sample rendering: ![integral-0-infinity](munderover.png)

Rendering in your browser: <math><munderover><mo>∫</mo><mn>0</mn><mi>∞</mi></munderover></math>

```html
<math displaystyle="true">

  <munderover >
    <mo>&#x222B;<!--INTEGRAL--></mo>
    <mn>0</mn>
    <mi>&#x221E;<!--INFINITY--></mi>
  </munderover>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)
