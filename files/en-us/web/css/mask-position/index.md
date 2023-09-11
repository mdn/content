---
title: mask-position
slug: Web/CSS/mask-position
page-type: css-property
browser-compat: css.properties.mask-position
---

{{CSSRef}}

The **`mask-position`** [CSS](/en-US/docs/Web/CSS) property sets the initial position, relative to the mask position layer set by {{cssxref("mask-origin")}}, for each defined mask image.

## Syntax

```css
/* Keyword values */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* <position> values */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Multiple values */
mask-position: top right;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

One or more `<position>` values, separated by commas.

### Values

- {{cssxref("&lt;position&gt;")}}
  - : One to four values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given. Note that the position can be set outside of the element's box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask position

Change the `mask-position` value to any of the allowed values detailed above.
If viewing the example in a Chromium-based browser change the value of `-webkit-mask-position`.

{{EmbedGHLiveSample("css-examples/masking/mask-position.html", '100%', 760)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
