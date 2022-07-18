---
title: invert()
slug: Web/CSS/filter-function/invert
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.invert
---
{{CSSRef}}

The **`invert()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) inverts the color samples in the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntax

```css
invert(amount)
```

### Parameters

- `amount`
  - : The amount of the conversion, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value of `100%` is completely inverted, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `0`.

## Examples

### Examples of correct values for invert()

```css
invert(0)     /* No effect */
invert(.6)    /* 60% inversion */
invert(100%)  /* Completely inverted */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
