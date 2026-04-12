---
title: <feOffset>
slug: Web/SVG/Reference/Element/feOffset
page-type: svg-element
browser-compat: svg.elements.feOffset
sidebar: svgref
---

The **`<feOffset>`** [SVG](/en-US/docs/Web/SVG) filter primitive enables offsetting an input image relative to its current position. The input image as a whole is offset by the values specified in the {{SVGAttr("dx")}} and {{SVGAttr("dy")}} attributes.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("in")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}
- [Filter primitive attributes](/en-US/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM Interface

This element implements the {{domxref("SVGFEOffsetElement")}} interface.

## Example

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offset" width="180" height="180">
      <feOffset in="SourceGraphic" dx="60" dy="60" />
    </filter>
  </defs>

  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#offset)" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
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
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
