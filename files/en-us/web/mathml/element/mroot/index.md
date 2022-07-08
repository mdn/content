---
title: <mroot>
slug: Web/MathML/Element/mroot
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mroot
---
{{MathMLRef}}

The MathML `<mroot>` element is used to display roots with an explicit index. Two arguments are accepted, which leads to the syntax: `<mroot> base index </mroot>`.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

Sample Rendering: ![x](mroot.png)

Rendering in your browser: <math><mroot><mi>x</mi> <mn>3</mn></mroot></math>

```html
<math>

 <mroot>
    <mi>x</mi>
    <mn>3</mn>
 </mroot>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msqrt") }} (Square root without an index)
