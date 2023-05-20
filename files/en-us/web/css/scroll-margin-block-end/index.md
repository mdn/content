---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
page-type: css-property
browser-compat: css.properties.scroll-margin-block-end
---

{{CSSRef}}

The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Global values */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: revert-layer;
scroll-margin-block-end: unset;
```

### Values

- `<length>`
  - : An outset from the block end edge of the scroll container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
