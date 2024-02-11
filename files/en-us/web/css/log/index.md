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

In this example, the width of each bar is relative to it's value on a [log<sub>10</sub> scale](https://en.wikipedia.org/wiki/Logarithmic_scale).

#### HTML

```html
<div class="bar" style="--value: 50">50</div>
<div class="bar" style="--value: 100">100</div>
<div class="bar" style="--value: 500">500</div>
<div class="bar" style="--value: 10000">10,000</div>
<div class="bar" style="--value: 2000000">2,000,000</div>
```

#### CSS

```css
.bar {
  width: calc(log(var(--value), 10) * 2em);
}
```

```css hidden
.bar {
  height: 2em;
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25em 0;
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
