---
title: -webkit-mask-position-x
slug: Web/CSS/-webkit-mask-position-x
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-mask-position-x
---

{{CSSRef}}{{Non-standard_header}}

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

## Syntax

```css
/* Keyword values */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <percentage> values */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <length> values */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Multiple values */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* Global values */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: revert;
-webkit-mask-position-x: revert-layer;
-webkit-mask-position-x: unset;
```

### Values

- `<length-percentage>`
  - : A length indicating the position of the left edge of the image relative to the box's left padding edge. Percentages are calculated against the horizontal dimension of the box padding area. That means, a value of `0%` means the left edge of the image is aligned with the box's left padding edge and a value of `100%` means the right edge of the image is aligned with the box's right padding edge.
- `left`
  - : Equivalent to `0%`.
- `center`
  - : Equivalent to `50%`.
- `right`
  - : Equivalent to `100%`.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-mask-position-x =
  [ <length-percentage> | left | center | right ]#
```

## Examples

### Horizontally positioning a mask image

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
