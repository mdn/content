---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
tags:
  - CSS
  - CSS Property
  - Reference
  - Web
  - recipe:css-property
  - scroll-margin
  - scroll-margin-right
browser-compat: css.properties.scroll-margin-right
---
{{CSSRef}}

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

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

- `<length>`
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

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
