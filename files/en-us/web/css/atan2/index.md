---
title: atan2()
slug: Web/CSS/atan2
page-type: css-function
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - atan2
browser-compat: css.types.atan2
---

{{CSSRef}}

The **`atan2()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the inverse tangent of two values between `-infinity` and `infinity`. The function accepts two arguments and returns the number of radians representing an {{cssxref("&lt;angle&gt;")}} between `-180deg` and `180deg`.

## Syntax

```css
/* Single <number> values */
transform: rotate(atan2(3, 2));

/* Single <dimension> values */
transform: rotate(atan2(1rem, -0.5rem));

/* Single <percentage> values */
transform: rotate(atan2(20%, -30%));

/* Other values */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Parameters

The `atan2(y, x)` function accepts two comma-separated values as its parameters. The values can be {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, or {{cssxref("&lt;percentage&gt;")}} types, but both must be the same type.

- `y`
  - : The y coordinate of the point. A calculation which resolves to a {{cssxref("&lt;number&gt;")}}, a {{cssxref("&lt;dimension&gt;")}}, or a {{cssxref("&lt;percentage&gt;")}}.
- `x`
  - : The x coordinate of the point. A calculation which resolves to a {{cssxref("&lt;number&gt;")}}, a {{cssxref("&lt;dimension&gt;")}}, or a {{cssxref("&lt;percentage&gt;")}}.

### Return value

Given two points `x` and `y`, the function `atan2(y, x)` calculates and returns the {{cssxref("&lt;angle&gt;")}} between the positive `x` axis and the ray from the origin to the point `(x, y)`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Rotate elements

The `atan2()` function can be used to {{cssxref("transform-function/rotate", "rotate")}} elements as it return an {{cssxref("&lt;angle&gt;")}}.

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

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
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
}
```

#### Result

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
