---
title: zoomAndPan
slug: Web/SVG/Attribute/zoomAndPan
page-type: svg-attribute
status:
  - deprecated
browser-compat:
  - svg.elements.svg.zoomAndPan
  - svg.elements.view.zoomAndPan
---

{{SVGRef}}{{Deprecated_Header}}

The **`zoomAndPan`** attribute specifies whether the SVG document can be magnified and panned.

Magnification in this context means the effect of a supplemental scale and translate transformation on the outermost SVG document fragment.

Panning represents a translation (i.e., a shift) transformation on an SVG document fragment in response to a user interface action.

You can use this attribute with the following SVG elements:

- {{SVGElement("svg")}}
- {{SVGElement("view")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  zoomAndPan="disable">
  <filter id="diffuseLighting" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" zoomAndPan="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting);" />
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

{{Specifications}}

## Browser compatibility

{{Compat}}
