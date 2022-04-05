---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
tags:
  - CSS
  - CSS Property
  - Web
  - recipe:css-property
  - scroll-padding-inline
  - scroll-padding-inline-start
browser-compat: css.properties.scroll-padding-inline-start
---
{{CSSRef}}

The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-start.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-inline-start: auto;

/* <length> values */
scroll-padding-inline-start: 10px;
scroll-padding-inline-start: 1em;
scroll-padding-inline-start: 10%;

/* Global values */
scroll-padding-inline-start: inherit;
scroll-padding-inline-start: initial;
scroll-padding-inline-start: revert;
scroll-padding-inline-start: revert-layer;
scroll-padding-inline-start: unset;
```

### Values

- `<length-percentage>`
  - : An inwards offset from the inline start edge of the scrollport, as a valid length or a percentage.
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

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
