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

> [!NOTE]
> This function is somewhat similar to the {{Cssxref("box-shadow")}} property. The `box-shadow` property creates a rectangular shadow behind an element's _entire box_, while the `drop-shadow()` filter function creates a shadow that conforms to the shape (alpha channel) of the _image itself_.

## Syntax

```css
/* Two length values */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* Three length values */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* Two length values and a color */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* Three length values and a color */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* The order of color and length values can be changed */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#e23 0.5rem 0.5rem 1rem)

/* Pass multiple drop-shadows to a filter to stack them */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

The `drop-shadow()` function accepts a parameter of type `<shadow>` (defined in the {{cssxref("box-shadow")}} property), with the exception that the `inset` keyword and `spread` parameters are not allowed.

### Parameters

- `<color>` {{optional_inline}}

  - : Specifies the color for the shadow. If not specified, the value of the {{cssxref("color")}} property defined in the parent element is used.

- `<length>`
  - : Specifies the offset length of the shadow. This parameter accepts two or three values. If two values are specified, they are interpreted as `<offset-x>` (horizontal offset) and `<offset-y>` (vertical offset) values. Negative `<offset-x>` value places the shadow to the left of the element. Negative `<offset-y>` value places the shadow above the element. If not specified, the value of `0` is used for the missing length. If a third value is specified, it is interpreted as `<standard-deviation>`, which is the value of the standard deviation to the [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) function. A larger `<standard-deviation>` value creates a larger and more blurred shadow. Negative values for `<standard-deviation>` are not allowed.

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting a drop shadow

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
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

div:nth-child(4) {
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("Setting a drop shadow", "100%", "300px")}}

In the absence of a `<color>` value in the `drop-shadow()` function in the first box, the shadow uses the value of the `color` property from the element (`lime`). The second and third shadows illustrate that the length and color values can be specified in any order. The third shadow shows the blurring effect when a third `<length>` value is specified. The fourth shadow uses negative offsets, which shift the shadow to the left and top. The fifth example shows how to use multiple drop-shadows on a single element.

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
