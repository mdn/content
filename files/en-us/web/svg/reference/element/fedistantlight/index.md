---
title: <feDistantLight>
slug: Web/SVG/Reference/Element/feDistantLight
page-type: svg-element
browser-compat: svg.elements.feDistantLight
sidebar: svgref
---

The **`<feDistantLight>`** [SVG](/en-US/docs/Web/SVG) filter primitive defines a distant light source that can be used within a lighting filter primitive: {{SVGElement("feDiffuseLighting")}} or {{SVGElement("feSpecularLighting")}}.

Like other filter primitives, it handles color components in the `linearRGB` {{glossary("color space")}} by default. You can use {{svgattr("color-interpolation-filters")}} to use `sRGB` instead.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("azimuth")}}
- {{SVGAttr("elevation")}}

## DOM Interface

This element implements the {{domxref("SVGFEDistantLightElement")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
