---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
page-type: css-property
browser-compat: css.properties.scroll-padding-top
---

{{CSSRef}}

The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

{{EmbedInteractiveExample("pages/css/scroll-padding-top.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-top: auto;

/* <length> values */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* Global values */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: revert-layer;
scroll-padding-top: unset;
```

### Values

- {{cssxref("&lt;length-percentage&gt;")}}
  - : An inwards offset from the top edge of the scrollport, as a valid length or a percentage.
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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
