---
title: mask-origin
slug: Web/CSS/mask-origin
page-type: css-property
browser-compat: css.properties.mask-origin
---

{{CSSRef}}

The **`mask-origin`** [CSS](/en-US/docs/Web/CSS) property sets the origin of a mask. This property determines the mask positioning area: the area within which a mask image is positioned. HTML elements can have masks contained within their content border box, padding box, or content box, whereas SVG elements (which don't have the associated CSS layout boxes) can have masks contained inside their fill, stroke, or view box.
For elements rendered as multiple boxes, such as a {{htmlelement("span")}} of text that spans more than one line, the `mask-origin` property specifies which boxes the {{cssxref("box-decoration-break")}} property operates on to determine the mask positioning area.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

### Values

The `mask-origin` property is a comma-separated list of `<coord-box>` keyword values, including:

- `content-box`
  - : The position is relative to the [content box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : The position is relative to the [padding box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : The position is relative to the [border box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : The position is relative to the object bounding box.
- `stroke-box`
  - : The position is relative to the stroke bounding box.
- `view-box`
  - : Uses the nearest SVG viewport as reference box. If a {{svgattr("viewBox")}} attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.

There are three non-standard values that are shortcuts for standard `<coord-box>` values: `content` is an alias for `content-box`, `padding` is an alias for `padding-box`, and `border` is an alias for `border-box`.

## Description

The `mask-origin` property is very similar to the {{cssxref("background-origin")}} property, but it has a different set of values and a different initial value. The initial value depends on the if there is an associated CSS layout box; if yes, the default value is `border-box`. In comparison, the default for `background-origin` is `padding-box`.

For SVG elements without an associated CSS layout box, the values `content-box`, `padding-box`, and `border-box` (the default value) compute to `fill-box`, meaning the position is relative to the object bounding box. For HTML elements, if a SVG-related value of `fill-box`, `stroke-box`, or `view-box` is set, the value is computed to `border-box`.

An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the {{cssxref("mask-image")}} property value (even if one or more of those values is `none`). Each `mask-origin` value in the comma-separated list of values is matched with a comma-separated `mask-image` value, in the same order.

If the number of values in the two properties differs, any excess values of `mask-origin` are not used in cases where `mask-origin` has more values than `mask-image`. If `mask-origin` has fewer values than `mask-image`, the `mask-origin` values are repeated.

For elements rendered as a single box, this property specifies the mask positioning area — or the origin position — of the image referenced by the `mask-image` property.

For elements rendered as multiple boxes, such as inline boxes that span more than one line, the `mask-origin` property specifies which boxes the {{cssxref("box-decoration-break")}} property operates upon to determine the mask positioning area.

The `mask-origin` can cause the mask layer image to be clipped. For example, if the {{cssxref("mask-clip")}} property is set to `padding-box`, the `mask-origin` is set to `border-box`, the {{cssxref("mask-position")}} is set to the `top left` edge, and the element has a border, then the mask layer image will be clipped at the top-left edge.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparing content, padding, and border

This example demonstrates basic usage while comparing three values of the `mask-origin` property.

#### HTML

We include four {{htmlelement("section")}} elements, each containing one {{htmlelement("div")}} element.

```html
<section class="content">
  <div></div>
</section>
<section class="padding">
  <div></div>
</section>
<section class="border">
  <div></div>
</section>
<section class="comparison">
  <div></div>
</section>
```

#### CSS

We apply {{cssxref("border")}}, {{cssxref("padding")}}, and {{cssxref("margin")}} to every `<div>`. These create the reference points for the mask image origin. The `border` shorthand includes a {{cssxref("border-color")}}. We also include a {{cssxref("background-color")}}. These provide a green background and a blue border to mask. Finally, all our `<div>` elements are provided with a {{cssxref("mask-image")}}.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
section {
  border: 1px solid black;
}
```

We give each `<div>` a different `mask-origin` value.

```css
.content div {
  mask-origin: content-box;
}

.padding div {
  mask-origin: padding-box;
}

.border div {
  mask-origin: border-box;
}

.comparison div {
  mask-image: none;
}
```

We also generate some text inside each `<section>` to indicate the mask origin for each `<div>` container.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
```

#### Result

{{EmbedLiveSample("Comparing content padding and border", "", "200")}}

Notice the difference between the three values. In the first three boxes, respectively, the mask originates from:

- The outside edge of the border.
- The inside border edge, which is the outer edge of the padding box.
- The inside padding edge, which is the outer edge of the content box.

The fourth box has no `mask-image` specified: it is a reference image, included to allow you to easily visualize the extent of the content and padding areas.

### Multiple values

This example demonstrates using different `mask-origin` values for different `mask-image`s applied to a single element.

#### HTML

We include a single `<div>`.

```html
<div></div>
```

#### CSS

We apply three mask images instead of one, each with a different {{cssxref("mask-position")}}. We also set the mask images not to repeat.

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position:
    top left,
    top right,
    bottom center;
  mask-repeat: no-repeat;
  mask-origin: content-box, border-box;
}
```

#### Results

{{EmbedLiveSample("Multiple values", "", "200")}}

We have three `mask-image` values, but only two `mask-origin` values. This means the `mask-origin` values are repeated, as if we had set `mask-origin: content-box, padding-box, content-box;`. The `border-box` star, the only mask overlapping the border, is the top-right star.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-origin")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} shorthand
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
