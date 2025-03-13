---
title: opacity
slug: Web/SVG/Attribute/opacity
page-type: svg-attribute
browser-compat: svg.global_attributes.opacity
---

{{SVGRef}}

The **`opacity`** attribute specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.

> [!NOTE]
> As a presentation attribute, `opacity` also has a CSS property counterpart: {{cssxref("opacity")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("marker")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

Unlike {{SVGAttr("fill-opacity")}}, {{SVGAttr("stroke-opacity")}}, and {{SVGAttr("stop-opacity")}}, which are applied to individual operations and are rendered _when_ the element is rendered, `opacity` is applied to whole objects or groups, and is more like a post-processing operation on the rendered image of the object or group. Therefore, when you have both `opacity` and the other opacity attributes in the same area, they will be overlaid on top of each other and cause the opacity to be multiplied.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
      <stop offset="0%" style="stop-color:skyblue;" />
      <stop offset="100%" style="stop-color:seagreen;" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
  <circle cx="50" cy="50" r="40" fill="black" />
  <circle cx="150" cy="50" r="40" fill="black" opacity="0.3" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : The uniform opacity setting to be applied across an entire object, as a {{cssxref("number")}}. Any values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) will be clamped to this range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("opacity")}} property
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}
