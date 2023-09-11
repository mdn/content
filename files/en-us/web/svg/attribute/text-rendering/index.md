---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
page-type: svg-attribute
browser-compat: svg.attributes.presentation.text-rendering
---

{{SVGRef}}

The **`text-rendering`** attribute provides hints to the renderer about what tradeoffs to make when rendering text.

> **Note:** As a presentation attribute, `text-rendering` can be used as a CSS property. See the {{cssxref("text-rendering", "CSS text-rendering")}} property for more information.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
  <text y="15" text-rendering="geometricPrecision">Geometric precision</text>
  <text y="35" text-rendering="optimizeLegibility">Optimized legibility</text>
</svg>
```

{{EmbedLiveSample("Example", "420", "140")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeLegibility</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : This value indicates that the user agent shall make appropriate tradeoffs to balance speed, legibility and geometric precision, but with legibility given more importance than speed and geometric precision.
- `optimizeSpeed`
  - : This value indicates that the user agent shall emphasize rendering speed over legibility and geometric precision. This option will sometimes cause some user agents to turn off text anti-aliasing.
- `optimizeLegibility`
  - : This value indicates that the user agent shall emphasize legibility over rendering speed and geometric precision. The user agent will often choose whether to apply anti-aliasing techniques, built-in font hinting or both to produce the most legible text.
- `geometricPrecision`
  - : This value indicates that the user agent shall emphasize geometric precision over legibility and rendering speed. This option will usually cause the user agent to suspend the use of hinting so that {{Glossary("glyph")}} outlines are drawn with comparable geometric precision to the rendering of path data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-rendering", "CSS text-rendering")}}
