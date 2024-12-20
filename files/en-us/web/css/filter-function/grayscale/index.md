---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
page-type: css-function
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
  - : Amount of the input image that is converted to grayscale. It is specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value of `100%` changes the input completely to grayscale, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` have linear multipliers on the effect. If the `grayscale()` filter is present with no parameter, the default value is `1`. The initial value used for {{Glossary("interpolation")}} is `0`.

## Formal syntax

{{CSSSyntax}}

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

The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
