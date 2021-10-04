---
title: Logical OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or
---

{{jsSidebar("Operators")}}

The logical OR (`||`) operator (logical disjunction) for a set of operands
is true if and only if one or more of its operands is true. It is typically used with
{{jsxref("Boolean")}} (logical) values. When it is, it returns a Boolean value. However,
the `||` operator actually returns the value of one of the specified
operands, so if this operator is used with non-Boolean values, it will return a
non-Boolean value.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Syntax

```js
expr1 || expr2;
```

## Description

If `expr1` can be converted to `true`, returns
`expr1`; else, returns `expr2`.

If a value can be converted to `true`, the value is so-called
{{Glossary("truthy")}}. If a value can be converted to `false`, the value is
so-called {{Glossary("falsy")}}.

Examples of expressions that can be converted to false are:

- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ` `` `);
- `undefined`.

Even though the `||` operator can be used with operands that are not Boolean
values, it can still be considered a boolean operator since its return value can always
be converted to a [boolean primitive](/en-US/docs/Web/JavaScript/Data_structures#boolean_type).
To explicitly convert its return value (or any expression in general) to the
corresponding boolean value, use a double {{JSxRef("Operators/Logical_NOT", "NOT
  operator")}} or the {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}
constructor.

### Short-circuit evaluation

The logical OR expression is evaluated left to right, it is tested for possible
"short-circuit" evaluation using the following rule:

`(some truthy expression) || expr` is short-circuit evaluated to
the truthy expression.

Short circuit means that the `expr` part above is **not
evaluated**, hence any side effects of doing so do not take effect (e.g., if
`expr` is a function call, the calling never takes place). This
happens because the value of the operator is already determined after the evaluation of
the first operand. See example:

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
```

### Operator precedence

The following expressions might seem equivalent, but they are not, because the
`&&` operator is executed before the `||` operator (see [operator
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```js
true ||
  (false &&
    false(
      // returns true, because && is executed first
      true || false
    ) &&
    false); // returns false, because operator precedence cannot apply
```

## Examples

### Using OR

The following code shows examples of the `||` (logical OR) operator.

```js
o1 = true || true; // t || t returns true
o2 = false || true; // f || t returns true
o3 = true || false; // t || f returns true
o4 = false || 3 == 4; // f || f returns false
o5 = "Cat" || "Dog"; // t || t returns "Cat"
o6 = false || "Cat"; // f || t returns "Cat"
o7 = "Cat" || false; // t || f returns "Cat"
o8 = "" || false; // f || f returns false
o9 = false || ""; // f || f returns ""
o10 = false || varObject; // f || object returns varObject
```

> **Note:** If you use this operator to provide a default value to some
> variable, be aware that any _falsy_ value will not be used. If you only need to
> filter out {{jsxref("null")}} or {{jsxref("undefined")}}, consider using [the
> nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

### Conversion rules for booleans

#### Converting AND to OR

The following operation involving **booleans**:

```js
bCondition1 && bCondition2;
```

is always equal to:

```js
!(!bCondition1 || !bCondition2);
```

#### Converting OR to AND

The following operation involving **booleans**:

```js
bCondition1 || bCondition2;
```

is always equal to:

```js
!(!bCondition1 && !bCondition2);
```

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove
parentheses from a complex expression following some rules.

The following composite operation involving **booleans**:

```js
bCondition1 && (bCondition2 || bCondition3);
```

is always equal to:

```js
!(!bCondition1 || (!bCondition2 && !bCondition3));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The
  nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
