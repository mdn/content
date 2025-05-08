---
title: mask-position
slug: Web/CSS/mask-position
page-type: css-property
browser-compat: css.properties.mask-position
---

{{CSSRef}}

The **`mask-position`** [CSS](/en-US/docs/Web/CSS) property sets the initial position, relative to the mask position layer set by {{cssxref("mask-origin")}}, for each defined mask image.

## Syntax

```css
/* Single keyword value */
/* Sets second value to 'center' */
mask-position: left;
mask-position: center;
mask-position: right;
mask-position: top;
mask-position: bottom;

/* Two keyword values */
mask-position: left center;
mask-position: right top;

/* One <position> value */
/* Horizontal position. Vertical position set to 'center' */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* Two <position> values */
/* First value: horizontal position. Second value: vertical position */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Four values: Edge offsets */
mask-position: bottom 10px right 20px;
mask-position: right 3em bottom 10px;
mask-position: bottom 10px right 0;

/* Multiple values */
mask-position:
  top left,
  bottom 10px right 10px;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

### Values

One or more `<position>` values, separated by commas.

- {{cssxref("&lt;position&gt;")}}
  - : One, two, or four values representing a 2D position specifying the edges of the element's box. Relative or absolute offsets can be given.

## Description

The `mask-position` property defines the position of each mask layer. An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the {{cssxref("mask-image")}} property value (even `none` values create a layer).

Each `mask-position` value in the comma-separated list of values is matched up with an associated mask layer as defined by the list of `mask-image` values, in order. If the number of values in the two properties differs:

- If `mask-position` has more values than mask-image, the excess values of `mask-position` are not used.
- If `mask-position` has fewer values than mask-image, the `mask-position` values are repeated.

Each `mask-position` defines the associated mask layer's position relative to the associated {{cssxref("mask-origin")}} value. The `mask-origin` property values are similarly matched up with the `mask-image` values, in order, with excess `mask-position` values being unused or `mask-position` values being repeated if they are fewer in number than the `mask-origin` values. Each mask layer, therefore, has an associated `mask-origin` and `mask-position` value.

If no `mask-origin` is set, the value defaults to `padding-box`, meaning the origin of each `mask-position` is the element's [padding-box](/en-US/docs/Web/CSS/box-edge#padding-box).

### One-value syntax

If only one `mask-position` value is specified, the second value is assumed to be `center`. If the value is a `<length>` or `<percentage>`, it defines the position of the mask along the horizontal axis, with the mask being vertically centered within the origin box. For example, `mask-position: 0%;` is equal to `mask-position: 0% center`.

If you use a single keyword for positioning, the other value will resolve to `center`. The default of `mask-position` is `0% 0%`, which equates to `mask-position: top left`. However:

- `mask-position: top;` is equivalent to `mask-position: top center;`.
- `mask-position: left;` is equivalent to `mask-position: center left`.
- `mask-position: center;` is equal to `mask-position: center center`.

If the value is a {{cssxref("&lt;length&gt;")}} value, it represents the horizontal position as an offset from the left edge of the mask positioning. A positive value represents an offset inward from the left edge of the box container. The position can be set outside of the element's box using a negative value — this creates an outward offset that places the item outside the container's left edge.

#### Percentage values

A {{cssxref("&lt;percentage&gt;")}} value represents the mask's horizontal position value relative to the width of the container, positioned relative to the left edge. However, the offset is not from the mask edge to the box edge. Instead, the mask image dimension is [subtracted from the container's dimension](/en-US/docs/Web/CSS/background-position#regarding_percentages), and then a percentage of the resulting value is used as the direct offset from the box's left edge, which is the same as [percentage values for `background-position`](/en-US/docs/Web/CSS/background-position#regarding_percentages).

The equation is:

`(container dimension - mask dimension) / position percentage = dimension offset value`

Given a `100px`-wide mask and a `1000px`-wide origin box, setting `mask-postion: 10%;` (the equivalent of `10% 50%`) results in the mask being vertically centered at `90px` from the left edge (`(1000 - 100) * 10% = 90`). If the left offset had been `0%`, the mask's left edge would be flush to the left of the container (`(1000 - 100) * 0% = 0`). If the left offset had been `100%`, the mask's right edge would be flush to the right of the container (`(1000 - 100) * 100% = 900`).

### Two-value syntax

A two-value `<position>` specifies the position of the mask image inside its mask positioning area, with length and percentage values specifying offsets from the `left` and `top` of the area.

If the two values are {{cssxref("&lt;length&gt;")}} values, {{cssxref("&lt;percentage&gt;")}} values, or the keyword `center`, the first value represents the horizontal position as an offset from the left edge of the mask positioning area, and the second value represents the vertical position as an offset from it's top edge, with [percentages being offset](#percentage-values) by the mask's size in that dimension.

In addition, if {{cssxref("&lt;percentage&gt;")}} values are specified, the first value is also the horizontal position value relative to the left edge, and the second value is also the vertical position value relative to the top edge.

A pair of axis-specific keywords can be reordered, as can an axis-specific keyword and a length or percentage, but two length or percentage values are not interchangeable.
If one of the two values is `top`, `right`, `bottom`, or `left`, the order of the two values doesn't matter. Any `center` or `<length-percentage>` value in the pair of values will be applied to the other dimension.

### Four-value syntax

The four-value syntax is the same as the two-value syntax, except the `<length>` and `<percentage>` values are offsets from the edge specified, not necessarily the top or left edge. The four-value syntax allows changing the order and the offset edge.

For example, while `mask-position: 1em 2em` is a `1em` horizontal offset from the left box edge and a `2em` vertical offset from the top edge, `mask-position: top 1em left 2em` changes the order, being a `2em` horizontal offset from the left edge and a `1em` vertical offset from the top edge.

Usually the four-value syntax is used to offset from the bottom and/or right. For example, `mask-position:  bottom 10px right 20px` creates a `10px` vertical offset up from the bottom edge and a `20px` horizontal offset leftward from the right edge.

Unlike the `<bg-position>` data type values for {{cssxref("background-position")}}, the `<position>` values for `mask-position` do not allow for a 3-value syntax and do not allow offsetting from `center`. When offsetting the mask from the `bottom` or `right`, the `mask-position` requires all four values (`top` or `bottom`, `left`, or `right`, and two length or percentage values) to be declared.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

```html
<section>
  <div></div>
</section>
```

```css
section {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

div {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("basic usage", "", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} shorthand
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
