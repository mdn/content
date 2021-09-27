---
title: flood-color
slug: Web/SVG/Attribute/flood-color
tags:
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.attributes.presentation.flood-color
---
{{SVGRef}}

The **`flood-color`** attribute indicates what color to use to flood the current filter primitive subregion.

> **Note:** As a presentation attribute, `flood-color` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feFlood")}}
*   {{SVGElement("feDropShadow")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="skyblue" x="0" y="0" width="200" height="200"/>
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" x="0" y="0" width="200" height="200"/>
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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#FloodColorProperty", "flood-color")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>
        Removed the &#x3C;icccolor> value and aligned the value to the CSS
        {{cssxref("color")}} value.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#FloodColorProperty", "flood-color")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("flood-opacity")}}
