---
title: mask-border-width
slug: Web/CSS/mask-border-width
page-type: css-property
browser-compat: css.properties.mask-border-width
---

{{CSSRef}}

The **`mask-border-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of an element's [mask border](/en-US/docs/Web/CSS/mask-border).

## Syntax

```css
/* Keyword value */
mask-border-width: auto;

/* <length> value */
mask-border-width: 1rem;

/* <percentage> value */
mask-border-width: 25%;

/* <number> value */
mask-border-width: 3;

/* top and bottom | left and right */
mask-border-width: 2em 3em;

/* top | left and right | bottom */
mask-border-width: 5% 15% 10%;

/* top | right | bottom | left */
mask-border-width: 5% 2em 10% auto;

/* Global values */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: revert;
mask-border-width: revert-layer;
mask-border-width: unset;
```

The `mask-border-width` property may be specified using one, two, three, or four values chosen from the list of values below.

- When **one** value is specified, it applies the same width to **all four sides**.
- When **two** values are specified, the first width applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first width applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the widths apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### Values

- `<length-percentage>`
  - : The width of the mask border, specified as a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. Percentages are relative to the _width_ of the border area for horizontal offsets and the _height_ of the border area for vertical offsets. Must not be negative.
- `<number>`
  - : The width of the mask border, specified as a multiple of the corresponding {{cssxref("border-width")}}. Must not be negative.
- `auto`
  - : The width of the mask border is made equal to the intrinsic width or height (whichever is applicable) of the corresponding {{cssxref("mask-border-slice")}}. If the image does not have the required intrinsic dimension, the corresponding `border-width` is used instead.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define the width of the border mask — setting this to a different value to [`mask-border-slice`](/en-US/docs/Web/CSS/mask-border-slice) will cause the slices to be scaled to fit the border mask.

```css
mask-border-width: 30 fill;
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-width` — with a prefix:

```css
-webkit-mask-box-image-width: 20px;
```

> **Note:** The [`mask-border`](/en-US/docs/Web/CSS/mask-border) page features a working example (using the out-of-date prefixed border mask properties supported in Chromium), so you can get an idea of the effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
