---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
browser-compat: css.types.filter-function.drop-shadow
---
{{CSSRef}}

The **`drop-shadow()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) applies a drop shadow effect to the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

A drop shadow is effectively a blurred, offset version of the input image's alpha mask, drawn in a specific color and composited below the image.

> **Note:** This function is somewhat similar to the {{Cssxref("box-shadow")}} property. The `box-shadow` property creates a rectangular shadow behind an element's _entire box_, while the `drop-shadow()` filter function creates a shadow that conforms to the shape (alpha channel) of the _image itself_.

## Syntax

```css
drop-shadow(offset-x offset-y blur-radius color)
```

The `drop-shadow()` function accepts a parameter of type `<shadow>` (defined in the {{cssxref("box-shadow")}} property), with the exception that the `inset` keyword and `spread` parameters are not allowed.

### Parameters

- `offset-x` `offset-y` (required)
  - : Two {{cssxref("&lt;length&gt;")}} values that determine the shadow offset. `offset-x` specifies the horizontal distance, where negative values place the shadow to the left of the element. `offset-y` specifies the vertical distance, where negative values place the shadow above the element. If both values are `0`, the shadow is placed directly behind the element.
- `blur-radius` (optional)
  - : The shadow's blur radius, specified as a {{cssxref("&lt;length&gt;")}}. The larger the value, the larger and more blurred the shadow becomes. If unspecified, it defaults to `0`, resulting in a sharp, unblurred edge. Negative values are not allowed.
- `color` (optional)
  - : The color of the shadow, specified as a {{cssxref("&lt;color&gt;")}}. If unspecified, the value of the {{cssxref("color")}} property is used.

## Examples

### Setting a drop shadow using pixel offsets and blur radius

```css
/* Black shadow with 10px blur */
drop-shadow(16px 16px 10px black)
```

### Setting a drop shadow using rem offsets and blur radius

```css
/* Reddish shadow with 1rem blur */
drop-shadow(.5rem .5rem 1rem #e23)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- CSS {{cssxref("box-shadow")}} property
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
