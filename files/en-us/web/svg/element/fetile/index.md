---
title: <feTile>
slug: Web/SVG/Element/feTile
tags:
  - Element
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - SVG
  - SVG Filter
browser-compat: svg.elements.feTile
---
{{SVGRef}}

The **`<feTile>`** [SVG](/en-US/docs/Web/SVG) filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a {{SVGElement("pattern")}}.

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

This element implements the {{domxref("SVGFETileElement")}} interface.

## Example

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <feTile in="SourceGraphic" x="50" y="50"
          width="100" height="100" />
      <feTile/>
    </filter>
  </defs>

  <image xlink:href="mdn_logo_only_color.png"
      x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#tile);"/>
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
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
