---
title: sqrt()
slug: Web/CSS/sqrt
page-type: css-function
browser-compat: css.types.sqrt
---

{{CSSRef}}

The **`sqrt()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the [square root](https://en.wikipedia.org/wiki/Square_root) of a number.

The function `pow(x, 0.5)` is equivalent to `sqrt(x)`.

## Syntax

```css
/* A <number> value */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### Parameters

The `sqrt(x)` function accepts only one value as its parameter.

- `x`
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} greater than or equal to 0.

### Return value

Returns a {{cssxref("&lt;number&gt;")}} which is the square root of `x`.

- if `x` is `+∞`, the result is `+∞`.
- If `x` is `0⁻`, the result is `0⁻`.
- If `x` is less than `0`, the result is `NaN`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Scale sizes based on square root

This example shows how you can use the `sqrt()` function to calculate sizes.

#### HTML

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) to define the sizes to be used. First, we declare the first size (`--size-0`), which is then used to calculate the other sizes.

- `--size-1` is calculated by multiplying the value of `--size-0` (50px) by the square root of 4 (2), which results in 100px.
- `--size-2` is calculated by multiplying the value of `--size-0` (50px) by the square root of 9 (3), which results in 150px.
- `--size-3` is calculated by multiplying the value of `--size-0` (50px) by the square root of 16 (4), which results in 200px.

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /*  100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /*  150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /*  200px */
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

{{EmbedLiveSample('Scale sizes based on square root', '100%', '220px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
