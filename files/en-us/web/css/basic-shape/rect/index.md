---
title: rect()
slug: Web/CSS/basic-shape/rect
page-type: css-function
browser-compat: css.types.basic-shape.rect
---

{{CSSRef}}

The **`rect()`** [CSS](/en-US/docs/Web/CSS) function creates a rectangle at the specified distance from the top and left edges of the containing block. It is a basic shape function of the {{cssxref("&lt;basic-shape&gt;")}} [data type](/en-US/docs/Web/CSS/CSS_Types). CSS properties such as {{cssxref("clip-path")}} and {{cssxref("offset-path")}} use the `rect()` function to create the rectangular shape path along which an element moves.

## Syntax

```css
offset-path: rect(0px 1% auto 3% round 0 1px);
```

### Values

The inset rectangle is specified using four values, going clockwise starting with the top edge. Each value is a `<length>`, a `<percentage>`, or the keyword `auto`.

- `<length-percentage>`

  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} value for the distance of the top, right, bottom, and left edges of the rectangle from the containing block. The first (top) and third (bottom) values are distances from the top edge of the containing block, and the second (right) and fourth (left) values are distances from the left edge of the containing block. The second (right) and third (bottom) values are limited by the fourth (left) and second (top) values, respectively, to correct the bottom edge from crossing over the top edge and right edge from crossing over the left edge. For example, `rect(10px 0 0 20px)` gets corrected to `rect(10px 20px 10px 20px)`.

- `auto`

  - : Makes the edge for which this value is used to coincide with the corresponding edge of the containing block. If `auto` is used for the first (top) or fourth (left) value, the value of `auto` is equivalent to 0%, and if used for the the second (right) or third (bottom) value, `auto` value is equivalent to 100%.

- `round <border-radius>`
  - : Specifies the radius of the rounded corners of the rectangle using the {{cssxref("border-radius")}} shorthand syntax. This parameter is optional.

## Examples

### Creating offset-path using rect()

In this example, the {{cssxref("offset-path")}} property uses the `rect()` function to define the shape of the path on which the element, red box in this case, moves. Three different scenarios are shown, each using different values for the `rect()` function.

```html
<div class="container">
  Rectangular path 1
  <div class="path rect-path-1"></div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path rect-path-2"></div>
</div>
<div class="container">
  Rectangular path 3
  <div class="path rect-path-3"></div>
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
  width: 50px;
  height: 50px;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  background-color: red;
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  background-color: red;
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  background-color: red;
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

{{EmbedLiveSample("Creating an offset-path using rect", "100%", 300)}}

- Path 1 rectangle specifies distances of all edges (top, right, bottom, and left) from the containing block. Top and bottom values are distances from the top edge of the containing block. Right and left values are distances from the left edge of the containing block. In addition, the corner of the rectangle is rounded`20%`, so the element moving on this path follows the rounded corner.
- Path 2 is similar to path 1 except that the right value is `auto`. As a result, the right edge of the rectangle matches the right edge of the containing block.
- Path 3 omits the corner rounding. Also, both right and left values are set to `auto`.

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
