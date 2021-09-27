---
title: zoomAndPan
slug: Web/SVG/Attribute/zoomAndPan
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.svg.zoomAndPan
---
{{SVGRef}}{{Deprecated_Header}}

The **`zoomAndPan`** attribute specifies whether the SVG document can be magnified and panned.

Magnification in this context means the effect of a supplemental scale and translate transformation on the outermost SVG document fragment.

Panning represents a translation (i.e., a shift) transformation on an SVG document fragment in response to a user interface action.

You can use this attribute with the following SVG elements:

*   {{SVGElement("svg")}}
*   {{SVGElement("view")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" zoomAndPan="disable">
  <filter id="diffuseLighting" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" zoomAndPan="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#diffuseLighting);" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>disable</code> | <code>magnify</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>magnify</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
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
        {{SpecName("SVG1.1", "interact.html#ZoomAndPanAttribute", "zoomAndPan")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
