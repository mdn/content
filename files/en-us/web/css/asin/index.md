---
title: asin()
slug: Web/CSS/asin
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - asin
  - Experimental
browser-compat: css.types.asin
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---

{{CSSRef}}{{SeeCompatTable}}

The **`asin()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the inverse sine of a number between `-1` and `1`. The function contains a single calculation that returns the number of radians representing an {{cssxref("&lt;angle&gt;")}} between `-90deg` and `90deg`.

## Syntax

```css
/* Single <number> values */
transform: rotate(asin(-0.2));
transform: rotate(asin(2 * 0.125));

/* Other values */
transform: rotate(asin(pi / 5));
transform: rotate(asin(e / 3));
```

### Parameter

The `asin(number)` function accepts only one value as its parameter.

- `number`
  - : A {{cssxref("&lt;number&gt;")}} between `-1` and `1`. When specifying a number less than `-1` or greater than `1`, or `NaN`, the result is `NaN`.

### Formal syntax

{{CSSSyntax}}

## Example

The `asin()` function can be used to {{cssxref("transform-function/rotate", "rotate")}} elements as it return an {{cssxref("&lt;angle&gt;")}}.

```html hidden
<div class="box"></div>
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
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
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}

div.box-1 {
  transform: rotate(asin(-0.2));
}

div.box-2 {
  transform: rotate(asin(2 * 0.125));
}

div.box-3 {
  transform: rotate(asin(pi / 5));
}

div.box-4 {
  transform: rotate(asin(e / 3));
}
```

{{EmbedLiveSample('example', '100%', '200px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
