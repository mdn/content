---
title: <calc-sum>
slug: Web/CSS/calc-sum
page-type: css-type
browser-compat: css.types.calc-sum
---

{{CSSRef}}

The **`<calc-sum>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents an expression which performs a calculation in any [CSS math function](/en-US/docs/Web/CSS/CSS_Functions#math_functions). The expression executes a basic arithmetic operation of addition and subtraction between two values.

## Syntax

The `<calc-sum>` type defines two numeric values and one of the following [arithmetic operators](/en-US/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) between them.

- `+`

  - : Adds two numbers together.

- `-`

  - : Subtracts the right number from the left.

### Formal syntax

{{CSSSyntax}}

## Description

The operands in the expression may be any {{cssxref("&lt;length&gt;")}} syntax value. You can use {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, or {{cssxref("&lt;integer&gt;")}}.

The two operands' types must be consistent. For lengths, you can't use `0` to mean `0px` (or another length unit). Instead, you must add an explicit unit: `margin-top: calc(0px + 20px);` is valid, while `margin-top: calc(0 + 20px);` is invalid. Percentage value types are resolved based on the context. For example, `margin-top: calc(50% + 20px);` is valid because `margin-top` resolves percentages to lengths.

Including [CSS variables](/en-US/docs/Web/CSS/CSS_cascading_variables) in `calc-sum` expressions is also allowed. The following code `calc(10px + var(--variable))`, is a valid expression.

The `+` and `-` operators **must be surrounded by {{Glossary("whitespace")}}**. For instance, `calc(50% -8px)` will be parsed as "a percentage followed by a negative length" — which is an invalid expression — while `calc(50% - 8px)` is "a percentage followed by a subtraction operator and a length". Likewise, `calc(8px + -50%)` is treated as "a length followed by an addition operator and a negative percentage".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
