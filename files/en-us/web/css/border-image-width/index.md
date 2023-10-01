---
title: border-image-width
slug: Web/CSS/border-image-width
page-type: css-property
browser-compat: css.properties.border-image-width
---

{{CSSRef}}

The **`border-image-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of an element's [border image](/en-US/docs/Web/CSS/border-image).

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

If this property's value is greater than the element's {{cssxref("border-width")}}, the border image will extend beyond the padding (and/or content) edge.

## Syntax

```css
/* Keyword value */
border-image-width: auto;

/* <length> value */
border-image-width: 1rem;

/* <percentage> value */
border-image-width: 25%;

/* <number> value */
border-image-width: 3;

/* top and bottom | left and right */
border-image-width: 2em 3em;

/* top | left and right | bottom */
border-image-width: 5% 15% 10%;

/* top | right | bottom | left */
border-image-width: 5% 2em 10% auto;

/* Global values */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

The `border-image-width` property may be specified using one, two, three, or four values chosen from the list of values below.

- When **one** value is specified, it applies the same width to **all four sides**.
- When **two** values are specified, the first width applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first width applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the widths apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### Values

- `<length-percentage>`
  - : The width of the border, specified as a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. Percentages are relative to the _width_ of the border image area for horizontal offsets and the _height_ of the border image area for vertical offsets. Must not be negative.
- `<number>`
  - : The width of the border, specified as a multiple of the corresponding {{cssxref("border-width")}}. Must not be negative.
- `auto`
  - : The width of the border is made equal to the intrinsic width or height (whichever is applicable) of the corresponding {{cssxref("border-image-slice")}}. If the image does not have the required intrinsic dimension, the corresponding `border-width` is used instead.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Tiling a border image

This example creates a border image using the following ".png" file, which is 90 by 90 pixels:

![Square image containing eight circles. The circles in each corner are light purple. The four side circles are blue. The area in the middle, where a ninth circle could fit, is blank.](border.png)

Thus, each circle in the source image is 30 by 30 pixels.

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

#### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

#### Result

{{EmbedLiveSample('Tiling_a_border_image', 200, 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Learn CSS: Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
