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
browser-compat: css.types.cos
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}

The **`cos()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the cosine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. That is, `cos(45deg)`, `cos(0.125turn)`, and `cos(3.14159 / 4)` all represent the same value, approximately `.707`.

## Syntax

```css
width: calc( cos(-45deg) * 1px );
```

### Argument

The `cos(A)` function accepts only one expression as its argument.

- `A`
  - : The argument specified as a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. If `A` is `infinite`, the result is `NaN`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Keep rotated element size

When the element is rotated using {{cssxref("transform-function/rotate", "rotate()")}}, it goes beyond its initial size. To fix this, we will use `cos()` to update the element size.

For example, if you rotate a `100px`/`100px` square `45deg`, the diamond it creates will be wider and taller than the original square. To shrink the diamond into the box allotted for the original square, you would have to scale down the diamond using this formula: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. You need to also adjust the {{cssxref("transform-origin")}} and add {{cssxref("transform-function/translate", "translate()")}} to correct the position:

```html hidden
<div class="original-square"></div>
<div class="rotated-diamond"></div>
```

```css
div.original-square {
  width: 100px;
  height: 100px;
  background-color: red;
}

div.rotated-diamond {
  width: calc( 100px * cos(45deg) );
  height: calc( 100px * cos(45deg) );
  margin-block-start: calc( 100px / 4 * cos(45deg) );
  margin-block-end: calc( 100px / 4 * cos(45deg) );
  transform:
    translate( calc( 100px / 4 * cos(45deg) ) )
    rotate(45deg);
  transform-origin: center;
  background-color: red;
}
```

{{EmbedLiveSample('keep_rotated_element_size', '100%', '300px')}}

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
