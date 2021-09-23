---
title: surfaceScale
slug: Web/SVG/Attribute/surfaceScale
tags:
  - Filters
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`surfaceScale`** attribute represents the height of the surface for a light filter primitive.

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
    <feDiffuseLighting in="SourceGraphic" surfaceScale="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" surfaceScale="15">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## feSpecularLighting

For {{SVGElement("feSpecularLighting")}}, `surfaceScale` defines the height of the surface.

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

## feDiffuseLighting

For {{SVGElement("feDiffuseLighting")}}, `surfaceScale` defines the height of the surface.

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
        {{SpecName("Filters 1.0", "#element-attrdef-fediffuselighting-surfacescale", "surfaceScale for &lt;feDiffuseLighting&gt;")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#element-attrdef-fespecularlighting-surfacescale", "surfaceScale for &lt;feSpecularLighting&gt;")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feDiffuseLightingSurfaceScaleAttribute", "surfaceScale for &lt;feDiffuseLighting&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feDiffuseLighting></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feSpecularLightingSurfaceScaleAttribute", "surfaceScale for &lt;feSpecularLighting&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feSpecularLighting></code></td>
    </tr>
  </tbody>
</table>

## See also

*   [Description of Phong reflection model on Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
