---
title: log()
slug: Web/CSS/log
page-type: css-function
browser-compat: css.types.log
---

{{CSSRef}}

The **`log()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the logarithm of a number.

The [logarithm, or log](https://en.wikipedia.org/wiki/Logarithm), is the inverse of {{CSSxRef("exp", "exponentiation")}}; it is the number that a fixed base has to be raised to in order to yield the number passed as the first parameter.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
