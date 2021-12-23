---
title: specularConstant
slug: Web/SVG/Attribute/specularConstant
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feSpecularLighting.specularConstant
---
{{SVGRef}}

The **`specularConstant`** attribute controls the ratio of reflection of the specular lighting. It represents the k<sub>s</sub> value in [the Phong lighting model](https://en.wikipedia.org/wiki/Phong_reflection_model). The bigger the value the stronger the reflection.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feSpecularLighting")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="specularLighting1" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularConstant="1.2">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>
  <filter id="specularLighting2" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularConstant="0.8">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#specularLighting1);" />
  <rect x="0" y="0" width="200" height="200"
      style="filter: url(#specularLighting2); transform: translateX(220px);" />
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
      <td><code>1</code></td>
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
        {{SpecName("Filters 1.0", "#element-attrdef-fespecularlighting-specularconstant", "specularConstant")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feSpecularLightingSpecularConstantAttribute", "specularConstant")}}
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
