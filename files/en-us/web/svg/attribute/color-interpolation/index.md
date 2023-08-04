---
title: color-interpolation
slug: Web/SVG/Attribute/color-interpolation
page-type: svg-attribute
browser-compat: svg.attributes.presentation.color-interpolation
---

{{SVGRef}}

The **`color-interpolation`** attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.

> **Note:** For filter effects, the {{SVGAttr("color-interpolation-filters")}} property controls which color space is used.

The color-interpolation property chooses between color operations occurring in the sRGB color space or in a (light energy linear) linearized RGB color space. Having chosen the appropriate color space, component-wise linear interpolation is used.

When a child element is blended into a background, the value of the `color-interpolation` property on the child determines the type of blending, not the value of the `color-interpolation` on the parent. For gradients which make use of the {{SVGAttr("href")}} or the deprecated {{SVGAttr("xlink:href")}} attribute to reference another gradient, the gradient uses the property's value from the gradient element which is directly referenced by the {{SVGAttr("fill")}} or {{SVGAttr("stroke")}} property. When animating colors, color interpolation is performed according to the value of the `color-interpolation` property on the element being animated.

> **Note:** As a presentation attribute, `color-interpolation` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("glyph")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("marker")}}
- {{SVGElement("mask")}}
- {{SVGElement("missing-glyph")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>sRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Indicates that the user agent can choose either the `sRGB` or `linearRGB` spaces for color interpolation. This option indicates that the author doesn't require that color interpolation occur in a particular color space.
- `sRGB`
  - : Indicates that color interpolation should occur in the sRGB color space.
- `linearRGB`
  - : Indicates that color interpolation should occur in the linearized RGB color space as described in [the sRGB specification](https://webstore.iec.ch/publication/6169).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [sRGB specification](https://webstore.iec.ch/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - popular demonstration of linearRGB
