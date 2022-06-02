---
title: z
slug: Web/SVG/Attribute/z
tags:
  - Filters
  - SVG
  - SVG Attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fepointlight-z
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fespotlight-z
---
{{SVGRef}}

The **`z`** attribute defines the location along the z-axis for a light source in the coordinate system established by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element, assuming that, in the initial coordinate system, the positive z-axis comes out towards the person viewing the content and assuming that one unit along the z-axis equals one unit in x and y.

You can use this attribute with the following SVG elements:

- {{SVGElement("fePointLight")}}
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
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="60" y="60" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="60" y="60" z="50" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## fePointLight

For {{SVGElement("fePointLight")}}, `z` defines the location along the z-axis for the light source in the coordinate system established by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

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

For {{SVGElement("feSpotLight")}}, `z` defines the location along the z-axis for the light source in the coordinate system established by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

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
