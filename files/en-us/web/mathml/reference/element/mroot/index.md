---
title: <mroot>
slug: Web/MathML/Reference/Element/mroot
page-type: mathml-element
browser-compat: mathml.elements.mroot
sidebar: mathmlref
---

The **`<mroot>`** [MathML](/en-US/docs/Web/MathML) element is used to display roots with an explicit index. Two arguments are accepted, which leads to the syntax: `<mroot> base index </mroot>`.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes).

## Examples

```html
<math display="block">
  <mroot>
    <mi>x</mi>
    <mn>3</mn>
  </mroot>
</math>
```

{{EmbedLiveSample('Examples')}}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles">Implicit ARIA role</a>
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

## See also

- {{ MathMLElement("msqrt") }} (Square root without an index)
