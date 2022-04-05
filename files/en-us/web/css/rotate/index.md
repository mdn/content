---
title: rotate
slug: Web/CSS/rotate
tags:
  - CSS
  - CSS Property
  - Reference
  - Rotate
  - Transforms
  - angle
  - recipe:css-property
  - rotation
browser-compat: css.properties.rotate
---
{{CSSRef}}

The **`rotate`** [CSS](/en-US/docs/Web/CSS) property allows you to specify rotation transforms individually and independently of the {{CSSxRef("transform")}} property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.

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
  - : The name of the axis you want to rotate the affected element around (`"x"`, "`y`", or "`z"`), plus an {{CSSxRef("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotateX()`/`rotateY()`/`rotateZ()` (3D rotation) function.
- vector plus angle value
  - : Three {{CSSxRef("&lt;number&gt;")}}s representing an origin-centered vector that defines a line around which you want to rotate the element, plus an {{CSSxRef("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotate3d()` (3D rotation) function.
- `none`
  - : Specifies that no rotation should be applied.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rotate an element on hover

#### HTML

```html
<div>
  <p class="rotate">Rotation</p>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.rotate {
  transition: rotate 1s;
}

div:hover .rotate {
  rotate: 1 -0.5 1 180deg;
}
```

#### Result

{{EmbedLiveSample("Rotate_an_element_on_hover")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}

Note: `skew` is not an independent `transform` value
