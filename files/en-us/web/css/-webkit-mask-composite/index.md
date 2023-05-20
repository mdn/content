---
title: "-webkit-mask-composite"
slug: Web/CSS/-webkit-mask-composite
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-mask-composite
---

{{CSSRef}}{{Non-standard_header}}

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the {{CSSxRef("mask-image", "-webkit-mask-image")}} property.

```css
/* Keyword values */
-webkit-mask-composite: clear;
-webkit-mask-composite: copy;
-webkit-mask-composite: source-over;
-webkit-mask-composite: source-in;
-webkit-mask-composite: source-out;
-webkit-mask-composite: source-atop;
-webkit-mask-composite: destination-over;
-webkit-mask-composite: destination-in;
-webkit-mask-composite: destination-out;
-webkit-mask-composite: destination-atop;
-webkit-mask-composite: xor;

/* Global values */
-webkit-mask-composite: inherit;
-webkit-mask-composite: initial;
-webkit-mask-composite: revert;
-webkit-mask-composite: revert-layer;
-webkit-mask-composite: unset;
```

> **Note:** There is a standardized {{CSSxRef("mask-composite")}} property covering parts of this non-standard property using different keywords.

## Syntax

### Values

- `clear`
  - : Overlapping pixels in the source mask image and the destination mask image are cleared.
- `copy`
  - : The source mask image replaces the destination mask image.
- `source-over`
  - : The source mask image is rendered over the destination mask image.
- `source-in`
  - : Overlapping pixels in the source mask image and the destination mask image are replaced by the pixels of the source mask image; all other pixels are cleared.
- `source-out`
  - : Overlapping pixels in the source mask image and the destination mask image are cleared; all remaining pixels of the source mask image are rendered.
- `source-atop`
  - : The pixels of the destination mask image are rendered. The pixels of the source mask image are rendered only if they overlap a nontransparent portion of the destination mask image. This causes the source mask image to have no effect.
- `destination-over`
  - : The destination mask image is rendered over the source mask image.
- `destination-in`
  - : Overlapping pixels in the source mask image and the destination mask image remain the pixels of the destination mask image; all other pixels are cleared.
- `destination-out`
  - : Overlapping pixels in the source mask image and the destination mask image are cleared; all remaining pixels of the source mask image are rendered.
- `destination-atop`
  - : The pixels of the source mask image are rendered. The pixels of the destination mask image are rendered only if they overlap a nontransparent portion of the destination mask image. This causes the destination mask image to have no effect.
- `xor`
  - : Overlapping pixels in the source mask image and the destination mask image become fully transparent if they are both fully opaque.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-mask-composite =
  <composite-style>#
```

## Examples

### Compositing with XOR

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Specifications

Not part of any standard. This property is specified as {{CSSxRef("mask-composite")}} using different values.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("mask-composite")}}
