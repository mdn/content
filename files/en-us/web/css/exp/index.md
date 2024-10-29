---
title: exp()
slug: Web/CSS/exp
page-type: css-function
browser-compat: css.types.exp
---

{{CSSRef}}

The **`exp()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that takes an number as an argument and returns the mathematical constant `e` raised to the power of the given number.

The mathematical constant [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>) is the base of natural logarithms, and is approximately `2.718281828459045`.

The `exp(number)` function contains a calculation which returns the same value as {{CSSxRef("pow", "pow(e, number)")}}.

## Syntax

```css
/* A <number> value */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### Parameters

The `exp(number)` function accepts only one value as its parameter.

- `number`
  - : A calculation which resolves to a {{CSSxRef("number")}}. Representing the value to be raised by a power of `e`.

### Return value

Returns a non-negative {{CSSxRef("number")}} representing e<sup>number</sup>, which is the result of calculating `e` raised to the power of `number`.

- If `number` is `-Infinity`, the result is `0`.
- If `number` is `0`, the result is `1`.
- If `number` is `1`, the result is `e` (i.e. `2.718281828459045`).
- If `number` is `Infinity`, the result is `Infinity`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Rotate elements

The `exp()` function can be used to {{CSSxRef("transform-function/rotate", "rotate")}} elements as it return a {{CSSxRef("number")}}.

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
  transform: rotate(calc(1turn * exp(-1))); // 0.3678794411714423turn
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); // 0.4723665527410147turn
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); // 0.6065306597126334turn
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); // 0.7788007830714049turn
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); // 1turn
}
```

#### Result

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

### Scale headings by fixed ratio

The `exp()` function can be useful for strategies like CSS modular scale, which relates all the font-sizes on a page to each other by a fixed ratio.

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * exp(1.25)); // 3.4903429574618414rem
}
h2 {
  font-size: calc(1rem * exp(1)); // 2.718281828459045rem
}
h3 {
  font-size: calc(1rem * exp(0.75)); // 2.117000016612675rem
}
h4 {
  font-size: calc(1rem * exp(0.5)); // 1.6487212707001282rem
}
h5 {
  font-size: calc(1rem * exp(0.25)); // 1.2840254166877414rem
}
h6 {
  font-size: calc(1rem * exp(0)); // 1rem
}
```

#### Result

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
