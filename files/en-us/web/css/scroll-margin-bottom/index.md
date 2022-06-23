---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
tags:
  - CSS
  - CSS Property
  - Reference
  - Scroll margin bottom
  - Web
  - recipe:css-property
  - scroll-margin
  - scroll-margin-bottom
browser-compat: css.properties.scroll-margin-bottom
---
{{CSSRef}}

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

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

- `<length>`
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

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
