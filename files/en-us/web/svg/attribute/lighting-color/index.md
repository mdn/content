---
title: lighting-color
slug: Web/SVG/Attribute/lighting-color
tags:
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.attributes.presentation.lighting-color
---
{{SVGRef}}

The **`lighting-color`** attribute defines the color of the light source for lighting filter primitives.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feDiffuseLighting")}}
*   {{SVGElement("feSpecularLighting")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" lighting-color="white">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" lighting-color="blue">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
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
      <th scope="row">Default value</th>
      <td><code>white</code></td>
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
        {{SpecName("Filters 1.0", "#LightingColorProperty", "lighting-color")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>Removed the <code>&#x3C;icccolor></code> value.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#LightingColorProperty", "lighting-color")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [Description of Phong reflection model on Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
