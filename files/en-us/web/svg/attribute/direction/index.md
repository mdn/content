---
title: direction
slug: Web/SVG/Attribute/direction
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.direction
---
{{SVGRef}}

The **`direction`** attribute specifies the inline-base direction of a {{SVGElement("text")}} or {{SVGElement("tspan")}} element. It defines the start and end points of a line of text as used by the {{SVGAttr("text-anchor")}} and {{SVGAttr("inline-size")}} properties. It also may affect the direction in which characters are positioned if the {{SVGAttr("unicode-bidi")}} property's value is either `embed` or `bidi-override`.

It applies only to glyphs oriented perpendicular to the inline-base direction, which includes the usual case of horizontally-oriented Latin or Arabic text and the case of narrow-cell Latin or Arabic characters rotated 90 degrees clockwise relative to a top-to-bottom inline-base direction.

In many cases, the bidirectional Unicode algorithm produces the desired result automatically, so this attribute doesn't need to be specified in those cases. For other cases, such as when using right-to-left languages, it may be sufficient to add the `direction` attribute to the outermost {{SVGElement("svg")}} element, and allow that direction to inherit to all text elements:

> **Note:** As a presentation attribute, `direction` can be used as a CSS property. See {{cssxref("direction", "CSS direction")}} for further information.

You can use this attribute with the following SVG elements:

- {{SVGElement("altGlyph")}}
- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 600 72" xmlns="http://www.w3.org/2000/svg"
    direction="rtl" lang="fa">
  <text x="300" y="50" text-anchor="middle"
      font-size="36">داستان SVG 1.1 SE طولا ني است.</text>
</svg>
```

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>ltr</code> | <code>rtl</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>ltr</code></td>
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

## See also

- {{cssxref("direction", "CSS direction")}}
