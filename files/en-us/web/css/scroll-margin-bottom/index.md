---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
page-type: css-property
browser-compat: css.properties.scroll-margin-bottom
---

{{CSSRef}}

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the [snapport](/en-US/docs/Glossary/Scroll_snap#snapport). The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

{{EmbedInteractiveExample("pages/css/scroll-margin-bottom.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* Global values */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the bottom edge of the scroll container.

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
