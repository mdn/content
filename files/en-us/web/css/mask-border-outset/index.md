---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
page-type: css-property
browser-compat: css.properties.mask-border-outset
---

{{CSSRef}}

The **`mask-border-outset`** [CSS](/en-US/docs/Web/CSS) property specifies the distance by which an element's [mask border](/en-US/docs/Web/CSS/mask-border) is set out from its border box.

## Syntax

```css
/* <length> value */
mask-border-outset: 1rem;

/* <number> value */
mask-border-outset: 1.5;

/* top and bottom | left and right */
mask-border-outset: 1 1.2;

/* top | left and right | bottom */
mask-border-outset: 30px 2 45px;

/* top | right | bottom | left */
mask-border-outset: 7px 12px 14px 5px;

/* Global values */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: revert;
mask-border-outset: revert-layer;
mask-border-outset: unset;
```

The `mask-border-outset` property may be specified as one, two, three, or four values. Each value is a {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;number&gt;")}}. Negative values are invalid.

- When **one** value is specified, it applies the same outset to **all four sides**.
- When **two** values are specified, the first outset applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first outset applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the outsets apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the mask border outset as a dimension.
- {{cssxref("&lt;number&gt;")}}
  - : The size of the mask border outset as a multiple of the corresponding {{cssxref("border-width")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to move the mask away from the inner edge of the element's border box — you can use it to make the mask start from part way across the border, rather than the inside of it.

```css
mask-border-outset: 1rem;
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-outset` — with a prefix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> **Note:** The [`mask-border`](/en-US/docs/Web/CSS/mask-border) page features a working example (using the out-of-date prefixed border mask properties supported in Chromium), so you can get an idea of the effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
