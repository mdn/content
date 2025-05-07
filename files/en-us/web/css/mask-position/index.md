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
mask-position: left;
mask-position: center;
mask-position: right;
mask-position: top;
mask-position: bottom;
mask-position: x-start;
mask-position: x-end;
mask-position: y-start;
mask-position: y-end;
mask-position: block-start;
mask-position: block-end;
mask-position: inline-start;
mask-position: inline-end;

/* Two keyword values */
mask-position: left center;
mask-position: right top;
mask-position: x-start y-end;
mask-position: block-end inline-start;

/* Single <position> values */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* <position> values */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Edge offsets values */
mask-position: bottom 10px right 20px;
mask-position: right 3em bottom 10px;
mask-position: bottom 10px right;
mask-position: block-start inline-end 10px;

/* Multiple values */
mask-position:
  top left,
  y-end 10px x-end 10px;
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

The `mask-position` property enables defining the position of each mask layer. An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the `mask-image` property value (even if a value is `none`). Each `mask-position` value in the comma-separated list of values is matched up with the `mask-image` values, in order. If the number of values in the two properties differs, any excess `mask-position` values are not used, or, if the `mask-position` property has fewer values than `mask-image` values, the `mask-position` values are repeated.

Each `mask-position` defines the associated mask layer's position relative to the associated {{cssxref("mask-origin")}} value. The values of the `mask-origin`, which defaults to `padding-box`, are similarly matched up with the `mask-image` values, in order, with excess values being unused or repeating the values if there is an under-count. This means each mask layer has an associated `mask-origin` and `mask-position` value.

If only one value is specified, the second value is assumed to be `center`. While the default of `mask-position` is `0% 0%` which equates to `mask-position: top left`, the declaration `mask-position: top;` is equal o `mask-position: top center;`, `mask-position: left;` is equal to `mask-position: center left`, and `mask-position: 0%;` is equal to `mask-position: 0% center`.

The two value `<position>` specifies the position of the mask image inside its mask positioning area defaulting to the `left` and `top`. If two {{cssxref("&lt;length&gt;")}} values are specified, the first value represents the horizontal position as an offset from the left edge of the mask positioning area and the second value the vertical position as an offset from it's top edge. With two {{cssxref("&lt;percentage&gt;")}} values, the first value is also the horizontal position value and the second is the vertical value, also from the left and top edges, but the offset is not from the edge of the mask to the edge of the box, but rather, the mask image dimension is [subtracted from the container's dimension](/en-US/docs/Web/CSS/background-position#regarding_percentages), and then a percentage of the resulting value is used as the direct offset from the box edge, which is the same as [percentage values for `background-position`](en-US/docs/Web/CSS/background-position#regarding_percentages).

The four-value syntax is the same as the two value syntax, except the `<length>` and `<percentage>` values are offsets from the edge specified, not necessary the top or left edge. The four-value syntax allows changing the order and changing the offset edge. While `mask-position: 1em 2em` is a `1em` horizontal offset from the left and a `2em` vertical offset from the top, `mask-position: top 1em left 2em` changes the order, being a `2em` horizontal offset from the left and a `1em` vertical offset from the top. Usually the four-value syntax is used to offset from the bottom and/or right, with `mask-position: right 1em bottom 2em` bottom 10px right 20px represents a 10px vertical offset up from the bottom edge and a 20px horizontal offset leftward from the right edge.

If both keywords are one of start or end, the first one represents the block axis and the second the inline axis.

Note: A pair of axis-specific keywords can be reordered, while a combination of keyword and length or percentage cannot. So center left or inline-start block-end is valid, while 50% left is not. start and end aren’t axis-specific, so start end and end start represent two different positions.

Positive values represent an offset inward from the edge of the alignment container. Negative values represent an offset outward from the edge of the alignment container.

Note that the position can be set outside of the element's box.

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
