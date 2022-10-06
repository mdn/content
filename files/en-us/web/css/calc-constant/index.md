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

The **`<calc-constant>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents well-known constants such as `e` and `π`.

Rather than require authors to manually type out several digits of these constants, a few of them are provided directly by CSS.

> **Note:** These keywords are only usable within a calculation, such as `calc(pow(e, pi) - pi)`, or `min(pi, 5, e)`. If used outside of a calculation, they're treated like any other keyword: `animation-name: pi`; refers to an animation named "pi"; `line-height: e`; is invalid (not similar to `line-height: 2.7`, but `line-height: calc(e);` is).

When a calculation or a subtree of a calculation becomes infinite or NaN, representing it with a numeric value is no longer possible. To aid in serialization of these degenerate values, the additional math constants `infinity` (with the value `+∞`), `-infinity` (with the value `−∞`), and `NaN` (with the value `NaN`) are defined.

As usual for CSS keywords, these are ASCII case-insensitive. Thus, `calc(InFiNiTy)` is perfectly valid. However, `NaN` must be serialized with this canonical casing.

> **Note:** While not technically numbers, these keywords act as numeric values, similar to `e` and `pi`. Thus to get an infinite length, for example, requires an expression like `calc(infinity * 1px)`.

## Syntax

The `<calc-constant>` type defines a number of numeric constants that can be used in CSS math functions.

### Values

- `e`
  - : The base of the natural logarithm, approximately equal to `2.7182818284590452354`.

- `pi`
  - : The ratio of a circle's circumference to its diameter, approximately equal to `3.1415926535897932`.

- `infinity` & `-infinity`
  - : An infinite length, used to indicate the largest/smallest possible value.

- `Nan`
  - : A value representing Not-A-Number.

### Formal syntax

{{CSSSyntax}}

## Examples

### Valid numbers

```plain example-good
e
-e
pi
-pi
infinity
-infinity
InFiNiTy
NaN
```

### Invalid numbers

```plain example-bad
nan
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
