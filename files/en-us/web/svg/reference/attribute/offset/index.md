---
title: offset
slug: Web/SVG/Reference/Attribute/offset
page-type: svg-attribute
browser-compat: svg.elements.stop.offset
sidebar: svgref
---

The **`offset`** attribute indicates the position of a gradient color along a linear gradient vector on a {{SVGElement("stop")}} element, or a fractional vector of the distance between the edge of a smaller/innermost circular shape and the edge of a larger/outermost circular shape.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linear-gradient">
      <stop offset="6%" stop-color="black" />
      <stop offset="70%" stop-color="grey" />
    </linearGradient>
    <radialGradient id="radial-gradient">
      <stop offset="0%" stop-color="gold" />
      <stop offset="95%" stop-color="grey" />
    </radialGradient>
  </defs>
  <circle cx="5" cy="5" r="4" fill="url('#linear-gradient')" />
  <circle cx="15" cy="5" r="4" fill="url('#radial-gradient')" />
</svg>
```

{{EmbedLiveSample("Example", 150, '100%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("offset")}} property
- {{SVGElement("stop")}}
