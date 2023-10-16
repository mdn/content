---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
page-type: css-shorthand-property
browser-compat: css.properties.scroll-margin-block
---

{{CSSRef}}

The `scroll-margin-block` [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the scroll margins of an element in the block dimension.

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-margin-block-end`](/en-US/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/en-US/docs/Web/CSS/scroll-margin-block-start)

## Syntax

```css
/* <length> values */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Global values */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the corresponding edge of the scroll container.

## Description

The scroll-margin values represent outsets defining the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

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
