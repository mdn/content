---
title: <mroot>
slug: Web/MathML/Element/mroot
page-type: mathml-element
browser-compat: mathml.elements.mroot
---

{{MathMLRef}}

The **`<mroot>`** [MathML](/en-US/docs/Web/MathML) element is used to display roots with an explicit index. Two arguments are accepted, which leads to the syntax: `<mroot> base index </mroot>`.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <mroot>
    <mi>x</mi>
    <mn>3</mn>
  </mroot>
</math>
```

{{ EmbedLiveSample('mroot_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msqrt") }} (Square root without an index)
