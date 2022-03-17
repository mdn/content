---
title: <discard>
slug: Web/SVG/Element/discard
tags:
  - Element
  - NeedsExample
  - Reference
  - SVG
  - SVG Animation
browser-compat: svg.elements.discard
---
{{SVGRef}}

The **`<discard>`** [SVG](/en-US/docs/Web/SVG) element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.

The `<discard>` element may occur wherever the {{SVGElement("animate")}} element may.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Aria attributes](/en-US/docs/Web/SVG/Attribute#aria_attributes)

### Specific attributes

- {{SVGAttr("begin")}}
- {{SVGAttr("href")}} (but note that `<discard>` has never supported `xlink:href`)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
