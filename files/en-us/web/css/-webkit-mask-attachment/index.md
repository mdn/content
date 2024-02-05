---
title: "-webkit-mask-attachment"
slug: Web/CSS/-webkit-mask-attachment
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-mask-attachment
---

{{CSSRef}}{{Non-standard_Header}}

If a {{CSSxRef("mask-image")}} is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

## Syntax

```css
/* Keyword values */
-webkit-mask-attachment: scroll;
-webkit-mask-attachment: fixed;
-webkit-mask-attachment: local;

/* Multiple values */
-webkit-mask-attachment: scroll, local;
-webkit-mask-attachment: fixed, local, scroll;

/* Global values */
-webkit-mask-attachment: inherit;
-webkit-mask-attachment: initial;
-webkit-mask-attachment: revert;
-webkit-mask-attachment: revert-layer;
-webkit-mask-attachment: unset;
```

### Values

- scroll
  - : If `scroll` is specified, the mask image scrolls within the viewport along with the block that contains the mask image.
- fixed
  - : If `fixed` is specified, the mask image does not scroll with its containing element, instead remaining stationary within the viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-mask-attachment =
  <attachment>#
```

## Examples

### Fixing a mask image to the viewport

```css
body {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-attachment: fixed;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("mask")}}
- {{CSSxRef("mask-clip")}}
- {{CSSxRef("-webkit-mask-box-image")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("-webkit-mask-composite")}}
- {{CSSxRef("mask-repeat")}}
