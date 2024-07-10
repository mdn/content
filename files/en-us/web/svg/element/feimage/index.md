---
title: <feImage>
slug: Web/SVG/Element/feImage
page-type: svg-element
browser-compat: svg.elements.feImage
---

{{SVGRef}}

The **`<feImage>`** [SVG](/en-US/docs/Web/SVG) filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM Interface

This element implements the {{domxref("SVGFEImageElement")}} interface.

## Example

### SVG

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <defs>
    <filter id="image">
      <feImage href="mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 210)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}} attribute
- {{SVGAttr("flood-opacity")}} attribute
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
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
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
