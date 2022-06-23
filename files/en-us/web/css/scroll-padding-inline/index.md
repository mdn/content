---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
tags:
  - CSS
  - CSS Property
  - Reference
  - Web
  - recipe:css-shorthand-property
  - scroll-padding-inline
  - scroll-padding-inline-end
  - scroll-padding-inline-start
browser-compat: css.properties.scroll-padding-inline
---
{{CSSRef}}

The `scroll-padding-inline` [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the scroll padding of an element in the inline dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

The scroll-padding properties define offsets for the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-padding-inline-end`](/en-US/docs/Web/CSS/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/en-US/docs/Web/CSS/scroll-padding-inline-start)

## Syntax

```css
/* Keyword values */
scroll-padding-inline: auto;

/* <length> values */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em .5em;
scroll-padding-inline: 10%;

/* Global values */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### Values

- `<length-percentage>`
  - : An inwards offset from the corresponding edge of the scrollport, as a valid length or a percentage.
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
