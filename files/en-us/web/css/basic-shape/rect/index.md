---
title: rect()
slug: Web/CSS/basic-shape/rect
page-type: css-function
browser-compat: css.types.basic-shape.rect
---

{{CSSRef}}

The **`rect()`** [CSS](/en-US/docs/Web/CSS) function defines a rectangle at the specified inset distances from the top and left edges of the reference box. It is a basic shape function used to define one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types).

## Syntax

```css
clip-path: rect(0px 1% auto 3% round 0 1px);
```

### Values

The inset distances of rectangle edges from the reference box are specified using four values. Each value is a `<length>`, a `<percentage>`, or the keyword `auto`.

- `<length-percentage>`

  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} values for the position of top, right, bottom, and left edges of the rectangle element. The first (top) and third (bottom) values are distances from the top edge of the reference box, and the second (right) and fourth (left) values are distances from the left edge of the reference box. The second (right) and third (bottom) values are limited by the fourth (left) and second (top) values, respectively, to correct the bottom edge from crossing over the top edge and right edge from crossing over the left edge. For example, `rect(10px 0 0 20px)` gets corrected to `rect(10px 20px 10px 20px)`.

- `auto`

  - : Makes the rectangle edge for which this value is used to coincide with the corresponding edge of the reference box. If `auto` is used for the first (top) or fourth (left) value, the value of `auto` is equivalent to 0%, and if used for the the second (right) or third (bottom) value, the value of `auto` is equivalent to 100%.

- `round <border-radius>`
  - : Specifies the radius of the rounded corners of the rectangle using the {{cssxref("border-radius")}} shorthand syntax. This parameter is optional.

## Examples

### Creating a rectangle using rect()

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`inset()`](/en-US/docs/Web/CSS/basic-shape#inset) function
- [`xywh()`](/en-US/docs/Web/CSS/basic-shape#xywh) function
- {{cssxref("clip-path")}} property
- {{cssxref("offset-path")}} property
- {{cssxref("&lt;basic-shape&gt;")}} data type
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
