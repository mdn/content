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
/* Single keyword values */
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
/* Horizontal position. Vertical position set to 'center'. */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* Two <position> values */
/* First value: horizontal position. Second value: vertical position */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Edge offsets values */
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
  - : One to four values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given.

## Description

The `mask-position` property enables defining the position of each mask layer. An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the `mask-image` property value (even if a value is `none`).

Each `mask-position` value in the comma-separated list of values is matched up with an associated mask layer as defined by the list of `mask-image` values, in order. If the number of values in the two properties differs:

- If `mask-position` has more values than mask-image, the excess values of `mask-position` are not used.
- If `mask-position` has fewer values than mask-image, the `mask-position` values are repeated.

Each `mask-position` defines the associated mask layer's position relative to the associated {{cssxref("mask-origin")}} value. The values of the `mask-origin` are similarly matched up with the `mask-image` values, in order, with excess values being unused or repeating the values if there is an under-count. This means each mask layer has both an associated `mask-origin` and `mask-position` value. If no `mask-origin` is set, the value defaults to `padding-box` meaning the origin of each `mask-position` is the element's [padding-box](/en-US/docs/Web/CSS/box-edge#padding-box).

### One-value syntax

If only one value is specified, the second value is assumed to be `center`. If the single value is a `<length>` or `<percentage>`, that value defines the position of the mask along the horizontal axis, with the mask being vertically centered within the origin box. For example, `mask-position: 0%;` is equal to `mask-position: 0% center`.

If you are using a keyword for positioning, the axis of the single value doesn't matter as the other value will resolve to `center`. While the default of `mask-position` is `0% 0%` which equates to `mask-position: top left`, the declaration `mask-position: top;` is equal to `mask-position: top center;`, `mask-position: left;` is equal to `mask-position: center left`, and `mask-position: center;` is equal to `mask-position: center center`.

If the value is a {{cssxref("&lt;length&gt;")}} value, it represents the horizontal position as an offset from the left edge of the mask positioning. A positive value represent an offset inward from the left edge of the box container. The position can be set outside of the element's box as a negative value is an outward offset that places the item off from the left edge of the container.

#### Percentage values

If the value is a {{cssxref("&lt;percentage&gt;")}}, the value is also the horizontal position value relative to the width of the container, positioned relative to the left edge, but the offset is not from the edge of the mask to the edge of the box, but rather, the mask image dimension is [subtracted from the container's dimension](/en-US/docs/Web/CSS/background-position#regarding_percentages), and then a percentage of the resulting value is used as the direct offset from the box's left edge, which is the same as [percentage values for `background-position`](/en-US/docs/Web/CSS/background-position#regarding_percentages). The equation is:

`(container dimension - mask dimension) \* (position %) = (dimension offset value)`

Given a mask that is `100px` wide and and origin box is `1000px` wide, setting `mask-postion: 10%;`, the equivalent of `10% 50%`, means that the point 10% across and 50% down the mask is to be placed at the point 10% across and 50% down the box container. The mask is vertically centered at `90px` from the left edge (`(1000 - 100) * 10% = 90`). If the left offset had been `0%`, the left edge of mask would be on the left of the container (`(1000 - 100) * 0% = 0`). If the left offset had been `100%`, the right edge of mask would be on the right of the container because the left offset would be the mask-size width away from the right edge (`(1000 - 100) * 100% = 900`).

### Two-value syntax

The two value `<position>` specifies the position of the mask image inside its mask positioning area with length and percentage values defaulting to being offsets from the `left` and `top`. If the two values are {{cssxref("&lt;length&gt;")}} values, {{cssxref("&lt;percentage&gt;")}} values, or the keyword `center`, the first value represents the horizontal position as an offset from the left edge of the mask positioning area and the second value the vertical position as an offset from it's top edge, with [percentages being offset](#percentage-values) by the masks dimension. If {{cssxref("&lt;percentage&gt;")}} values are specified, the first value is also the horizontal position value relative to the left edge and the second value

A pair of axis-specific keywords can be reordered as can an axis-spedific keywork and a length or percentage, but two length or percentage values are not interchangeable.
If one of the two values is `top`, `right`, `bottom`, or `left`, the order of the two values doesn't matter. Any `center` or `<length-percentage>` value in the pair of values will be applied to the other dimension.

### Four-value syntax

The four-value syntax is the same as the two value syntax, except the `<length>` and `<percentage>` values are offsets from the edge specified, not necessary the top or left edge. The four-value syntax allows changing the order and changing the offset edge.

For example, while `mask-position: 1em 2em` is a `1em` horizontal offset from the left box edge and a `2em` vertical offset from the top edge, `mask-position: top 1em left 2em` changes the order, being a `2em` horizontal offset from the left edge and a `1em` vertical offset from the top edge.

Usually the four-value syntax is used to offset from the bottom and/or right, with `mask-position:  bottom 10px right 20px` represents a `10px` vertical offset up from the bottom edge and a `20px` horizontal offset leftward from the right edge.

Unlike the `<bg-position>` data type values for {{cssxref("background-position")}}, the `<position>` values for `mask-position` do not allow for a 3-value syntax and do not allow offsetting from `center`. When offsetting the mask from the `bottom` or `right`, the `mask-position` requires all four values (`top` or `bottom`, `left` or `right`, and two length or percentage values) to be declared.

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
