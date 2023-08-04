---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
page-type: svg-attribute
browser-compat: svg.attributes.presentation.shape-rendering
---

{{SVGRef}}

The **`shape-rendering`** attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.

> **Note:** As a presentation attribute, `shape-rendering` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}

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
  <circle cx="100" cy="100" r="100" shape-rendering="geometricPrecision" />
  <circle cx="320" cy="100" r="100" shape-rendering="crispEdges" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>crispEdges</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : This value indicates that the user agent shall make appropriate tradeoffs to balance speed, crisp edges and geometric precision, but with geometric precision given more importance than speed and crisp edges.
- `optimizeSpeed`
  - : This value indicates that the user agent shall emphasize rendering speed over geometric precision and crisp edges. This option will sometimes cause the user agent to turn off shape anti-aliasing.
- `crispEdges`
  - : This value indicates that the user agent shall attempt to emphasize the contrast between clean edges of artwork over rendering speed and geometric precision. To achieve crisp edges, the user agent might turn off anti-aliasing for all lines and curves or possibly just for straight lines which are close to vertical or horizontal. Also, the user agent might adjust line positions and line widths to align edges with device pixels.
- `geometricPrecision`
  - : Indicates that the user agent shall emphasize geometric precision over speed and crisp edges.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
