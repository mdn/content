---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
page-type: css-property
browser-compat: css.properties.scroll-snap-align
---

{{CSSRef}}

The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

{{EmbedInteractiveExample("pages/css/scroll-snap-align.html")}}

## Syntax

```css
/* Keyword values */
scroll-snap-align: none;
scroll-snap-align: start end; /* when two values set first is block, second inline */
scroll-snap-align: center;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Values

- `none`
  - : The box does not define a snap position in that axis.
- `start`
  - : The start alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.
- `end`
  - : The end alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.
- `center`
  - : The center alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/css-scroll-snap/)
