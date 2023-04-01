---
title: <feDisplacementMap>
slug: Web/SVG/Element/feDisplacementMap
page-type: svg-element
browser-compat: svg.elements.feDisplacementMap
---

{{SVGRef}}

The **`<feDisplacementMap>`** [SVG](/en-US/docs/Web/SVG) filter primitive uses the pixel values from the image from {{SVGAttr("in2")}} to spatially displace the image from {{SVGAttr("in")}}.

The formula for the transformation looks like this:

`P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))`

where `P(x,y)` is the input image, {{SVGAttr("in")}}, and `P'(x,y)` is the destination. `XC(x,y)` and `YC(x,y)` are the component values of the channel designated by {{SVGAttr("xChannelSelector")}} and {{SVGAttr("yChannelSelector")}}.

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
- {{SVGAttr("in2")}}
- {{SVGAttr("scale")}}
- {{SVGAttr("xChannelSelector")}}
- {{SVGAttr("yChannelSelector")}}

## DOM Interface

This element implements the {{domxref("SVGFEDisplacementMapElement")}} interface.

## Example

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
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
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
