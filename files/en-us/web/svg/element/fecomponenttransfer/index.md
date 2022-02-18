---
title: <feComponentTransfer>
slug: Web/SVG/Element/feComponentTransfer
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feComponentTransfer
---
{{SVGRef}}

The **`<feComponentTransfer>`** [SVG](/en-US/docs/Web/SVG) filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.

The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncG")}}, and {{SVGElement("feFuncA")}} return.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- [Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Specific attributes

- {{SVGAttr("in")}}

## DOM Interface

This element implements the {{domxref("SVGFEComponentTransferElement")}} interface.

## Example

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient id="rainbow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0" stop-color="#ff0000"></stop>
      <stop offset="0.2" stop-color="#ffff00"></stop>
      <stop offset="0.4" stop-color="#00ff00"></stop>
      <stop offset="0.6" stop-color="#00ffff"></stop>
      <stop offset="0.8" stop-color="#0000ff"></stop>
      <stop offset="1" stop-color="#800080"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="discrete" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>
  <g font-weight="bold">
    <text x="0" y="20">Default</text>
    <rect x="0" y="30" width="100%" height="20"></rect>
    <text x="0" y="70">Identity</text>
    <rect x="0" y="80" width="100%" height="20" style="filter:url(#identity)"></rect>
    <text x="0" y="120">Table lookup</text>
    <rect x="0" y="130" width="100%" height="20" style="filter:url(#table)"></rect>
    <text x="0" y="170">Discrete table lookup</text>
    <rect x="0" y="180" width="100%" height="20" style="filter:url(#discrete)"></rect>
    <text x="0" y="220">Linear function</text>
    <rect x="0" y="230" width="100%" height="20" style="filter:url(#linear)"></rect>
    <text x="0" y="270">Gamma function</text>
    <rect x="0" y="280" width="100%" height="20" style="filter:url(#gamma)"></rect>
  </g>
</svg>
```

### CSS

```css
rect {
  fill: url(#rainbow);
}
```

### Result

{{EmbedLiveSample("Example", "100%", 340)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
