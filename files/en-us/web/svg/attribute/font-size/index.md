---
title: font-size
slug: Web/SVG/Attribute/font-size
page-type: svg-attribute
browser-compat: svg.attributes.presentation.font-size
---

{{SVGRef}}

The **`font-size`** attribute refers to the size of the font from {{Glossary("baseline/typography", "baseline")}} to baseline when multiple lines of text are set solid in a multiline layout environment.

> **Note:** As a presentation attribute, `font-size` can be used as a CSS property. See the {{cssxref("font-size", "CSS font-size")}} property for more information.

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
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-size="smaller">smaller</text>
  <text x="100" y="20" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>&#x3C;absolute-size></code> | <code>&#x3C;relative-size></code> |
        <code>&#x3C;length-percentage></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>medium</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the [CSS `font-size`](/en-US/docs/Web/CSS/font-size#values) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size", "CSS font-size")}}
