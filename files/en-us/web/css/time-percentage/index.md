---
title: <time-percentage>
slug: Web/CSS/time-percentage
page-type: css-type
browser-compat: css.types.time-percentage
---

{{CSSRef}}

The **`<time-percentage>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{Cssxref("time")}} or a {{Cssxref("percentage")}}.

## Syntax

Refer to the documentation for {{Cssxref("time")}} and {{Cssxref("percentage")}} for details of the individual syntaxes allowed by this type.

## Formal syntax

{{csssyntax}}

## Examples

### Use in calc()

Where a `<time-percentage>` is specified as an allowable type, this means that the percentage resolves to a time and therefore can be used in a {{Cssxref("calc", "calc()")}} expression.

### Valid percentages

```plain example-good
50%
+50%        Optional plus sign
-50%        Negative percentages are not valid for all properties that accept percentages
```

### Invalid percentages

```plain example-bad
50 %        Space not allowed between the number and the percentage sign
```

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

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
