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
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the subscript down.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the superscript up.

> [!NOTE]
> For the `subscriptshift` and `superscriptshift` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

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

{{EmbedLiveSample('Examples')}}

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

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
