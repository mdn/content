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

The **`<calc-constant>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents well-defined constants such as `e` and `π`. Rather than require authors to manually type out several digits of these constants, a few of them are provided directly by CSS.

## Syntax

The `<calc-constant>` type defines a number of numeric constants that can be used in CSS math functions.

### Values

- `e`
  - : The base of the natural logarithm, approximately equal to `2.7182818284590452354`.

- `pi`
  - : The ratio of a circle's circumference to its diameter, approximately equal to `3.1415926535897932`.

- `infinity` & `-infinity`
  - : An infinite length, used to indicate the largest/smallest possible value.

- `NaN`
  - : A value representing "Not a Number" canonical casing.

### Formal syntax

{{CSSSyntax}}

## Usage clarifications

### Used only in calculations

Mathematical constants can be used only inside [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions). If used outside of a calculation, they're treated like any other keyword.

For example, `animation-name: pi;` refers to an animation named "pi". `line-height: e;` is invalid, but `line-height: calc(e);` is valid.

### CSS data types

While not technically numbers, css constants act as numeric values, similar to `e` and `pi`. Thus to get an infinite length, for example, requires an expression like `calc(infinity * 1px)`.

### Case sensitivity

CSS constants are ASCII case-insensitive. Thus, `calc(InFiNiTy)` is perfectly valid.

There is only one exception, `NaN` is case-sensitive and it must be written exactly as `NaN`. Both `nan` and `NAN` are not valid constants.

## Examples

### Valid values

```plain example-good
e
-e
E
pi
-pi
infinity
-infinity
InFiNiTy
NaN
```

### Invalid values

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
