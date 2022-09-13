---
title: font-size-adjust
slug: Web/SVG/Attribute/font-size-adjust
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.font-size-adjust
---

{{SVGRef}}

The `font-size-adjust` attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font.

> **Note:** As a presentation attribute, `font-size-adjust` can be used as a CSS property. See the {{cssxref("font-size-adjust", "CSS font-size-adjust")}} property for more information.

You can use this attribute with the following SVG elements:

- {{SVGElement("altGlyph")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg width="600" height="80" viewBox="0 0 500 80"
    xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Times, serif" font-size="10px">
    This text uses the Times font (10px), which is hard to read in small sizes.
  </text>
  <text y="40" font-family="Verdana, sans-serif" font-size="10px">
    This text uses the Verdana font (10px), which has relatively large lowercase letters.
  </text>
  <text y="60" font-family="Times, serif" font-size="10px" font-size-adjust="0.58">
    This is the 10px Times, but now adjusted to the same aspect ratio as the Verdana.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "600", "100")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>none</code> | {{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `none`
  - : Choose the size of the font based only on the {{ Cssxref("font-size") }} property.
- {{cssxref("&lt;number&gt;")}}
  - : Choose the size of the font so that its lowercase letters (as determined by the x-height of the font) are the specified number times the {{ Cssxref("font-size") }}.

    The number specified should generally be the aspect ratio (ratio of x-height to font size) of the first choice {{ Cssxref("font-family") }}. This means that the first-choice font, when available, will appear the same size in browsers, whether or not they support `font-size-adjust`.

    `0` yields text of zero height (hidden text).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size-adjust","CSS font-size-adjust")}}
