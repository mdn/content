---
title: lengthAdjust
slug: Web/SVG/Reference/Attribute/lengthAdjust
page-type: svg-attribute
browser-compat:
  - svg.elements.text.lengthAdjust
  - svg.elements.tspan.lengthAdjust
sidebar: svgref
---

The lengthAdjust attribute controls how the text is stretched into the length defined by the {{SVGAttr("textLength")}} attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <g font-face="sans-serif">
    <text x="0" y="20" textLength="300" lengthAdjust="spacing">
      Stretched using spacing only.
    </text>
    <text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs">
      Stretched using spacing and glyphs.
    </text>
    <text x="0" y="80" textLength="100" lengthAdjust="spacing">
      Shrunk using spacing only.
    </text>
    <text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs">
      Shrunk using spacing and glyphs.
    </text>
  </g>
</svg>
```

{{EmbedLiveSample("Example", "420", "150")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>spacing</code> | <code>spacingAndGlyphs</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>spacing</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
