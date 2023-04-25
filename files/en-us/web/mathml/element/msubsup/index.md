---
title: <msubsup>
slug: Web/MathML/Element/msubsup
page-type: mathml-element
browser-compat: mathml.elements.msubsup
---

{{MathMLRef}}

The **`<msubsup>`** [MathML](/en-US/docs/Web/MathML) element is used to attach both a subscript and a superscript, together, to an expression.

It uses the following syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following deprecated attributes:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum amount to shift the baseline of the subscript down.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum amount to shift the baseline of the superscript up.

> **Note:** For the `subscriptshift` and `superscriptshift` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Attribute/Values#legacy_mathml_lengths).

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
