---
title: <feTurbulence>
slug: Web/SVG/Element/feTurbulence
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feTurbulence
---
{{SVGRef}}

The **`<feTurbulence>`** [SVG](/en-US/docs/Web/SVG) filter primitive creates an image using the [Perlin turbulence function](https://en.wikipedia.org/wiki/Perlin_noise). It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.

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

- {{SVGAttr("baseFrequency")}}
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("seed")}}
- {{SVGAttr("stitchTiles")}}
- {{SVGAttr("type")}}

## DOM Interface

This element implements the {{domxref("SVGFETurbulenceElement")}} interface.

## Example

```html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
```

{{EmbedLiveSample('Example', 220, 220)}}

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
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
