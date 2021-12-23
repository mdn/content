---
title: <integer>
slug: Web/CSS/integer
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
browser-compat: css.types.integer
---
{{CSSRef}}

The **`<integer>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is a special type of {{cssxref("number")}} that represents a whole number, whether positive or negative. Integers can be used in numerous CSS properties, such as {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, and {{cssxref("z-index")}}.

## Syntax

The `<integer>` data type consists of one or several decimal digits, 0 through 9 inclusive, optionally preceded by a single `+` or `-` sign. There is no unit associated with integers.

> **Note:** There is no official range of valid `<integer>` values. Opera 12.1 supports values up to 2^15 - 1, IE up to 2^20 - 1, and other browsers even higher. During the CSS3 Values cycle there was a lot of discussion about setting a minimum range to support: the latest decision, [in April 2012 during the LC phase](http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html), was \[-2^27 - 1; 2^27 - 1], but other values like 2^24 - 1 and 2^30 - 1 [were also proposed](http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html). However, the latest spec doesn't specify a range anymore.

## Interpolation

When animated, values of the `<integer>` data type are interpolated using discrete, whole steps. The calculation is done as if they were real, floating-point numbers; the discrete value is obtained using the [floor function](https://en.wikipedia.org/wiki/Floor_function). The speed of the interpolation is determined by the [timing function](/en-US/docs/Web/CSS/timing-function) associated with the animation.

## Examples

### Valid integers

    12          Positive integer (without a leading + sign)
    +123        Positive integer (with a leading + sign)
    -456        Negative integer
    0           Zero
    +0          Zero, with a leading +
    -0          Zero, with a leading -

### Invalid integers

```plain example-bad
12.0        This is a <number>, not an <integer>, though it represents an integer.
12.         Decimal points are not allowed.
+---12      Only one leading +/- is allowed.
ten         Letters are not allowed.
_5          Special characters are not allowed.
\35         Escaped Unicode characters are not allowed, even if they are an integer (here: 5).
\4E94       Non-arabic numerals are not allowed, even when escaped (here: the Japanese 5, 五).
3e4         Scientific notation is not allowed.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;number&gt;")}}
