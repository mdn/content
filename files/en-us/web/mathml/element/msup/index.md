---
title: <msup>
slug: Web/MathML/Element/msup
page-type: mathml-element
browser-compat: mathml.elements.msup
---

{{MathMLRef}}

The **`<msup>`** [MathML](/en-US/docs/Web/MathML) element is used to attach a superscript to an expression.

It uses the following syntax: `<msup> base superscript </msup>`.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following deprecated attribute:

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum amount to shift the baseline of the superscript up.

> **Note:** For the `superscriptshift` attribute, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

## Examples

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
