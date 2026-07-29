---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
page-type: javascript-error
sidebar: jssidebar
---

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "Assignment to undeclared variable" occurs when the value has been assigned to an undeclared variable.

## Message

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Error type

{{jsxref("ReferenceError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

You have an assignment of the form `x = ...`, but `x` has not been previously declared with the `var`, `let`, or `const` keyword.
This error occurs in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.
In non-strict code, assignment to an undeclared variable implicitly creates a property on the global scope.

## Examples

### Invalid cases

In this case, the variable "bar" is an undeclared variable.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Valid cases

To make "bar" a declared variable, you can add a [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/var), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword in front of it.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
