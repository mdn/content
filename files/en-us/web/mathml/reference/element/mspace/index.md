---
title: <mspace>
slug: Web/MathML/Reference/Element/mspace
page-type: mathml-element
browser-compat: mathml.elements.mspace
sidebar: mathmlref
---

The **`<mspace>`** [MathML](/en-US/docs/Web/MathML) element is used to display a blank space, whose size is set by its attributes.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes) as well as the following attributes:

- `depth`
  - : A {{cssxref("length-percentage")}} indicating the desired depth (below the baseline) of the space.
- `height`
  - : A {{cssxref("length-percentage")}} indicating the desired height (above the baseline) of the space.
- `width`
  - : A {{cssxref("length-percentage")}} indicating the desired width of the space.

> [!NOTE]
> For the `depth`, `height`, `width` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

## Examples

```html
<math display="block">
  <mn>1</mn>
  <mspace depth="40px" height="20px" width="100px" />
  <mn>2</mn>
</math>
```

```css
mspace {
  background: lightblue;
}
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

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
