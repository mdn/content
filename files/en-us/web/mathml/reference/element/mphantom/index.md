---
title: <mphantom>
slug: Web/MathML/Reference/Element/mphantom
page-type: mathml-element
browser-compat: mathml.elements.mphantom
sidebar: mathmlref
---

The **`<mphantom>`** [MathML](/en-US/docs/Web/MathML) element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes).

## Examples

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>+</mo>
    <mphantom>
      <mi>y</mi>
      <mo>+</mo>
    </mphantom>
    <mi>z</mi>
  </mrow>
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

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
