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

The **`cos()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the cosine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a `<number>` or an `<angle>` by interpreting the result of the argument as radians. That is, `cos(45deg)`, `cos(0.125turn)`, and `cos(3.14159 / 4)` all represent the same value, approximately `.707`.

## Syntax

```css
width: calc( cos(-45deg) * 1px );
```

The `cos()` function takes only one expression as its argument.

### Formal syntax

{{CSSSyntax}}

## Examples

### Element Size

For example, when creating a 100x100 box based on external parameters, in this case `cos(0deg)`. Thus `cos(0deg)` will return `1` making the box `100px` width and `100px` height.

```css
div {
  background-color: red;
  width: calc( cos(0deg) * 100px );
  height: calc( cos(0deg) * 100px );
}
```

### Element Rotation

Another use-case is to control the {{cssxref("rotate()")}} property of the element.

```css
div {
  transform: rotate( cos(45deg) );
}
```

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
