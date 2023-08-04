---
title: font-style
slug: Web/SVG/Attribute/font-style
page-type: svg-attribute
browser-compat: svg.attributes.presentation.font-style
---

{{SVGRef}}

The **`font-style`** attribute specifies whether the text is to be rendered using a normal, italic, or oblique face.

> **Note:** As a presentation attribute, `font-style` can be used as a CSS property. See the {{cssxref("font-style", "CSS font-style")}} property for more information.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-style="normal">Normal font style</text>
  <text x="150" y="20" font-style="italic">Italic font style</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>normal</code> | <code>italic</code> | <code>oblique</code></td>
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

For a description of the values, please refer to the [CSS `font-style`](/en-US/docs/Web/CSS/font-style#values) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style", "CSS font-style")}}
