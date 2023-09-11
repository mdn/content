---
title: opacity()
slug: Web/CSS/filter-function/opacity
page-type: css-function
browser-compat: css.types.filter-function.opacity
---

{{CSSRef}}

The **`opacity()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) applies transparency to the samples in the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> **Note:** This function is similar to the more established {{Cssxref("opacity")}} property. The difference is that with filters, some browsers provide hardware acceleration for better performance.

## Syntax

```css
opacity(amount)
```

### Parameters

- `amount`
  - : The amount of the conversion, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value of `0%` is completely transparent, while a value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `1`.

## Examples

### Examples of correct values for opacity()

```css
opacity(0%)   /* Completely transparent */
opacity(50%)  /* 50% transparent */
opacity(1)    /* No effect */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- The CSS {{cssxref("opacity")}} property
