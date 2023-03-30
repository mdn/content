---
title: <calc-constant>
slug: Web/CSS/calc-constant
page-type: css-type
browser-compat: css.types.calc-constant
---

{{CSSRef}}

The **`<calc-constant>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents well-defined constants such as `e` and `π`. Rather than require authors to manually type out several digits of these mathematical constants or calculate them, a few of them are provided directly by CSS for convenience.

## Syntax

The `<calc-constant>` type defines numeric constants that can be used in [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions).

### Values

- `e`

  - : The base of the natural logarithm, approximately equal to `2.7182818284590452354`.

- `pi`

  - : The ratio of a circle's circumference to its diameter, approximately equal to `3.1415926535897932`.

- `infinity` & `-infinity` {{Experimental_Inline}}

  - : An infinite value, used to indicate the largest/smallest possible value.

- `NaN` {{Experimental_Inline}}

  - : A value representing "Not a Number" canonical casing.

### Formal syntax

{{CSSSyntax}}

## Description

Mathematical constants can only be used inside [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) for calculations. Math constants are not CSS keywords, but if they are used outside of a calculation, they're treated like any other keyword.

For example:

- `animation-name: pi;` refers to an animation named "pi", not the `pi` numeric constant.
- `line-height: e;` is invalid, but `line-height: calc(e);` is valid.
- `rotate(1rad * pi);` won't work because {{CSSxRef("transform-function/rotate", "rotate()")}} is not a math function. Use `rotate(calc(1rad * pi));`

In math functions, `<calc-constant>` values are evaluated as {{CSSxRef("number")}} values, therefore `e` and `pi` act as numeric constants.

Both `infinity` and `NaN` are slightly different, they are considered as degenerate numeric constants. While not technically numbers, they act as {{CSSxRef("number")}} values. Thus to get an infinite {{CSSxRef("length")}}, for example, requires an expression like `calc(infinity * 1px)`.

The `infinity` and `NaN` values are included mostly to make serialization simpler and more obvious, but can be used to indicate a "largest possible value", since an infinite value gets clamped to the allowed range. It's rare for this to be reasonable, but when using infinity its much simpler than just putting an enormous number in a stylesheet.

CSS constants are case-insensitive. Thus, `calc(Pi)`, `calc(E)` and `calc(InFiNiTy)` are all valid.

There is only one exception: `NaN` is case-sensitive and must be written exactly as `NaN`. Both `nan` and `NAN` are invalid constants.

Valid values:

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

Invalid values:

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
