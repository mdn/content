---
title: log()
slug: Web/CSS/log
page-type: css-function
browser-compat: css.types.log
---

{{CSSRef}}

The **`log()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the logarithm of a number.

[Logarithm](https://en.wikipedia.org/wiki/Logarithm) is the inverse of exponentiation. It is the number that a fixed base has to be raised to in order to yield the number passed as the first parameter.

In CSS, when a single parameter is passed, the natural logarithm `e`, or approximately `2.7182818`, is used, though the base can be set to any value with an optional second parameter.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameters

The `log(value [, base]?)` function accepts two comma-separated values as its parameters.

- `value`

  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} greater than or equal to 0. Representing the value to be logarithmed.

- `base`
  - : Optional. A calculation which resolves to a {{cssxref("&lt;number&gt;")}} greater than or equal to 0. Representing the base of the logarithm. If not defined, the default logarithmic base `e` is used.

### Return value

The logarithm of `value`, when `base` is defined.

The natural logarithm (base `e`) of `value`, when `base` is not defined.

### Formal syntax

{{CSSSyntax}}

## Examples

### Sizes based on `log()` function

This example shows how you can use the `log()` function to calculate sizes.

#### HTML

```html
<div class="boxes">
  <div class="box zero">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) to define the sizes to be used. First, we declare the first size (`--size-0`), which is then used to calculate the other sizes.

- `--size-1` is calculated by multiplying `--size-0` (50px) by the value of `log(7.389)` (2) which results in 100px.
- `--size-2` is calculated by multiplying `--size-0` (50px) by the value of `log(8, 2)` (3) which results in 150px.
- `--size-3` is calculated by multiplying `--size-0` (50px) by the value of `log(625, 5)` (4) which results in 200px.

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * log(7.389)); /*  100px */
  --size-2: calc(var(--size-0) * log(8, 2)); /*  150px */
  --size-3: calc(var(--size-0) * log(625, 5)); /*  200px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

The sizes are then applied as the `width` and `height` values of the selectors.

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Result

{{EmbedLiveSample('Sizes based on log() function', '100%', '220px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
