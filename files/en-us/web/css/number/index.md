---
title: <number>
slug: Web/CSS/number
page-type: css-type
browser-compat: css.types.number
sidebar: cssref
---

The **`<number>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_data_types) represents a number, being either an integer, a number with a fractional component, or a base-ten exponent in scientific notation.

## Syntax

The syntax of `<number>` extends the syntax of {{CSSxRef("&lt;integer&gt;")}}. A fractional value is represented by a `.` followed by one or more decimal digits, and may be appended to an integer. A `<number>` can also end with the letter `e` or `E` followed by an integer, which indicates a base-ten exponent in scientific notation. There is no unit associated with numbers.

As with integers, the first character of the number can be immediately preceded by - or + to indicate the number's sign: whether the number is positive or negative.

## Interpolation

When animated, values of the `<number>` CSS data type are interpolated as real, floating-point numbers. The speed of the interpolation is determined by the [easing function](/en-US/docs/Web/CSS/easing-function) associated with the animation.

## Examples

### Valid numbers

```plain example-good
12          A raw <integer> is also a <number>.
4.01        Positive fraction
-456.8      Negative fraction
0.0         Zero
+0.0        Zero, with a leading +
-0.0        Zero, with a leading -
.60         Fractional number without a leading zero
10e3        Scientific notation
-3.4e-2     Complicated scientific notation
```

### Invalid numbers

```plain example-bad
12.         Decimal points must be followed by at least one digit.
+-12.2      Only one leading +/- is allowed.
12.1.1      Only one decimal point is allowed.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("integer")}}
- {{CSSxRef("ratio")}}
- [CSS values and units](/en-US/docs/Web/CSS/CSS_values_and_units) module
