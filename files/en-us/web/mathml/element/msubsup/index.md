---
title: <msubsup>
slug: Web/MathML/Element/msubsup
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.msubsup
---

{{MathMLRef}}

The **`<msubsup>`** [MathML](/en-US/docs/Web/MathML) element is used to attach both a subscript and a superscript, together, to an expression.

It uses the following syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <msubsup>
    <mo>&#x222B;<!--Integral --></mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
</math>
```

{{ EmbedLiveSample('msubsup_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
