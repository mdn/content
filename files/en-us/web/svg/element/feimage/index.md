---
title: <feImage>
slug: Web/SVG/Element/feImage
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feImage
---
{{SVGRef}}

The **`<feImage>`** [SVG](/en-US/docs/Web/SVG) filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)

## Usage context

{{svginfo}}

## Attributes

### Global attributes

*   [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
*   [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
*   [Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filter_primitive_attributes)
*   [XLink attributes](/en-US/docs/Web/SVG/Attribute#xlink_attributes)
*   {{SVGAttr("class")}}
*   {{SVGAttr("style")}}

### Specific attributes

*   {{SVGAttr("preserveAspectRatio")}}
*   {{SVGAttr("xlink:href")}}

## DOM Interface

This element implements the {{domxref("SVGFEImageElement")}} interface.

## Example

### SVG

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="image">
      <feImage xlink:href="/files/6457/mdn_logo_only_color.png"/>
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#image);"/>
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("filter")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("set")}}
*   {{SVGElement("feBlend")}}
*   {{SVGElement("feColorMatrix")}}
*   {{SVGElement("feComponentTransfer")}}
*   {{SVGElement("feComposite")}}
*   {{SVGElement("feConvolveMatrix")}}
*   {{SVGElement("feDiffuseLighting")}}
*   {{SVGElement("feDisplacementMap")}}
*   {{SVGElement("feFlood")}}
*   {{SVGElement("feGaussianBlur")}}
*   {{SVGElement("feMerge")}}
*   {{SVGElement("feMorphology")}}
*   {{SVGElement("feOffset")}}
*   {{SVGElement("feSpecularLighting")}}
*   {{SVGElement("feTile")}}
*   {{SVGElement("feTurbulence")}}
*   [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
