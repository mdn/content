---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
page-type: css-property
browser-compat: css.properties.scroll-margin-right
---

{{CSSRef}}

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the [snapport](/en-US/docs/Glossary/Scroll_snap#snapport). The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

{{EmbedInteractiveExample("pages/css/scroll-margin-right.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* Global values */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the right edge of the scroll container.

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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
