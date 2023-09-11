---
title: <gradient>
slug: Web/CSS/gradient
page-type: css-type
browser-compat: css.types.image.gradient
---

{{CSSRef}}

The **`<gradient>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is a special type of {{cssxref("&lt;image&gt;")}} that consists of a progressive transition between two or more colors.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

A CSS gradient has [no intrinsic dimensions](/en-US/docs/Web/CSS/image#description); i.e., it has no natural or preferred size, nor a preferred ratio. Its concrete size will match the size of the element to which it applies.

## Syntax

The `<gradient>` data type is defined with one of the function types listed below.

### Linear gradient

Linear gradients transition colors progressively along an imaginary line. They are generated with the {{cssxref("gradient/linear-gradient", "linear-gradient()")}} function.

### Radial gradient

Radial gradients transition colors progressively from a center point (origin). They are generated with the {{cssxref("gradient/radial-gradient", "radial-gradient()")}} function.

### Repeating gradient

Repeating gradients duplicate a gradient as much as necessary to fill a given area. They are generated with the {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} and {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} functions.

### Conic gradient

Conic gradients transition colors progressively around a circle. They are generated with the {{cssxref("gradient/conic-gradient", "conic-gradient()")}} function.

## Interpolation

As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing. (Be aware that older browsers may not use this behavior when using the [transparent keyword](/en-US/docs/Web/CSS/named-color#transparent).)

## Formal syntax

{{csssyntax}}

## Examples

### Linear gradient example

A simple linear gradient.

```html hidden
<div class="linear-gradient">Linear gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('Linear_gradient_example', 240, 120)}}

### Radial gradient example

A simple radial gradient.

```html hidden
<div class="radial-gradient">Radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('Radial_gradient_example', 240, 120)}}

### Repeating gradient examples

Simple repeating linear and radial gradient examples.

```html hidden
<div class="linear-repeat">Repeating linear gradient</div>
<br />
<div class="radial-repeat">Repeating radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    lightpink,
    lightpink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    powderblue,
    powderblue 8px,
    white 8px,
    white 16px
  );
}
```

{{EmbedLiveSample('Repeating_gradient_examples', 240, 220)}}

### Conic gradient example

A simple conic gradient example. Note that this isn't supported widely across browser as of yet.

```html hidden
<div class="conic-gradient">Conic gradient</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('Conic_gradient_example', 240, 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradient functions: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Basic Data Types](/en-US/docs/Web/CSS/CSS_Types)
- [CSS Units and Values](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
