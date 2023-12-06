---
title: paint-order
slug: Web/SVG/Attribute/paint-order
page-type: svg-attribute
browser-compat: svg.attributes.paint-order
---

{{SVGRef}}

The **`paint-order`** attribute specifies the order that the fill, stroke, and markers of a given shape or text element are painted.

> **Note:** As a presentation attribute, `paint-order` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th>Value</th>
      <td>
        <code>normal</code> | [ <code>fill</code> || <code>stroke</code> ||
        <code>markers</code> ]
      </td>
    </tr>
    <tr>
      <th>Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th>Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- normal
  - : This value indicates that the fill will be painted first, then the stroke, and finally the markers.
- \[ fill || stroke || markers ]
  - : The order of these three keywords indicates the order in which the painting happens, from left to right. If any of the three painting components is omitted, they will be painted in their default order after the specified components. For example, using `stroke` is equivalent to `stroke fill markers`.

## Example

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#888" />
    <stop stop-color="#ccc" offset="1" />
  </linearGradient>
  <rect width="400" height="200" fill="url(#g)" />
  <g
    fill="crimson"
    stroke="white"
    stroke-width="6"
    stroke-linejoin="round"
    text-anchor="middle"
    font-family="sans-serif"
    font-size="50px"
    font-weight="bold">
    <text x="200" y="75">stroke over</text>
    <text x="200" y="150" paint-order="stroke" id="stroke-under">
      stroke under
    </text>
  </g>
</svg>
```

The example would be rendered as follows:

![An image showing how the paint-order example looks in a UA that supports the paint-order property.](paint-order-2.png)

The stroke under effect could be achieved via the following CSS property:

```css
#stroke-under {
  paint-order: stroke;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
