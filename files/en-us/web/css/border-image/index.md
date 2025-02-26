---
title: border-image
slug: Web/CSS/border-image
page-type: css-shorthand-property
browser-compat: css.properties.border-image
---

{{CSSRef}}

The **`border-image`** [CSS](/en-US/docs/Web/CSS) property draws an image around a given element. It replaces the element's regular [border](/en-US/docs/Web/CSS/border).

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> You should specify a separate {{cssxref("border-style")}} in case the border image fails to load. Although the specification doesn't strictly require it, some browsers don't render the border image if {{cssxref("border-style")}} is `none` or {{cssxref("border-width")}} is `0`.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-image-outset`](/en-US/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/en-US/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/en-US/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/en-US/docs/Web/CSS/border-image-source)
- [`border-image-width`](/en-US/docs/Web/CSS/border-image-width)

## Syntax

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* Global values */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

The `border-image` property may be specified with anywhere from one to five of the values listed below.

> [!NOTE]
> If the [computed value](/en-US/docs/Web/CSS/CSS_cascade/computed_value) of {{cssxref("border-image-source")}} is `none`, or if the image cannot be displayed, the {{cssxref("border-style")}} will be displayed instead.

### Values

- `<'border-image-source'>`
  - : The source image. See {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : The dimensions for slicing the source image into regions. Up to four values may be specified. See {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : The width of the border image. Up to four values may be specified. See {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : The distance of the border image from the element's outside edge. Up to four values may be specified. See {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Defines how the edge regions of the source image are adjusted to fit the dimensions of the border image. Up to two values may be specified. See {{cssxref("border-image-repeat")}}.

## Accessibility

Assistive technology cannot parse border images. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Bitmap

In this example, we will apply a diamond pattern to an element's borders. The source for the border image is a ".png" file of 81 by 81 pixels, with three diamonds going vertically and horizontally:

![Eight diamonds: four red diamonds, one in each corner, and four orange diamonds, one on each side. The middle is empty.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

To match the size of a single diamond, we will use a value of 81 divided by 3, or `27`, for slicing the image into corner and edge regions. To center the border image on the edge of the element's background, we will make the outset values equal to half of the width values. Finally, a repeat value of `round` will make the border slices fit evenly, i.e., without clipping or gaps.

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### Result

{{EmbedLiveSample('Bitmap', '100%', 200)}}

### Gradient

#### HTML

```html
<div id="gradient">
  This element is surrounded by a gradient-based border image!
</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### Result

{{EmbedLiveSample('Gradient')}}

### Rounded borders

{{cssxref("border-radius")}} has no effect on the border image. This is because {{cssxref("border-image-outset")}} is able to place the image outside the border box, so it doesn't make sense for the border image to be clipped by the border area. To create rounded borders when using a border image, you should create the image itself with rounded corners, or, in the case of a gradient, draw it as the background instead. Below, we show one approach to do this, which is to use two {{cssxref("background-image")}}s: one that extends the border box, and another for the padding box.

#### HTML

```html
<div id="rounded">
  This element is surrounded by a border image with rounded corners!
</div>
```

#### CSS

```css
#rounded {
  width: 200px;
  /* Use transparent so the background image is visible */
  border: 10px solid transparent;
  padding: 20px;
  border-radius: 20px;
  background-image:
    linear-gradient(white, white), linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### Result

{{EmbedLiveSample('rounded_borders')}}

> [!NOTE]
> There is a new `{{cssxref("background-clip")}}: border-area` value [being proposed](https://github.com/w3c/csswg-drafts/issues/9456) to address this use case.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} type
- Gradient functions: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Border images in CSS: A key focus area for Interop 2023](/en-US/blog/border-images-interop-2023/) on MDN blog (2023)
