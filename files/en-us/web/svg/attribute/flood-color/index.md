---
title: flood-color
slug: Web/SVG/Attribute/flood-color
page-type: svg-attribute
browser-compat: svg.global_attributes.flood-color
---

{{SVGRef}}

The **`flood-color`** attribute indicates what color to use to flood the current filter primitive subregion.

> [!NOTE]
> As a presentation attribute, `flood-color` also has a CSS property counterpart: {{cssxref("flood-color")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("feFlood")}}
- {{SVGElement("feDropShadow")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="skyblue" x="0" y="0" width="200" height="200" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" x="0" y="0" width="200" height="200" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#flood1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#flood2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("color")}}</td>
    </tr>
    <tr>
      <th scope="row">Initial value</th>
      <td><code>black</code></td>
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

- CSS {{cssxref("flood-color")}} property
- {{SVGAttr("flood-opacity")}}
