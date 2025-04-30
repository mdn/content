---
title: perspective-origin
slug: Web/CSS/perspective-origin
page-type: css-property
browser-compat: css.properties.perspective-origin
---

{{CSSRef}}

The **`perspective-origin`** [CSS](/en-US/docs/Web/CSS) property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the {{cssxref("perspective")}} property.

{{InteractiveExample("CSS Demo: perspective-origin")}}

```css interactive-example-choice
perspective-origin: center;
```

```css interactive-example-choice
perspective-origin: top;
```

```css interactive-example-choice
perspective-origin: bottom right;
```

```css interactive-example-choice
perspective-origin: -170%;
```

```css interactive-example-choice
perspective-origin: 500% 200%;
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
  perspective: 250px;
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

The **`perspective-origin`** and {{cssxref('perspective')}} properties are attached to the parent of a child transformed in 3-dimensional space, unlike the [`perspective()`](/en-US/docs/Web/CSS/transform-function/perspective) transform function which is placed on the element being transformed.

## Syntax

```css
/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Values

- _x-position_

  - : Indicates the position of the abscissa of the _vanishing point_. It can have one of the following values:

    - {{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the width of the element. The value may be negative.
    - `left`, a keyword being a shortcut for the `0` length value.
    - `center`, a keyword being a shortcut for the `50%` percentage value.
    - `right`, a keyword being a shortcut for the `100%` percentage value.

- _y-position_

  - : Indicates the position of the ordinate of the _vanishing point_. It can have one of the following values:

    - {{cssxref("&lt;length-percentage&gt;")}} indicating the position as an absolute length value or relative to the height of the element. The value may be negative.
    - `top`, a keyword being a shortcut for the `0` length value.
    - `center`, a keyword being a shortcut for the `50%` percentage value.
    - `bottom`, a keyword being a shortcut for the `100%` percentage value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the perspective origin

An example showing how to change `perspective-origin` is given in [Using CSS transforms > Changing the perspective origin](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/en-US/docs/Web/CSS/transform-function/perspective) function
