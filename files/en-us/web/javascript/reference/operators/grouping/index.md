---
title: Grouping operator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Language feature
  - Operator
  - Primary Expressions
browser-compat: javascript.operators.grouping
---
{{jsSidebar("Operators")}}

The grouping operator `( )` controls the precedence of evaluation in
expressions.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

```js
( )
```

## Description

The grouping operator consists of a pair of parentheses around an expression or
sub-expression to override the normal [operator
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) so that expressions with lower precedence can be evaluated before an
expression with higher priority. As it sounds, it groups what's inside of
the parentheses.

## Examples

### Using the grouping operator

Overriding multiplication and division first, then addition and subtraction to evaluate
addition first.

```js
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator
  precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
