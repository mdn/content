---
title: <msub>
slug: Web/MathML/Reference/Element/msub
page-type: mathml-element
browser-compat: mathml.elements.msub
sidebar: mathmlref
---

The **`<msub>`** [MathML](/en-US/docs/Web/MathML) element is used to attach a subscript to an expression.

It uses the following syntax: `<msub> base subscript </msub>`.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes) as well as the following deprecated attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the subscript down.

> [!NOTE]
> For the `subscriptshift` attribute, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

## Examples

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
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

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
