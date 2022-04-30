---
title: contrast()
slug: Web/CSS/filter-function/contrast
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.contrast
---
{{CSSRef}}

The **`contrast()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) adjusts the contrast of the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## Syntax

```css
contrast(amount)
```

### Parameters

- `amount`
  - : The contrast of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` decreases the contrast, while a value over `100%` increases it. A value of `0%` will create an image that is completely gray, while a value of `100%` leaves the input unchanged. The initial value for {{Glossary("interpolation")}} is `1`.

## Examples

### Setting contrast using numbers and percentages

```css
contrast(0)     /* Completely gray */
contrast(65%)   /* 65% contrast */
contrast(1)     /* No effect */
contrast(200%)  /* Double contrast */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
