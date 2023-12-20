---
title: scroll-padding
slug: Web/CSS/scroll-padding
page-type: css-shorthand-property
browser-compat: css.properties.scroll-padding
---

{{CSSRef}}

The **`scroll-padding`** [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets scroll padding on all sides of an element at once, much like the {{cssxref("padding")}} property does for padding on an element.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

The `scroll-padding-*` properties define offsets for the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars), or to put more breathing room between a targeted element and the edges of the scrollport.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Values

- {{cssxref("&lt;length-percentage&gt;")}}
  - : An inwards offset from the corresponding edge of the scrollport, as a valid {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : The offset is determined by the user agent. This will generally be `0px`, but the user agent is free to detect and do something else if a non-zero value is more appropriate.

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
