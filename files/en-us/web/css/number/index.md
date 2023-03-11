---
title: <number>
slug: Web/CSS/number
page-type: css-type
browser-compat: css.types.number
---

{{CSSRef}}

The **`<number>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a number, being either an integer or a number with a fractional component.

## Syntax

The syntax of `<number>` extends the syntax of {{CSSxRef("&lt;integer&gt;")}}. A fractional value is represented by a `.` followed by one or more decimal digits, and may be appended to an integer. There is no unit associated with numbers.

## Interpolation

When animated, values of the `<number>` CSS data type are interpolated as real, floating-point numbers. The speed of the interpolation is determined by the [timing function](/en-US/docs/Web/CSS/easing-function) associated with the animation.

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

- {{CSSxRef("&lt;integer&gt;")}}
