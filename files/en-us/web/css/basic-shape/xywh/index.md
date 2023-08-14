---
title: xywh()
slug: Web/CSS/basic-shape/xywh
page-type: css-function
browser-compat: css.types.basic-shape.xywh
---

{{CSSRef}}

The **`xywh()`** [CSS](/en-US/docs/Web/CSS) function defines a rectangle at the specified inset distances from the top and left edges of the reference box, with the specified width and height dimensions. It is a basic shape function used to define one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types). CSS properties such as {{cssxref("clip-path")}} and {{cssxref("offset-path")}} use the `xywh()` function to create a rectangular shape.

## Syntax

```css
offset-path: xywh(0px 1% 2px 3% round 0px 1px 2% 3px);
```

### Values

- `<length-percentage>`
  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} values for the `x` and `y` coordinates of the rectangle element.
- `<length-percentage [0,∞]>`
  - : Specifies non-negative {{cssxref("&lt;length-percentage&gt;")}} values for the width and height of the rectangle element. The minimum value can be zero, and the maximum value has no limit.
- `round <border-radius>`
  - : Specifies the radius of the rounded corners of the rectangle using the {{cssxref("border-radius")}} shorthand syntax. This parameter is optional.

## Examples

### Creating a rectangle using xywh()

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`inset()`](/en-US/docs/Web/CSS/basic-shape#inset) function
- [`rect()`](/en-US/docs/Web/CSS/basic-shape#rect) function
- {{cssxref("clip-path")}} property
- {{cssxref("offset-path")}} property
- {{cssxref("&lt;basic-shape&gt;")}} data type
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
