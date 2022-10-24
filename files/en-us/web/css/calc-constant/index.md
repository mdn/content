---
title: <calc-constant>
slug: Web/CSS/calc-constant
page-type: css-type
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
browser-compat: css.types.calc-constant
---

{{CSSRef}}

The **`<calc-constant>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents well-defined constants such as `e` and `pi` evaluated as {{cssxref("number")}} values.
These constants are supported for convenience in CSS so that authors do not have to manually write or calculate them.

Using `infinity` or `-infinity` can be used by authors to create large mock values rather than calculating or generating them through other means.
An expression like `calc(infinity * 1px)` can be used to create an infinite {{cssxref("length")}} value, for example.

## Syntax

The `<calc-constant>` type defines numeric constants used for calculations inside [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) (e.g., `rotate(calc(2 * pi))`).
When used outside of a calculation, they're treated like a keyword (e.g., `animation-name: pi` refers to an animation named "pi").

`NaN` is case-sensitive, but other CSS constants are case-insensitive (e.g., `calc(pi)`, `calc(E)` and `calc(InFiNiTy)` are valid).

### Values

- `e`

  - : The base of the natural logarithm, approximately equal to `2.7182818284590452354`.

- `pi`

  - : The ratio of a circle's circumference to its diameter, approximately equal to `3.1415926535897932`.

- `infinity` & `-infinity`

  - : An infinite value, used to indicate the largest/smallest possible value.

- `NaN`

  - : A value representing "Not a Number". This constant is case-sensitive.

### Formal syntax

{{CSSSyntax}}

#### Valid values

```plain example-good
e
-e
E
pi
-pi
Pi
infinity
-infinity
InFiNiTy
NaN
```

#### Invalid values

```plain example-bad
nan
Nan
NAN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
