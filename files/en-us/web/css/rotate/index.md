---
title: rotate
slug: Web/CSS/rotate
page-type: css-property
browser-compat: css.properties.rotate
---

{{CSSRef}}

The **`rotate`** [CSS](/en-US/docs/Web/CSS) property allows you to specify rotation transforms individually and independently of the {{CSSxRef("transform")}} property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.

{{InteractiveExample("CSS Demo: rotate")}}

```css interactive-example-choice
rotate: none;
```

```css interactive-example-choice
rotate: -45deg;
```

```css interactive-example-choice
rotate: z 45deg;
```

```css interactive-example-choice
rotate: x 45deg;
```

```css interactive-example-choice
rotate: y 45deg;
```

```css interactive-example-choice
rotate: 3 0.5 2 45deg;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntax

```css
/* Keyword values */
rotate: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;

/* Global values */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

### Values

- angle value
  - : An {{CSSxRef("&lt;angle&gt;")}} specifying the angle to rotate the affected element through, around the Z axis. Equivalent to a `rotate()` (2D rotation) function.
- x, y, or z axis name plus angle value
  - : The name of the axis you want to rotate the affected element around (`x`, `y`, or `z`), plus an {{CSSxRef("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotateX()`/`rotateY()`/`rotateZ()` (3D rotation) function.
- vector plus angle value
  - : Three {{CSSxRef("&lt;number&gt;")}}s representing an origin-centered vector that defines a line around which you want to rotate the element, plus an {{CSSxRef("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotate3d()` (3D rotation) function.
- `none`
  - : Specifies that no rotation should be applied.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rotating an element on hover

The following example shows how to use the `rotate` property to rotate an element along various axes on hover.
The first box rotates 90 degrees on the Z axis hover, the second rotates 180 degrees on the Y axis on hover, and the third rotates 360 degrees on hover around a vector defined by coordinates.

#### HTML

```html
<div class="box" id="box1">rotate Z</div>
<div class="box" id="box2">rotate Y</div>
<div class="box" id="box3">vector & angle</div>
```

#### CSS

```css
.box {
  display: inline-block;
  margin: 1em;
  min-width: 6.5em;
  line-height: 6.5em;
  text-align: center;
  transition: 1s ease-in-out;
  border: 0.25em dotted;
}

#box1:hover {
  rotate: 90deg;
}

#box2:hover {
  rotate: y 180deg;
}

#box3:hover {
  rotate: 1 2 1 360deg;
}
```

#### Result

{{EmbedLiveSample("Rotating_an_element_on_hover", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}

Note: `skew` is not an independent `transform` value
