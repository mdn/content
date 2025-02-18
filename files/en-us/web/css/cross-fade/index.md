---
title: cross-fade()
slug: Web/CSS/cross-fade
page-type: css-function
browser-compat: css.types.image.cross-fade
---

{{CSSRef}}

The **`cross-fade()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used to blend two or more images at a defined transparency.
It can be used for many simple image manipulations, such as tinting an image with a solid color or highlighting a particular area of the page by combining an image with a radial gradient.

## Syntax

> [!WARNING]
> The specification and current implementations have different syntaxes.
> The specification syntax is explained first.

### Specification syntax

The `cross-fade()` function takes a list of images with a percentage defining how much of each image is retained in terms of opacity when it is blended with the other images. The percent value must be coded without quotes, must contain the `'%'` symbol, and its value must be between 0% and 100%.

The function can be used in CSS anywhere an ordinary image reference can be used.

#### Cross-fade percentages

Think of the percentage as an opacity value for each image. This means a value of 0% means the image is fully transparent while a value of 100% makes the image fully opaque.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

If any percentages are omitted, all the specified percentages are summed together and subtracted from `100%`.
If the result is greater than 0%, the result is then divided equally between all images with omitted percentages.

In the simplest case, two images are faded between each other. To do that, only one of the images needs to have a percentage, the other one will be faded accordingly.
For example, a value of 0% defined for the first image yields only the second image, while 100% yields only the first.
A 25% value renders the first image at 25% and the second at 75%. The 75% value is the inverse, showing the first image at 75% and the second at 25%.

The above could also have been written as:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

If no percentages are declared, both the images will be 50% opaque, with a cross-fade rendering as an even merge of both images.
The 50%/50% example seen above did not need to have the percentages listed, as when a percentage value is omitted, the included percentages are added together and subtracted from 100%.
The result, if greater than 0, is then divided equally between all images with omitted percentages.

In the last example, the sum of both percentages is not 100%, and therefore both images include their respective opacities.

If no percentages are declared and three images are included, each image will be 33.33% opaque. The two following are lines (almost) identical:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Older, implemented syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

The specification for the `cross-fade()` function allows for multiple images and for each image to have transparency values independent of the other values.
This was not always the case.
The original syntax, which has been implemented in some browsers, only allowed for two images, with the sum of the transparency of those two images being exactly 100%.
The original syntax is supported in Safari and supported with the `-webkit-` prefix in Chrome, Opera, and other blink-based browsers.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In the implemented syntax, the two comma-separated images are declared first, followed by a comma and required percent value. Omitting the comma or percent invalidates the value.
The percent is the opacity of the first declared image. The included percentage is subtracted from 100%, with the difference being the opacity of the second image.

The green/red example (with the percentages totaling 150%) and the yellow/red/blue example (with three images) from the specification syntax section, are not possible in this implementation.

## Accessibility

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users.
If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.
When using background images, make sure the contrast in color is great enough that any text is legible over the image as well as if the images are missing.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formal syntax

{{csssyntax}}

## Examples

### Older syntax for cross-fade

#### HTML

```html
<div class="crossfade"></div>
```

#### CSS

```css
.crossfade {
  width: 300px;
  height: 300px;
  background-image: -webkit-cross-fade(url("br.png"), url("tr.png"), 75%);
  background-image: cross-fade(url("br.png"), url("tr.png"), 75%);
}
```

#### Result

{{EmbedLiveSample("Older_syntax_for_cross-fade", "330", "330")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("image")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("element")}}
- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradient functions: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
