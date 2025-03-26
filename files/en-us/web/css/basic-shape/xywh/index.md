---
title: xywh()
slug: Web/CSS/basic-shape/xywh
page-type: css-function
browser-compat: css.types.basic-shape.xywh
---

{{CSSRef}}

The **`xywh()`** [CSS](/en-US/docs/Web/CSS) function creates a rectangle using the specified distances from the left (`x`) and top (`y`) edges of the containing block and the specified width (`w`) and height (`h`) of the rectangle. It is a basic shape function of the {{cssxref("&lt;basic-shape&gt;")}} [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). You can use the `xywh()` function in CSS properties such as {{cssxref("offset-path")}} to create the rectangular path along which an element moves and in {{cssxref("clip-path")}} to define the shape of the clipping region.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Values

- `<length-percentage>`
  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} values for the `x` and `y` coordinates of the rectangle.
- `<length-percentage [0,∞]>`
  - : Specifies non-negative {{cssxref("&lt;length-percentage&gt;")}} values for the width and height of the rectangle. The minimum value can be zero, and the maximum value has no limit.
- `round <'border-radius'>`
  - : Specifies the radius of the rounded corners of the rectangle using the same syntax as the CSS [`border-radius`](/en-US/docs/Web/CSS/border-radius) shorthand property. This parameter is optional.

## Formal syntax

{{CSSSyntax}}

## Examples

### Creating offset-path using xywh()

In the example below, the {{cssxref("offset-path")}} property uses the `xywh()` function to define the shape of the path on which the element, a magenta box in this case, moves. Two different scenarios are shown, each with different values for the `xywh()` function. The arrow inside the boxes points to the right edge of the box.

```html
<div class="container">
  Rectangular path 1
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path xywh-path-2">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 30px;
  text-align: center;
}

.path {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: magenta;
  animation: move 10s linear infinite;
}

.xywh-path-1 {
  offset-path: xywh(20px 20px 100% 100% round 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
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

{{EmbedLiveSample("Creating offset-path using xywh", "100%", 600)}}

- The path 1 rectangle is offset by `20px` from the left and top edges of the containing block. This path rectangle has the same dimension as the containing block, that is, the width is `100%` of the width of the containing block, and the height is `100%` of the height of the containing block. Notice how the arrow inside the box follows the `10%` curve (defined by `round 10%`) at the rectangular path corners.
- As the upper limit of both width and height in `xywh()` is infinity, setting the height to `200%` in the path 2 rectangle makes the generated rectangle twice as tall as the containing block. Notice how the arrow inside the box behaves at the corners when no `round <'border-radius'>` is specified.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("basic-shape/inset","inset()")}} function
- {{cssxref("basic-shape/rect","rect()")}} function
- {{cssxref("clip-path")}} property
- {{cssxref("offset-path")}} property
- {{cssxref("&lt;basic-shape&gt;")}} data type
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
