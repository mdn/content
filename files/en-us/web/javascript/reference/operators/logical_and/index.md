---
title: Logical AND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
page-type: javascript-operator
browser-compat: javascript.operators.logical_and
---

{{jsSidebar("Operators")}}

The **logical AND (`&&`)** (logical conjunction) operator for a set of boolean operands will be `true` if and only if all the operands are `true`. Otherwise it will be `false`.

More generally, the operator returns the value of the first {{Glossary("falsy")}} operand encountered when evaluating from left to right, or the value of the last operand if they are all {{Glossary("truthy")}}.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntax

```js-nolint
x && y
```

## Description

Logical AND (`&&`) evaluates operands from left to right, returning immediately with the value of the first {{Glossary("falsy")}} operand it encounters; if all values are {{Glossary("truthy")}}, the value of the last operand is returned.

If a value can be converted to `true`, the value is so-called {{Glossary("truthy")}}. If a value can be converted to `false`, the value is so-called {{Glossary("falsy")}}.

Examples of expressions that can be converted to false are:

- `false`;
- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ` `` `);
- `undefined`.

The AND operator preserves non-Boolean values and returns them as they are:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Even though the `&&` operator can be used with non-Boolean operands, it is still considered a boolean operator since its return value can always be
converted to a [boolean primitive](/en-US/docs/Web/JavaScript/Data_structures#boolean_type).
To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double [`NOT operator`](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) or the {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} constructor.

### Short-circuit evaluation

The logical AND expression is a short-circuit operator.
As each operand is converted to a boolean, if the result of one conversion is found to be `false`, the AND operator stops and returns the original value of that falsy operand; it does **not** evaluate any of the remaining operands.

Consider the pseudocode below.

```
(some falsy expression) && expr
```

The `expr` part is **never evaluated** because the first operand `(some falsy expression)` is evaluated as {{Glossary("falsy")}}.
If `expr` is a function, the function is never called.
See the example below:

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B
```

### Operator precedence

The AND operator has a higher precedence than the OR operator, meaning the `&&` operator is executed before the `||` operator (see [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Examples

### Using AND

The following code shows examples of the `&&` (logical AND)
operator.

```js
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
```

### Conversion rules for booleans

#### Converting AND to OR

The following operation involving **booleans**:

```js-nolint
bCondition1 && bCondition2
```

is always equal to:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Converting OR to AND

The following operation involving **booleans**:

```js-nolint
bCondition1 || bCondition2
```

is always equal to:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove parentheses from a complex expression provided that certain rules are followed.

The following composite operation involving **booleans**:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

is always equal to:

```js-nolint
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
