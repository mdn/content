---
title: pointsAtZ
slug: Web/SVG/Attribute/pointsAtZ
page-type: svg-attribute
browser-compat: svg.elements.feSpotLight.pointsAtZ
---

{{SVGRef}}

The **`pointsAtZ`** attribute represents the y location in the coordinate system established by attribute {{SVGAttr("primitiveUnits")}} on the {{SVGElement("filter")}} element of the point at which the light source is pointing, assuming that, in the initial local coordinate system, the positive z-axis comes out towards the person viewing the content and assuming that one unit along the z-axis equals one unit in x and y.

You can use this attribute with the following SVG elements:

- {{SVGElement("feSpotLight")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="lighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="100" y="100" z="50" pointsAtZ="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="lighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="100" y="100" z="50" pointsAtZ="80" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#lighting1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#lighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
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
