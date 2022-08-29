---
title: cos()
slug: Web/CSS/cos
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - cos
  - Experimental
browser-compat: css.types.cos
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}{{SeeCompatTable}}

The **`cos()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the cosine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. That is, `cos(45deg)`, `cos(0.125turn)`, and `cos(3.14159 / 4)` all represent the same value, approximately `0.707`.

## Syntax

```css
/* Single <angle> values */
width: calc(cos(45deg) * 100px);
width: calc(cos(0.125turn) * 100px);
width: calc(cos(0.785398163rad) * 100px);

/* Single <number> values */
width: calc(cos(63.673) * 100px);
width: calc(cos(2 * 0.125) * 100px);

/* Other values */
width: calc(cos(pi) * 100px);
width: calc(cos(e / 2) * 100px);
```

### Parameter

The `cos(angle)` function accepts only one value as its parameter.

- `angle`
  - : A {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("&lt;angle&gt;")}}. When specifying `infinity`, `-infinity`, or `NaN`, the result is `NaN`.

### Formal syntax

{{CSSSyntax}}

## Example

The `cos()` function can be used to keep the size of a rotated box.

When the element is rotated using {{cssxref("transform-function/rotate", "rotate()")}}, it goes beyond its initial size. To fix this, we will use `cos()` to update the element size.

For example, if you rotate a `100px`/`100px` square `45deg`, the diamond it creates will be wider and taller than the original square. To shrink the diamond into the box allotted for the original square, you would have to scale down the diamond using this formula: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. You need to also adjust the {{cssxref("transform-origin")}} and add {{cssxref("transform-function/translate", "translate()")}} to correct the position:

```html hidden
<div class="original-square"></div>
<div class="rotated-diamond"></div>
<div class="rotated-scaled-diamond"></div>
```

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.original-square {
  width: 100px;
  height: 100px;
  background-color: blue;
}

div.rotated-diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}

div.rotated-scaled-diamond {
  width: calc( 100px * cos(45deg) );
  height: calc( 100px * cos(45deg) );
  margin: calc( 100px / 4 * cos(45deg) );
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
}
```

{{EmbedLiveSample('example', '100%', '200px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
