---
title: font-variant
slug: Web/SVG/Attribute/font-variant
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.font-variant
---
{{SVGRef}}

The **`font-variant`** attribute indicates whether the text is to be rendered using variations of the font's {{Glossary("glyph", "glyphs")}}.

> **Note:** As a presentation attribute, `font-variant` can be used as a CSS property. See the {{cssxref("font-variant", "CSS font-variant")}} property for more information.

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
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-variant="normal">Normal text</text>
  <text x="100" y="20" font-variant="small-caps">Small-caps text</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <p>
          <code>normal</code> | <code>none</code> | [
          <code>&#x3C;common-lig-values></code> ||
          <code>&#x3C;discretionary-lig-values></code> ||
          <code>&#x3C;historical-lig-values></code> ||
          <code>&#x3C;contextual-alt-values></code> ||
          <code>stylistic( &#x3C;feature-value-name> )</code> ||
          <code>historical-forms</code> ||
          <code>styleset( &#x3C;feature-value-name># )</code> ||
          <code>character-variant( &#x3C;feature-value-name># )</code> ||
          <code>swash( &#x3C;feature-value-name> )</code> ||
          <code>ornaments( &#x3C;feature-value-name> )</code> ||
          <code>annotation( &#x3C;feature-value-name> )</code> || [
          <code>small-caps</code> | <code>all-small-caps</code> |
          <code>petite-caps</code> | <code>all-petite-caps</code> |
          <code>unicase</code> | <code>titling-caps</code> ] ||
          <code>&#x3C;numeric-figure-values></code> ||
          <code>&#x3C;numeric-spacing-values></code> ||
          <code>&#x3C;numeric-fraction-values></code> || <code>ordinal</code> ||
          <code>slashed-zero</code> ||
          <code>&#x3C;east-asian-variant-values></code> ||
          <code>&#x3C;east-asian-width-values></code> || <code>ruby</code> ]
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the [CSS `font-variant`](/en-US/docs/Web/CSS/font-variant#values) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-variant", "CSS font-variant")}}
