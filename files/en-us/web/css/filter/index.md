---
title: filter
slug: Web/CSS/filter
page-type: css-property
browser-compat: css.properties.filter
---

{{CSSRef}}

The **`filter`** [CSS](/en-US/docs/Web/CSS) property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

Several [functions](#functions), such as `blur()` and `contrast()`, are available to help you achieve predefined effects.

{{EmbedInteractiveExample("pages/css/filter.html")}}

## Syntax

```css
/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* Multiple filters */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

With a function, use the following:

```css-nolint
filter: <filter-function> [<filter-function>]* | none;
```

You can use `url()` to reference an [SVG filter element](/en-US/docs/Web/SVG/Element/filter). For a reference to an SVG {{SVGElement("filter")}} element, use the following syntax:

```css
filter: url(file.svg#filter-element-id);
```

## Functions

The `filter` property is specified as `none` or one or more of the functions listed below. If the parameter for any function is invalid, the function returns `none`. Except where noted, the functions that take a value expressed with a percent sign (as in `34%`) also accept the value expressed as decimal (as in `0.34`).

When the `filter` property values contains multiple functions, the filters are applied in order.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Applies a Gaussian blur to the input image.

```css
filter: blur(5px);
```

- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Applies a linear multiplier to the input image, making it appear more or less bright. Values are linear multipliers on the effect, with `0%` creating a completely black image, `100%` having no effect, and values over `100%` brightening the image.

```css
filter: brightness(2);
```

- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Adjusts the contrast of the input image. A value of `0%` makes the image grey, `100%` has no effect, and values over `100%` create a contrast.

```css
filter: contrast(200%);
```

- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applies the parameter `<shadow>` as a drop shadow, following the contours of the image. The shadow syntax is similar to `<box-shadow>` (defined in the [CSS backgrounds and borders module](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)), with the exception that the `inset` keyword and `spread` parameter are not allowed. As with all `filter` property values, any filters after the `drop-shadow()` are applied to the shadow.

```css
filter: drop-shadow(16px 16px 10px black);
```

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Converts the image to grayscale. A value of `100%` is completely grayscale. The initial value of `0%` leaves the input unchanged. Values between `0%` and `100%` produce linear multipliers on the effect.

```css
filter: grayscale(100%);
```

- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Applies a hue rotation. The `<angle>` value defines the number of degrees around the hue color circle at which the input samples will be adjusted. A value of `0deg` leaves the input unchanged.

```css
filter: hue-rotate(90deg);
```

- {{cssxref("filter-function/invert", "invert()")}}
  - : Inverts the samples in the input image. A value of `100%` completely inverts the image. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` have linear multipliers on the effect.

```css
filter: invert(100%);
```

- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Applies transparency. `0%` makes the image completely transparent and `100%` leaves the image unchanged.

```css
filter: opacity(50%);
```

- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Saturates the image, with `0%` being completely unsaturated, `100%` leaving the image unchanged, and values of over `100%` increasing saturation.

```css
filter: saturate(200%);
```

- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Converts the image to sepia, with a value of `100%` making the image completely sepia and `0%` making no change.

```css
filter: sepia(100%);
```

## Combining functions

You may combine any number of functions to manipulate the rendering. The filters are applied in the order declared. The following example enhances the contrast and brightness of the image:

```css
filter: contrast(175%) brightness(103%);
```

### Interpolation

When animated, if both the beginning and end filters have a function list of the same length without {{cssxref("url","url()")}} in the same order, each of their filter functions is {{Glossary("interpolation", "interpolated")}} according to the filter function's specific rules.

If the filter lists are of different lengths, the missing equivalent filter functions from the longer list are added to the end of the shorter list. The added functions use their initial, no filter modification values. All the filters listed are then interpolated according to the filter function's specific rules. Otherwise, discrete interpolation is used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying filter functions

The `filter` property is applied to the second image, greying and blurring both the image and its border.

```css
img {
  border: 5px solid yellow;
}
/* Gray the second image by 40% and blur by 5px */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="Original image is sharp" />
<img src="pencil.jpg" alt="The image and border are blurred and muted" />
```

{{EmbedLiveSample('Applying_filter_functions','100%','229px')}}

### Repeating filter functions

Filter functions are applied in order of appearance. The same filter function can be repeated.

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg) drop-shadow(5px 5px 0
        red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    style="fill: var(--text-primary);"></path>
  <g style="fill:blue;">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('Repeating_filter_functions','100%','229px')}}

The filters are applied in order. This is why the drop shadows are not the same color: the first drop shadow's hue is altered by the `hue-rotate()` function but the second one is not.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("backdrop-filter")}} property
- CSS [compositing and blending](/en-US/docs/Web/CSS/CSS_compositing_and_blending) module, including the CSS {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}} properties.
- The CSS {{cssxref("mask")}} property
- [SVG](/en-US/docs/Web/SVG), including the SVG {{SVGElement("filter")}} element and SVG {{SVGAttr("filter")}} attribute.
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
