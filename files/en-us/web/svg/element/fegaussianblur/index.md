---
title: <feGaussianBlur>
slug: Web/SVG/Element/feGaussianBlur
tags:
  - Element
  - SVG
  - SVG Filter
browser-compat: svg.elements.feGaussianBlur
---
{{SVGRef}}

The **`<feGaussianBlur>`** [SVG](/en-US/docs/Web/SVG) filter primitive blurs the input image by the amount specified in {{SVGAttr("stdDeviation")}}, which defines the bell-curve.

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
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}

## DOM Interface

This element implements the {{domxref("SVGFEGaussianBlurElement")}} interface.

## Example

### Simple example

#### SVG

```html
<svg width="230" height="120"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink">

  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>

  <circle cx="60"  cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green"
          filter="url(#blurMe)" />
</svg>
```

#### Result

{{EmbedLiveSample("Simple_example",232,124,"/files/4227/feGaussianBlur.png")}}

### Drop shadow example

#### SVG

```html
<svg width="120" height="120"
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

  <circle cx="60"  cy="60" r="50" fill="green"
          filter="url(#dropShadow)" />
</svg>
```

#### Result

{{EmbedLiveSample("Drop_shadow_example",125,124,"/files/4229/feGaussianBlur-dropshadow.png")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

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
