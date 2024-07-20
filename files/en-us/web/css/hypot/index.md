---
title: hypot()
slug: Web/CSS/hypot
page-type: css-function
browser-compat: css.types.hypot
---

{{CSSRef}}

The **`hypot()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the [square root](https://en.wikipedia.org/wiki/Square_root) of the sum of squares of its parameters.

While {{CSSxRef("pow")}} and {{CSSxRef("sqrt")}} only work on unitless numbers, `hypot()` accepts values with units, but they all must have the same [type](/en-US/docs/Web/CSS/CSS_Types).

## Syntax

```css
/* A <number> value */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### Parameters

The `hypot(x [, ...]#)` function accepts one or more comma-separated calculations as its parameters.

- `x`, `x2`, ..., `xN`
  - : A calculation that resolves to a {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, or {{CSSxRef("&lt;percentage&gt;")}}.

### Return value

Returns a {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, or {{CSSxRef("&lt;percentage&gt;")}} (based on the inputs), which is the square root of the sum of squares of its parameters.

- If any of the inputs is `infinite`, the result is `+∞`.
- If a single parameter is provided, the result is the absolute value of its input. `hypot(2em)` and `hypot(-2em)` both resolve to `2em`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Sizes based on hypot function

This example shows how you can use the `hypot()` function to calculate sizes.

#### HTML

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) to define the sizes to be used. First we declare the first size (`--size-0`) which is then used to calculate the other sizes.

- `--size-1` is calculated with the hypotenuse of `--size-0` (100px). This takes the square value and, as there is no other value, returns the square root of the value, which results in 100px.
- `--size-2` is calculated with the hypotenuse of `--size-0` (100px), twice. This takes the square of the value (100px \* 100px = 10000px<sup>2</sup>) and adds it to the square of `--size-0` again (10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>) and returns the square root of the sum (√(20000px<sup>2</sup>)), which results in 141.42px.
- `--size-3` is calculated with the hypotenuse `--size-0` \* 1.5 (150px) and `--size-0` \* 2 (200px). The result is the square root of the sum of their squares: The values are squared (22500px<sup>2</sup> and 40000px<sup>2</sup>) and added together (62500px<sup>2</sup>), with the sum square-rooted (√(62500px<sup>2</sup>)) being 250px.

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
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

{{EmbedLiveSample('Sizes based on hypot function', '100%', '270px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
