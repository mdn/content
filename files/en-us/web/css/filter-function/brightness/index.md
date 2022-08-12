---
title: brightness()
slug: Web/CSS/filter-function/brightness
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.brightness
---
{{CSSRef}}

The **`brightness()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) applies a linear multiplier to the input image, making it appear brighter or darker. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntax

```css
brightness(amount)
```

### Parameters

- `amount`
  - : The brightness of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` darkens the image, while a value over `100%` brightens it. A value of `0%` will create an image that is completely black, while a value of `100%` leaves the input unchanged. The initial value for {{Glossary("interpolation")}} is `1`.

## Examples

### Setting brightness using numbers and percentages

```css
brightness(0%)   /* Completely black */
brightness(0.4)  /* 40% brightness */
brightness(1)    /* No effect */
brightness(200%) /* Double brightness */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
