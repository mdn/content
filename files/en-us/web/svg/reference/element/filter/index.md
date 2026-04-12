---
title: <filter>
slug: Web/SVG/Reference/Element/filter
page-type: svg-element
browser-compat: svg.elements.filter
sidebar: svgref
---

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

> [!NOTE]
> For `<filter>`, the `x` and `y` attributes default to `-10%`, and the `width` and `height` attributes default to `120%`. This is because many filter effects, such as {{svgelement("feGaussianBlur")}}, extend beyond the bounds of the element being filtered. The default sizing ensures that the filter effect is not clipped.

## DOM Interface

This element implements the {{domxref("SVGFilterElement")}} interface.

## Examples

### Adding a blur effect

#### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Result

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
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
