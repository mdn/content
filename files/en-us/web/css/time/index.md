---
title: <time>
slug: Web/CSS/time
page-type: css-type
browser-compat: css.types.time
---

{{CSSRef}}

The **`<time>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents a time value expressed in seconds or milliseconds. It is used in {{cssxref("animation")}}, {{cssxref("transition")}}, and related properties.

## Syntax

The `<time>` data type consists of a {{cssxref("&lt;number&gt;")}} followed by one of the units listed below. Optionally, it may be preceded by a single `+` or `-` sign. As with all dimensions, there is no space between the unit literal and the number.

> [!NOTE]
> Although the number `0` is always the same regardless of unit, the unit may not be omitted. In other words, `0` is invalid and does not represent `0s` or `0ms`.

### Units

- `s`
  - : Represents a time in seconds. Examples: `0s`, `1.5s`, `-60s`.
- `ms`
  - : Represents a time in milliseconds. Examples: `0ms`, `150.25ms`, `-60000ms`.

> [!NOTE]
> Conversion between `s` and `ms` follows the logical `1s` = `1000ms`.

## Examples

### Valid times

```plain example-good
12s         Positive integer
-456ms      Negative integer
4.3ms       Non-integer
14mS        The unit is case-insensitive, although capital letters are not recommended.
+0s         Zero with a leading + and a unit
-0ms        Zero with a leading - and a unit
```

### Invalid times

```plain example-bad
0           Although unitless zero is allowed for <length>s, it's invalid for <time>s.
12.0        This is a <number>, not a <time>, because it's missing a unit.
7 ms        No space is allowed between the number and the unit.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;time-percentage&gt;")}}
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
