---
title: Logical AND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_and
---
{{jsSidebar("Operators")}}

The logical AND (`&&`) operator (logical conjunction) for a set of
operands is true if and only if all of its operands are true. It is typically used with
{{jsxref("Boolean")}} (logical) values. When it is, it returns a Boolean value. However,
the `&&` operator actually returns the value of one of the specified
operands, so if this operator is used with non-Boolean values, it will return a
non-Boolean value.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntax

```js
expr1 && expr2
```

## Description

If `expr1` can be converted to `true`, returns
`expr2`; else, returns `expr1`.

If a value can be converted to `true`, the value is so-called
{{Glossary("truthy")}}. If a value can be converted to `false`, the value is
so-called {{Glossary("falsy")}}.

Examples of expressions that can be converted to false are:

- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ` `` `);
- `undefined`.

Even though the `&&` operator can be used with operands that are not
Boolean values, it can still be considered a boolean operator since its return value can
always be converted to a [boolean primitive](/en-US/docs/Web/JavaScript/Data_structures#Boolean_type).
To explicitly convert its return value (or any expression in general) to the
corresponding boolean value, use a double [NOT
operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT) or the {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}
constructor.

### Short-circuit evaluation

The logical AND expression is evaluated left to right, it is tested for possible
"short-circuit" evaluation using the following rule:

`(some falsy expression) && expr` is short-circuit
evaluated to the falsy expression;

Short circuit means that the `expr` part above is **not
evaluated**, hence any side effects of doing so do not take effect (e.g., if
`expr` is a function call, the calling never takes place). This
happens because the value of the operator is already determined after the evaluation of
the first operand. See example:

```js
function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)
```

### Operator precedence

The following expressions might seem equivalent, but they are not, because the
`&&` operator is executed before the `||` operator (see [operator
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```js
true || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply
```

## Examples

### Using AND

The following code shows examples of the `&&` (logical AND)
operator.

```js
a1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false
```

### Conversion rules for booleans

#### Converting AND to OR

The following operation involving **booleans**:

```js
bCondition1 && bCondition2
```

is always equal to:

```js
!(!bCondition1 || !bCondition2)
```

#### Converting OR to AND

The following operation involving **booleans**:

```js
bCondition1 || bCondition2
```

is always equal to:

```js
!(!bCondition1 && !bCondition2)
```

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove
parentheses from a complex expression following some rules.

The following composite operation involving **booleans**:

```js
bCondition1 || (bCondition2 && bCondition3)
```

is always equal to:

```js
bCondition1 || bCondition2 && bCondition3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
