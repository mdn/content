---
title: <feGaussianBlur>
slug: Web/SVG/Element/feGaussianBlur
page-type: svg-element
browser-compat: svg.elements.feGaussianBlur
---

{{SVGRef}}

The **`<feGaussianBlur>`** [SVG](/en-US/docs/Web/SVG) filter primitive blurs the input image by the amount specified in {{SVGAttr("stdDeviation")}}, which defines the bell-curve.

Like other filter primitives, it handles color components in the `linearRGB` {{glossary("color space")}} by default. You can use {{svgattr("color-interpolation-filters")}} to use `sRGB` instead.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}

## DOM Interface

This element implements the {{domxref("SVGFEGaussianBlurElement")}} interface.

## Example

### Basic example

#### SVG

```html
<svg
  width="230"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Result

{{EmbedLiveSample("Basic_example", "", "130")}}

### Drop shadow example

#### SVG

```html
<svg
  width="120"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
    <feOffset dx="2" dy="4" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" filter="url(#dropShadow)" />
</svg>
```

#### Result

{{EmbedLiveSample("Drop_shadow_example", "", "130")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
