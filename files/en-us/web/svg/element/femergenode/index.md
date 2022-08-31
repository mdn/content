---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
tags:
  - Element
  - NeedsContent
  - NeedsExample
  - Reference
  - SVG
  - SVG Filter
browser-compat: svg.elements.feMergeNode
---

{{SVGRef}}

The `feMergeNode` takes the result of another filter to be processed by its parent {{ SVGElement("feMerge") }}.

## Usage context

{{svginfo}}

## Example

```html
<svg width="200" height="200"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink">

    <filter id="feOffset" x="-40" y="-20" width="100" height="200">
        <feOffset in="SourceGraphic" dx="60" dy="60" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
        <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
    </filter>

    <rect x="40" y="40" width="100" height="100"
        style="stroke: #000000; fill: green; filter: url(#feOffset);" />
    <rect x="40" y="40" width="100" height="100"
        style="stroke: #000000; fill: green;" />
</svg>
```

### Result

{{EmbedLiveSample('Example', 200, 200)}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute/Core)

### Specific attributes

- {{ SVGAttr("in") }}

## DOM Interface

This element implements the [`SVGFEMergeNodeElement`](/en-US/docs/DOM/SVGFEMergeNodeElement) interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feMerge") }}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
