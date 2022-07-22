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
sub-expression to override the normal
[operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
so that operators with lower precedence can be evaluated before an operator
with higher precedence. As it sounds, it groups what's inside of the
parentheses.

## Examples

### Using the grouping operator

Overriding multiplication and division first, then addition and subtraction to evaluate
addition first.

```js
const a = 1;
const b = 2;
const c = 3;

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

Notice in these examples that the left-to-right order of evaluation is still
preserved. In other words, the order in which the *operators* evaluate has changed,
but the order in which the *operands* evaluate has not.
For example in this code:

```js
a() * (b() + c())
```

The function `a` will be called before the function `b`, which will be called before the function `c`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
