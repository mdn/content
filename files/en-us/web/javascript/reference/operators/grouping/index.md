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
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
so that operators with lower precedence can be evaluated before an operator
with higher precedence. As it sounds, it groups what's inside of the
parentheses.

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

The grouping operator is also used to clarify a mathematical structure of expressions.

```js
const z = (x = y); // Or equivalently: const z = x = y;
```

When chaining the expressions, the assignment is evaluated right-to-left.

`w = z = x = y` is equivalent to `w = (z = (x = y))` or `x = y; z = y; w = y`

Essentially, the grouping operator is used to define a dependency graph of expressions along with other operators in a mathematical sense, that is indepedent from an evaluation strategy of a programming langueage. It is possible to derive an evaluation order or the absence of an evaluation order that respects the given dependencies from the dependency graph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator
  precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
