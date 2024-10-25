---
title: <mtext>
slug: Web/MathML/Element/mtext
page-type: mathml-element
browser-compat: mathml.elements.mtext
---

{{MathMLRef}}

The **`<mtext>`** [MathML](/en-US/docs/Web/MathML) element is used to render arbitrary text with _no_ notational meaning, such as comments or annotations.

To display text _with_ notational meaning, use {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }} or {{ MathMLElement("ms") }} instead.

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

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
