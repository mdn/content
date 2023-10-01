---
title: stitchTiles
slug: Web/SVG/Attribute/stitchTiles
page-type: svg-attribute
browser-compat: svg.elements.feTurbulence.stitchTiles
---

{{SVGRef}}

The **`stitchTiles`** attribute defines how the Perlin Noise tiles behave at the border.

You can use this attribute with the following SVG elements:

- {{SVGElement("feTurbulence")}}

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
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="noStitch" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="stitch" />
  </filter>

  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(100px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(0, 100px);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(100px, 100px);" />

  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(220px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(320px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(220px, 100px);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(320px, 100px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>noStitch</code> | <code>stitch</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>noStitch</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `noStitch`
  - : This value indicates that no attempt is made to achieve smooth transitions at the border of tiles which contain a turbulence function. Sometimes the result will show clear discontinuities at the tile borders.
- `stitch`
  - : This value indicates that the user agent will automatically adjust the x and y values of the base frequency such that the {{SVGElement("feTurbulence")}} node's width and height (i.e., the width and height of the current subregion) contain an integral number of the tile width and height for the first octave.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
