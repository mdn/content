---
title: <munder>
slug: Web/MathML/Element/munder
page-type: mathml-element
browser-compat: mathml.elements.munder
---

{{MathMLRef}}

The **`<munder>`** [MathML](/en-US/docs/Web/MathML) element is used to attach an accent or a limit under an expression. It uses the following syntax: `<munder> base underscript </munder>`

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attribute:

- `accentunder`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Values#mathml-specific_types) indicating whether the under script should be treated as an accent (i.e. drawn bigger and closer to the base expression).

## Examples

```html
<math display="block">
  <munder accentunder="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DF;<!--BOTTOM CURLY BRACKET--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('munder_example', 700, 200, "", "") }}

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

## See also

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
