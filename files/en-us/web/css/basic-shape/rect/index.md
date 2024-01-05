---
title: rect()
slug: Web/CSS/basic-shape/rect
page-type: css-function
browser-compat: css.types.basic-shape.rect
---

{{CSSRef}}

The **`rect()`** [CSS](/en-US/docs/Web/CSS) function creates a rectangle at the specified distance from the top and left edges of the containing block. It is a basic shape function of the {{cssxref("&lt;basic-shape&gt;")}} [data type](/en-US/docs/Web/CSS/CSS_Types). You can use the `rect()` function in CSS properties such as {{cssxref("offset-path")}} to create the rectangular path along which an element moves and in {{cssxref("clip-path")}} to define the shape of the clipping region.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Values

The inset rectangle is defined by specifying four offset values, starting with the top edge offset and going clockwise, and an optional `round` keyword with the `border-radius` parameter to add rounded corners to the rectangle. Each offset value can be either a `<length>`, a `<percentage>`, or the keyword `auto`.

- `<length-percentage>`

  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} value of the distance of the top, right, bottom, or left edge of the rectangle from the top or left edge of the containing block. The first (top) and third (bottom) values are distances from the top edge of the containing block, and the second (right) and fourth (left) values are distances from the left edge of the containing block. The second (right) and third (bottom) values are clamped by the fourth (left) and second (top) values, respectively, to prevent the bottom edge from crossing over the top edge and right edge from crossing over the left edge. For example, `rect(10px 0 0 20px)` is clamped to `rect(10px 20px 10px 20px)`.

- `auto`

  - : Makes the edge for which this value is used to coincide with the corresponding edge of the containing block. If `auto` is used for the first (top) or fourth (left) value, the value of `auto` is `0`, and if used for the second (right) or third (bottom) value, the value of `auto` is `100%`.

- `round <'border-radius'>`
  - : Specifies the radius of the rounded corners of the rectangle using the same syntax as the CSS [`border-radius`](/en-US/docs/Web/CSS/border-radius) shorthand property. This parameter is optional.

## Examples

### Creating offset-path using rect()

In this example, the {{cssxref("offset-path")}} property uses the `rect()` function to define the shape of the path on which the element, a red box in this case, moves. Three different scenarios are shown, each using different values for the `rect()` function. The arrow inside the boxes points to the right edge of the box.

```html
<div class="container">
  Rectangular path 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Rectangular path 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Result

{{EmbedLiveSample("Creating an offset-path using rect", "100%", 400)}}

- The path 1 rectangle specifies the distances of the four edges (top, right, bottom, and left) from the containing block. The top and bottom values are distances from the top edge of the containing block. The right and left values are distances from the left edge of the containing block. In addition, the corner of the rectangle is rounded at `20%`, making the red box element follow the rounded corners as it moves along this path. Notice how the arrow inside the box follows curve at the rectangular path corners.
- The path 2 rectangle is similar to the path 1 rectangle, except that the right value is `auto`, which is equal to the value `100%`. This causes the right edge of the rectangle to match the right edge of the containing block, creating a wider rectangle than path 1.
- The path 3 rectangle specifies both the left and right edge parameters as `auto` and omits the `round <'border-radius'>` parameter. This creates a rectangle that has the width of the containing block and rectangular corners instead of rounded corners like in path 1 and path 2 rectangles. Notice the movement of the arrow inside this box at the corners.

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
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
