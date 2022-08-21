---
title: elevation
slug: Web/SVG/Attribute/elevation
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feDistantLight.elevation
---
{{SVGRef}}

The **`elevation`** attribute specifies the direction angle for the light source from the XY plane towards the Z-axis, in degrees. Note that the positive Z-axis points towards the viewer of the content.

You can use this attribute with the following SVG elements:

- {{SVGElement("feDistantLight")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="distantLight1">
    <feDiffuseLighting>
      <feDistantLight elevation="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight elevation="45" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#distantLight1);" />
  <circle cx="100" cy="100" r="80" style="filter: url(#distantLight2); transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>0</td>
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
