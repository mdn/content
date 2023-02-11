---
title: filter
slug: Web/CSS/filter
page-type: css-property
tags:
  - CSS
  - CSS Property
  - Reference
  - SVG
  - SVG Filter
  - recipe:css-property
browser-compat: css.properties.filter
---

{{CSSRef}}

The **`filter`** [CSS](/en-US/docs/Web/CSS) property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

Included in the CSS standard are several functions that achieve predefined effects.

{{EmbedInteractiveExample("pages/css/filter.html")}}

## Syntax

```css
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

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

```css
filter: <filter-function> [<filter-function>]* | none
```

You can reference an SVG filter with a URL to an [SVG filter element](/en-US/docs/Web/SVG/Element/filter). For a reference to an SVG {{SVGElement("filter")}} element, use the following:

```css
filter: url(file.svg#filter-element-id)
```

## Functions

The `filter` property is specified as `none` or one or more of the functions listed below. If the parameter for any function is invalid, the function returns `none`. Except where noted, the functions that take a value expressed with a percent sign (as in `34%`) also accept the value expressed as decimal (as in `0.34`).

When the `filter` property values contains mutiple functions, the filters are applied in order.

### Filter functions

#### blur()

The {{cssxref("filter-function/blur", "blur()")}} function applies a Gaussian blur to the input image.

```css
filter: blur(5px)
```

{{EmbedLiveSample('blur','100%','236px','','', 'no-codepen')}}

#### brightness()

The {{cssxref("filter-function/brightness", "brightness()")}} function applies a linear multiplier to the input image, making it appear more or less bright. A value of `0%` will create an image that is completely black. A value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over `100%` are allowed, providing brighter results. The initial value for interpolation is `1`.

```css
filter: brightness(2)
```

{{EmbedLiveSample('brightness','100%','231px','','', 'no-codepen')}}

#### contrast()

The {{cssxref("filter-function/contrast", "contrast()")}} function adjusts the contrast of the input image. A value of `0%` will create an image that is completely gray. A value of `100%` leaves the input unchanged. Values of an amount over `100%` are allowed, providing results with more contrast. The initial value for interpolation is `1`.

```css
filter: contrast(200%)
```

{{EmbedLiveSample('contrast','100%','203px','','', 'no-codepen')}}

#### drop-shadow()

The {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} function applies a drop shadow effect to the input image. A drop shadow is effectively a blurred, offset version of the input image's alpha mask drawn in a particular color, composited below the image. The function accepts a parameter of type `<shadow>`, with the same values as `<text-shadow>`. The shadow syntax is similar to `<box-shadow>` (defined in [CSS Backgrounds and Borders Module Level 3](/en-us/docs/Web/CSS/CSS_Backgrounds_and_Borders)), with the exception that the `inset` keyword and `spread` parameter are not allowed.

The parameters of the `<shadow>` parameter are as follows:

- `offset-x` (required)
  - : The horizontal offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow to the left of the element.
- `offset-y` (required)
  - : The vertical offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow above the element.
- `<blur-radius>` (optional)
  - : This is a third {{cssxref("&lt;length&gt;")}} value. If not specified, it will be `0`  and the shadow's edge will be sharp. The larger the radius, the bigger the blur. Negative values are invalid.
- `<color>` (optional)
  - : The {{cssxref("&lt;color&gt;")}} of the shadow. If not specified, the color used is the value of the {{cssxref("&lt;color&gt;")}} property.

```css
filter: drop-shadow(16px 16px 10px black)
```

{{EmbedLiveSample('drop-shadow','100%','400px','','', 'no-codepen')}}

#### grayscale()

The {{cssxref("filter-function/grayscale", "grayscale()")}} function converts the input image to grayscale. The parameter defines the proportion of the conversion. A value of `100%` is completely grayscale. The initial value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect.

```css
filter: grayscale(100%)
```

{{EmbedLiveSample('grayscale','100%','209px','','', 'no-codepen')}}

#### hue-rotate()

The {{cssxref("filter-function/hue-rotate", "hue-rotate()")}} function applies a hue rotation on the input image. The value of `angle` defines the number of degrees around the color circle the input samples will be adjusted. A value of `0deg` leaves the input unchanged.

```css
filter: hue-rotate(90deg)
```

{{EmbedLiveSample('hue-rotate','100%','221px','','', 'no-codepen')}}

#### invert()

The {{cssxref("filter-function/invert", "invert()")}} function inverts the samples in the input image. The parameter value defines the proportion of the conversion. A value of `100%` is completely inverted. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect.

```css
filter: invert(100%)
```

{{EmbedLiveSample('invert','100%','407px','','', 'no-codepen')}}

#### opacity()

The {{cssxref("filter-function/opacity", "opacity()")}} function applies transparency. A value of `0%` is completely transparent. A value of `100%` leaves the input unchanged.

```css
filter: opacity(50%)
```

{{EmbedLiveSample('opacity','100%','210px','','', 'no-codepen')}}

#### saturate()

The {{cssxref("filter-function/saturate", "saturate()")}} function saturates the input image. A value of `0%` is completely un-saturated. A value of `100%` leaves the image unchanged. Values of amount over `100%` super saturated.

```css
filter: saturate(200%)
```

{{EmbedLiveSample('saturate','100%','332px','','', 'no-codepen')}}

#### sepia()

The {{cssxref("filter-function/sepia", "sepia()")}} function converts the input image to sepia. A value of `100%` is completely sepia. A value of `0%` leaves the input unchanged.

```css
filter: sepia(100%)
```

{{EmbedLiveSample('sepia','100%','229px','','', 'no-codepen')}}

## Combining functions

You may combine any number of functions to manipulate the rendering. The filters are applied in the order declared. The following example enhances the contrast and brightness of the image:

```css
filter: drop-shadow(3px 3px 0 red) contrast(175%) brightness(103%) drop-shadow(-3px -3px 0 orange)
```

{{EmbedLiveSample('Combining_functions','100%','209px','','', 'no-codepen')}}

### Interpolation

When animated, if both the beginning and end filters have a function list of the same length without {{cssxref("url","url()")}}, each of their filter functions is {{Glossary("interpolation", "interpolated")}} according to its specific rules.

If the filter lists are of different lengths, the missing equivalent filter functions from the longer list are added to the end of the shorter list using their initial, no filter modification values, then all filter functions are interpolated according to their specific rules. If one filter is `none`, it is replaced with the filter functions list of the other one using the filter function default values, then all filter functions are interpolated according to their specific rules. Otherwise, discrete interpolation is used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying filter functions

Examples of using the predefined functions are shown below. See each function for a specific example.

```css
.mydiv {
  filter: grayscale(50%);
}

/* Gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

### Applying SVG filters

Examples of using the URL function with an SVG resource are as follows:

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("backdrop-filter")}} property
- CSS [compositing and blending](/en-US/docs/Web/CSS/Compositing_and_Blending) module, including the CSS {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}} properties.
- The CSS {{cssxref("mask")}} property
- [SVG](/en-US/docs/Web/SVG), including the SVG {{SVGElement("filter")}} element and SVG {{SVGAttr("filter")}} attribute.
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
