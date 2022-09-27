---
title: <mtext>
slug: Web/MathML/Element/mtext
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mtext
---

{{MathMLRef}}

The MathML \<mtext> element is used to render arbitrary text with _no_ notational meaning, such as comments or annotations.

To display text _with_ notational meaning, use {{ MathMLElement("mi") }} and {{ MathMLElement("mo") }} instead.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <mtext>Theorem of Pythagoras</mtext>
</math>

<math display="block">
  <mtext>/* comment here */</mtext>
</math>
```

{{ EmbedLiveSample('mtext_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
