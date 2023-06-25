---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
page-type: css-property
browser-compat: css.properties.scroll-padding-block-start
---

{{CSSRef}}

The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

{{EmbedInteractiveExample("pages/css/scroll-padding-block-start.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-block-start: auto;

/* <length> values */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* Global values */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: revert;
scroll-padding-block-start: revert-layer;
scroll-padding-block-start: unset;
```

### Values

- `<length-percentage>`
  - : An inwards offset from the block start edge of the scrollport, as a valid length or a percentage.
- `auto`
  - : The offset is determined by the user agent. This will generally be 0px, but a user agent is able to detect and do something else if a non-zero value is more appropriate.

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
