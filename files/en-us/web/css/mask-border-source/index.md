---
title: mask-border-source
slug: Web/CSS/mask-border-source
page-type: css-property
browser-compat: css.properties.mask-border-source
---

{{CSSRef}}

The **`mask-border-source`** [CSS](/en-US/docs/Web/CSS) property sets the source image used to create an element's [mask border](/en-US/docs/Web/CSS/mask-border).

The {{cssxref("mask-border-slice")}} property is used to divide the source image into regions, which are then dynamically applied to the final mask border.

## Syntax

```css
/* Keyword value */
mask-border-source: none;

/* <image> values */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* Global values */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: revert;
mask-border-source: revert-layer;
mask-border-source: unset;
```

### Values

- `none`
  - : No mask border is used.
- {{cssxref("&lt;image&gt;")}}
  - : Image reference to use for the mask border.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define the source of the border mask.

```css
mask-border-source: url(image.jpg);
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-source` — with a prefix:

```css
-webkit-mask-box-image-source: url(image.jpg);
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
- {{cssxref("mask-border-width")}}
