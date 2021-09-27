---
title: azimuth
slug: Web/SVG/Attribute/azimuth
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feDistantLight.azimuth
---
{{SVGRef}}

The **`azimuth`** attribute specifies the direction angle for the light source on the XY plane (clockwise), in degrees from the x axis.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feDistantLight")}}

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
      <feDistantLight azimuth="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight azimuth="240" />
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
        {{SpecName("Filters 1.0", "#element-attrdef-fedistantlight-azimuth", "azimuth")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feDistantLightAzimuthAttribute", "azimuth")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
