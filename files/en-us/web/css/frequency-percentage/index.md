---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - frequency-percentage
  - units
  - values
browser-compat: css.types.frequency-percentage
---
{{CSSRef}}

The **`<frequency-percentage>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{Cssxref("frequency")}} or a {{Cssxref("percentage")}}. Frequency values, e.g. the pitch of a speaking voice, are not currently used in any CSS properties.

## Syntax

The value of a `<frequency-percentage>` is either a {{Cssxref("frequency")}} or a {{Cssxref("percentage")}}; see their individual reference pages for details about their syntaxes.

## Description

### Use in calc()

Where a `<frequency-percentage>` is specified as an allowable type, this means that the percentage resolves to a frequency and therefore can be used in a [`calc()`](/en-US/docs/Web/CSS/calc) expression.

## Formal syntax

{{csssyntax}}

## Examples

### Valid percentage values

``` plain example-good
90% Positive percentage
+90% Positive percentage with leading +
-90% Negative percentage — not valid for all properties that use percentages
```

### Invalid percentage values

```plain example-bad
90 % No space is allowed between the number and the unit
```

### Valid frequency values

``` plain example-good
12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit
```

### Invalid frequency values

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

- [CSS data types](/en-US/docs/Web/CSS/CSS_Types)
- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- Related CSS data types:

  - {{cssxref("frequency", "&lt;frequency&gt;")}}
  - {{cssxref("percentage", "&lt;percentage&gt;")}}
