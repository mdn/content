---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.grayscale
---
{{CSSRef}}

The **`grayscale()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) converts the input image to grayscale. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## Syntax

```css
grayscale(amount)
```

### Parameters

- `amount`
  - : The amount of the conversion, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value of `100%` is completely grayscale, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. Default value when omitted is `1`. The initial value for {{Glossary("interpolation")}} is `0`.

## Examples

### Examples of correct values for grayscale()

```css
grayscale(0)     /* No effect */
grayscale(.7)    /* 70% grayscale */
grayscale(100%)  /* Completely grayscale */
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
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
