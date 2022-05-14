---
title: specularExponent
slug: Web/SVG/Attribute/specularExponent
tags:
  - Filters
  - SVG
  - SVG Attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fespecularlighting-specularexponent
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fespotlight-specularexponent
---
{{SVGRef}}

The **`specularExponent`** attribute controls the focus for the light source. The bigger the value the brighter the light.

You can use this attribute with the following SVG elements:

- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularExponent="1">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularExponent="5">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting1);" />
  <rect x="0" y="0" width="200" height="200"
      style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## feSpecularLighting

For {{SVGElement("feSpecularLighting")}}, `specularExponent` defines the exponent value for the specular term.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feSpotLight

For {{SVGElement("feSpotLight")}}, `specularExponent` defines the exponent value controlling the focus for the light source.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## See also

- [Description of Phong reflection model on Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
