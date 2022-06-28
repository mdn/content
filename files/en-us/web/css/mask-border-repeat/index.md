---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - NeedsCompatTable
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.mask-border-repeat
---
{{CSSRef}}

The **`mask-border-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how the [edge regions](/en-US/docs/Web/CSS/border-image-slice#edge-regions) of a source image are adjusted to fit the dimensions of an element's [mask border](/en-US/docs/Web/CSS/mask-border).

## Syntax

```css
/* Keyword value */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* vertical | horizontal */
mask-border-repeat: round stretch;

/* Global values */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: revert;
mask-border-repeat: revert-layer;
mask-border-repeat: unset;
```

The `mask-border-repeat` property may be specified using one or two values chosen from the list of values below.

- When **one** value is specified, it applies the same behavior on **all four sides**.
- When **two** values are specified, the first applies to the **top and bottom**, the second to the **left and right**.

### Values

- `stretch`
  - : The source image's edge regions are stretched to fill the gap between each border.
- `repeat`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be clipped to achieve the proper fit.
- `round`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be stretched to achieve the proper fit.
- `space`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Extra space will be distributed in between tiles to achieve the proper fit.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define how the border mask slice will repeat around the border — i.e. will it just repeat, or be scaled slightly so a whole number of slices fits, or be stretched so one slice fits?

```css
mask-border-repeat: round;
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-repeat` — with a prefix:

```css
-webkit-mask-box-image-repeat: round;
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
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
