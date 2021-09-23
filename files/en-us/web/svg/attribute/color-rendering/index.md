---
title: color-rendering
slug: Web/SVG/Attribute/color-rendering
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.color-rendering
---
{{deprecated_header}}

The **`color-rendering`** attribute provides a hint to the SVG user agent about how to optimize its color interpolation and compositing operations.

`color-rendering` takes precedence over {{SVGAttr("color-interpolation-filters")}}. For example, assume `color-rendering: optimizeSpeed` and `color-interpolation-filters: linearRGB`. In this case, the SVG user agent should perform color operations in a way that optimizes performance, which might mean sacrificing the color interpolation precision as specified by through the `linearRGB` value for `color-interpolation-filters`.

> **Note:** As a presentation attribute, `color-rendering` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("circle")}}
*   {{SVGElement("clipPath")}}
*   {{SVGElement("defs")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("foreignObject")}}
*   {{SVGElement("g")}}
*   {{SVGElement("glyph")}}
*   {{SVGElement("image")}}
*   {{SVGElement("line")}}
*   {{SVGElement("linearGradient")}}
*   {{SVGElement("marker")}}
*   {{SVGElement("mask")}}
*   {{SVGElement("missing-glyph")}}
*   {{SVGElement("path")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("polygon")}}
*   {{SVGElement("polyline")}}
*   {{SVGElement("radialGradient")}}
*   {{SVGElement("rect")}}
*   {{SVGElement("svg")}}
*   {{SVGElement("switch")}}
*   {{SVGElement("symbol")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tspan")}}
*   {{SVGElement("use")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient" cx="0.5" cy="0.5" r="0.5" fx="0.35" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="darkseagreen"/>
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient)" color-rendering="optimizeQuality" />
  <text x="45" y="50%" color-rendering="optimizeQuality">quality-optimized</text>

  <circle cx="100" cy="100" r="100" color-rendering="optimizeSpeed" fill="url(#gradient)"
      style="transform: translateX(240px);" />
  <text x="290" y="50%" color-rendering="optimizeSpeed">speed-optimized</text>
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeQuality</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `auto`
    *   : Indicates that the user agent shall make appropriate tradeoffs to balance speed and quality, but quality shall be given more importance than speed.
*   `optimizeSpeed`
    *   : Indicates that the user agent shall emphasize rendering speed over quality. For RGB display devices, this option will sometimes cause the user agent to perform color interpolation and compositing in the device RGB color space.
*   `optimizeQuality`
    *   : Indicates that the user agent shall emphasize quality over rendering speed.

## Browser compatibility

{{Compat}}
