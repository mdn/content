---
title: <filter>
slug: Web/SVG/Element/filter
page-type: svg-element
browser-compat: svg.elements.filter
---

{{SVGRef}}

The **`<filter>`** [SVG](/en-US/docs/Web/SVG) element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the {{SVGAttr("filter")}} attribute on SVG elements, or the {{cssxref("filter")}} {{Glossary("CSS")}} property for SVG/HTML elements.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("filterUnits")}}
- {{SVGAttr("primitiveUnits")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM Interface

This element implements the {{domxref("SVGFilterElement")}} interface.

## Example

### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

### Result

{{EmbedLiveSample("Example",235,150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
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
