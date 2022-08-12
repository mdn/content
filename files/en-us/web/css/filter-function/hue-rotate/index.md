---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.hue-rotate
---
{{CSSRef}}

The **`hue-rotate()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) rotates the [hue](https://en.wikipedia.org/wiki/Hue) of an element and its contents. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## Syntax

```css
hue-rotate(angle)
```

### Parameters

- `angle`
  - : The relative change in hue of the input sample, specified as an {{cssxref("&lt;angle&gt;")}}. A value of `0deg` leaves the input unchanged. A positive hue rotation increases the hue value, while a negative rotation decreases the hue value. The initial value for {{Glossary("interpolation")}} is `0`. There is no minimum or maximum value; `hue-rotate(Ndeg)` evaluates to `N` modulo 360.

## Examples

### Examples of correct values for hue-rotate

```css
hue-rotate(-90deg)  /* Same as 270deg rotation */
hue-rotate(0deg)    /* No effect */
hue-rotate(90deg)   /* 90deg rotation */
hue-rotate(.5turn)  /* 180deg rotation */
hue-rotate(405deg)  /* Same as 45deg rotation */
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
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
