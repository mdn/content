---
title: scroll-margin-top
slug: Web/CSS/scroll-margin-top
page-type: css-property
browser-compat: css.properties.scroll-margin-top
---

{{CSSRef}}

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

{{EmbedInteractiveExample("pages/css/scroll-margin-top.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-top: 10px;
scroll-margin-top: 1em;

/* Global values */
scroll-margin-top: inherit;
scroll-margin-top: initial;
scroll-margin-top: revert;
scroll-margin-top: revert-layer;
scroll-margin-top: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the top edge of the scroll container.

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
