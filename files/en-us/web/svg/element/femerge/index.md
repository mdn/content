---
title: <feMerge>
slug: Web/SVG/Element/feMerge
page-type: svg-element
browser-compat: svg.elements.feMerge
---

{{SVGRef}}

The **`<feMerge>`** [SVG](/en-US/docs/Web/SVG) element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the {{ SVGAttr("result") }} attribute and then accessing it in a {{ SVGElement("feMergeNode") }} child.

Like other filter primitives, it handles color components in the `linearRGB` {{glossary("color space")}} by default. You can use {{svgattr("color-interpolation-filters")}} to use `sRGB` instead.

## Usage context

{{svginfo}}

## Example

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur stdDeviation="5" result="blur2" />
    <feMerge>
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    style="stroke: #000000; fill: green; filter: url(#feOffset);" />
</svg>
```

### Result

{{EmbedLiveSample('Example', 200, 200)}}

## DOM Interface

This element implements the {{domxref("SVGFEMergeElement")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}} attribute
- {{SVGAttr("flood-opacity")}} attribute
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
