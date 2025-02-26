---
title: <mpadded>
slug: Web/MathML/Element/mpadded
page-type: mathml-element
browser-compat: mathml.elements.mpadded
---

{{MathMLRef}}

The **`<mpadded>`** [MathML](/en-US/docs/Web/MathML) element is used to add extra padding and to set the general adjustment of position and size of enclosed contents.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `depth`
  - : A {{cssxref("length-percentage")}} indicating the desired depth (below the baseline) of the `<mpadded>` element.
- `height`
  - : A {{cssxref("length-percentage")}} indicating the desired height (above the baseline) of the `<mpadded>` element.
- `lspace`
  - : A {{cssxref("length-percentage")}} indicating the horizontal location of the positioning point of the child content with respect to the positioning point of the `<mpadded>` element.
- `voffset`
  - : A {{cssxref("length-percentage")}} indicating the vertical location of the positioning point of the child content with respect to the positioning point of the `<mpadded>` element.
- `width`
  - : A {{cssxref("length-percentage")}} indicating the desired horizontal length of the `<mpadded>` element.

### Legacy syntax

For the `depth`, `height`, `lspace`, `voffset` and `width` attributes, some browsers may instead accept a more complex syntax:

1. An optional `+` or `-` sign as a prefix, specifying an increment or decrement to the corresponding dimension (if absent, the corresponding dimension is set directly to specified value).
2. Followed by an [`<unsigned-number>`](/en-US/docs/Web/MathML/Values#mathml-specific_types) (let's call it α below).
3. Optionally followed by a value (if absent, the specified value is interpreted as "100 times α percent").
   - A [unit](/en-US/docs/Web/MathML/Values#units). The specified value is interpreted the same as [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).
   - A [namedspace constant](/en-US/docs/Web/MathML/Values#constants). The specified value is interpreted as α times the constant.
   - A pseudo-unit `width`, `height` or `depth`. The specified value is interpreted as α times the corresponding dimension of the content.
   - A percent sign followed by a pseudo-unit `width`, `height` or `depth`. The specified value is interpreted as α% the corresponding dimension of the content.

## Examples

### Dimensions and offsets

```html
<math display="block">
  <mpadded
    width="400px"
    height="5em"
    depth="4em"
    lspace="300px"
    voffset="-2em"
    style="background: lightblue">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mpadded>
</math>
```

{{ EmbedLiveSample('dimensions_and_offsets_example', 700, 200, "", "") }}

### Legacy syntax

```html
<math display="block">
  <!-- increment by a length -->
  <mpadded width="+20px" style="background: lightblue">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- set to a pseudo-unit -->
  <mpadded width="2width" style="background: lightgreen">
    <mtext>2width</mtext>
  </mpadded>

  <!-- increment by a percent of a pseudo-unit -->
  <mpadded width="+400%height" style="background: lightyellow">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- decrement to a multiple of a namedspace -->
  <mpadded width="-1thickmathspace" style="background: pink">
    <mtext>-.5thickmathspace</mtext>
  </mpadded>
</math>
```

{{ EmbedLiveSample('legacy_syntax_example', 700, 200, "", "") }}

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

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
