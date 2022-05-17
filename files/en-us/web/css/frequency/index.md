---
title: <frequency>
slug: Web/CSS/frequency
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
browser-compat: css.types.frequency
---
{{CSSRef}}

The **`<frequency>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a frequency dimension, such as the pitch of a speaking voice. It is not currently used in any CSS properties.

## Syntax

The `<frequency>` data type consists of a {{cssxref("&lt;number&gt;")}} followed by one of the units listed below. As with all CSS dimensions, there is no space between the unit literal and the number.

### Units

- `Hz`
  - : Represents a frequency in hertz. Examples: `0Hz`, `1500Hz`, `10000Hz`.
- `kHz`
  - : Represents a frequency in kilohertz. Examples: `0kHz`, `1.5kHz`, `10kHz`.

> **Note:** Although the number `0` is always the same regardless of unit, the unit may not be omitted. In other words, `0` is invalid and does not represent `0Hz` or `0kHz`. Though the units are case-insensitive, it is good practice to use a capital "H" for `Hz` and `kHz`, as specified in the [SI](https://en.wikipedia.org/wiki/International_System_of_Units).

## Examples

Valid frequency values:

```plain example-good
12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit
```

Invalid frequency values:

```plain example-bad
12.0     This is a <number>, not an <frequency>, because it is missing a unit.
7 Hz     No space is allowed between the number and the unit.
0        Although unitless zero is an allowable <length>, it's an invalid <frequency>.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;frequency-percentage&gt;")}}
- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
