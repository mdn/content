---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
page-type: css-function
browser-compat: css.types.filter-function.drop-shadow
---

{{CSSRef}}

The **`drop-shadow()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) applies a drop shadow effect to the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

A drop shadow is effectively a blurred, offset version of the input image's alpha mask, drawn in a specific color and composited below the image.

> **Note:** This function is somewhat similar to the {{Cssxref("box-shadow")}} property. The `box-shadow` property creates a rectangular shadow behind an element's _entire box_, while the `drop-shadow()` filter function creates a shadow that conforms to the shape (alpha channel) of the _image itself_.

## Syntax

```css
/* drop-shadow( <offset-x> <offset-y> ) */
drop-shadow(5px 5px)

/* drop-shadow( <offset-x> <offset-y> <standard-deviation> <color> ) */
drop-shadow(5px 5px 15px red)

/* drop-shadow( <color> <offset-x> <offset-y> <standard-deviation> ) */
drop-shadow(#e23 0.5rem 0.5rem 1rem)
```

The `drop-shadow()` function accepts a parameter of type `<shadow>` (defined in the {{cssxref("box-shadow")}} property), with the exception that the `inset` keyword and `spread` parameters are not allowed.

### Parameters

- `offset-x`
  - : The horizontal offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow to the left of the element.
- `offset-y`
  - : The vertical offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow above the element.
- `standard-deviation` {{optional_inline}}
  - : The value of the standard deviation to the [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) function, specified as a {{cssxref("&lt;length&gt;")}}. The larger the value, the larger and more blurred the shadow becomes. If unspecified, it defaults to `0`, resulting in a sharp, unblurred edge. Negative values are not allowed.
- `color` {{optional_inline}}
  - : The color of the shadow, specified as a {{cssxref("&lt;color&gt;")}}. If unspecified, the value of the {{cssxref("color")}} property is used.

## Formal syntax

{{CSSSyntax("drop-shadow")}}

## Examples

### Setting a drop shadow

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
```

```css
div {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 100px;
  width: 200px;
  vertical-align: top;
  background-color: #222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}
```

{{EmbedLiveSample("Setting a drop shadow", 250, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("box-shadow")}} property
- {{cssxref("text-shadow")}} property
