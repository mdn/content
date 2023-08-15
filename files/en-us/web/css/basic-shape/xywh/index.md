---
title: xywh()
slug: Web/CSS/basic-shape/xywh
page-type: css-function
browser-compat: css.types.basic-shape.xywh
---

{{CSSRef}}

The **`xywh()`** [CSS](/en-US/docs/Web/CSS) function creates a rectangle at the specified offsets from the top and left edges of the reference box, with the specified width and height dimensions. It is a basic shape function of the {{cssxref("&lt;basic-shape&gt;")}} [data type](/en-US/docs/Web/CSS/CSS_Types). You can use the `xywh()` function in CSS properties such as {{cssxref("offset-path")}} to create the rectangular path along which an element moves and in {{cssxref("clip-path")}} to define the shape of the clipping region.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0px 1% 2px 3em);
```

### Values

- `<length-percentage>`
  - : Specifies the {{cssxref("&lt;length-percentage&gt;")}} values for the `x` and `y` coordinates of the rectangle.
- `<length-percentage [0,∞]>`
  - : Specifies non-negative {{cssxref("&lt;length-percentage&gt;")}} values for the width and height of the rectangle. The minimum value can be zero, and the maximum value has no limit.
- `round <border-radius>`
  - : Specifies the radius of the rounded corners of the rectangle using the same syntax as the CSS [border-radius](/en-US/docs/Web/CSS/border-radius) shorthand property. This parameter is optional.

## Examples

### Creating offset-path using xywh()

In the example below, the {{cssxref("offset-path")}} property uses the `xywh()` function to define the shape of the path on which the element, a magenta box in this case, moves. Two different scenarios are shown, each with different values for the `xywh()` function.

```html
<div class="container">
  Rectangular path 1
  <div class="path xywh-path-1"></div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path xywh-path-2"></div>
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

.xywh-path-1 {
  background-color: magenta;
  offset-path: xywh(20% 30% 150px 100% round 20%);
}

.xywh-path-2 {
  background-color: magenta;
  offset-path: xywh(30px 30% 100px 80px);
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

{{EmbedLiveSample("Creating offset-path using xywh", "100%", 400)}}

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
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
