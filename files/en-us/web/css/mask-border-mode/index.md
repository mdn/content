---
title: mask-border-mode
slug: Web/CSS/mask-border-mode
page-type: css-property
spec-urls: https://drafts.fxtf.org/css-masking-1/#the-mask-border-mode
---

{{CSSRef}}

The **`mask-border-mode`** [CSS](/en-US/docs/Web/CSS) property specifies the blending mode used in a [mask border](/en-US/docs/Web/CSS/mask-border).

## Syntax

```css
/* Keyword values */
mask-border-mode: luminance;
mask-border-mode: alpha;

/* Global values */
mask-border-mode: inherit;
mask-border-mode: initial;
mask-border-mode: revert;
mask-border-mode: revert-layer;
mask-border-mode: unset;
```

### Values

- `luminance`
  - : The luminance values of the mask border image are used as the mask values.
- `alpha`
  - : The alpha values of the mask border image are used as the mask values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

This property is not supported by any browser yet.

## See also

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
