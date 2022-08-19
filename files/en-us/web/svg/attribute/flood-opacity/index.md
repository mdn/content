---
title: flood-opacity
slug: Web/SVG/Attribute/flood-opacity
tags:
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.attributes.presentation.flood-opacity
---
{{SVGRef}}

The **`flood-opacity`** attribute indicates the opacity value to use across the current filter primitive subregion.

> **Note:** As a presentation attribute, `flood-opacity` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("feFlood")}} and {{SVGElement("feDropShadow")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" flood-opacity="1" x="0" y="0" width="200" height="200"/>
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" flood-opacity="0.3" x="0" y="0" width="200" height="200"/>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#flood1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#flood2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Initial value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : A number or percentage indicating the opacity value to use across the current filter primitive subregion.
    A number of `0` or a percentage of `0%` represents a fully transparent color, `1` or `100%` represents a fully opaque color.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("flood-color")}}
