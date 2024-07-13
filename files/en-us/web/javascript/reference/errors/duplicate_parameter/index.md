---
title: "SyntaxError: duplicate formal argument x"
slug: Web/JavaScript/Reference/Errors/Duplicate_parameter
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "duplicate formal argument x" or "duplicate argument names not allowed in this context" occurs when a function creates two or more parameter {{Glossary("binding", "bindings")}} with the same name, and the function is not a [non-strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode) function with only simple parameters.

## Message

```plain
SyntaxError: Duplicate parameter name not allowed in this context (V8-based)
SyntaxError: duplicate formal argument x (Firefox)
SyntaxError: duplicate argument names not allowed in this context (Firefox)
SyntaxError: Cannot declare a parameter named 'x' in strict mode as it has already been declared. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with default parameter values. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with a rest parameter. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with destructuring parameters. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

Having two formal parameters of the same name is likely a mistake—the second occurrence would cause the first occurrence to be inaccessible through the parameter name. In legacy JavaScript, this was allowed. Therefore, to not break existing code, this is only an error if the code is guaranteed to not be legacy—either because it is in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) or it uses modern parameter syntax ([rest](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters).

## Examples

### Invalid cases

```js-nolint example-bad
"use strict";

function add(x, x) {
  // How can you access both "x" parameters?
  // SyntaxError: duplicate formal argument x
}
```

```js-nolint example-bad
function doSomething(name, { name }) {
  // How can you access both "name" parameters?
  // SyntaxError: duplicate argument names not allowed in this context
}
```

### Valid cases

```js example-good
function doSomething(operationName, { name: userName }) {
  // You can access both "operationName" and "userName" parameters.
}

function doSomething(name, user) {
  // You can access both "name" and "user.name" parameters.
}
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
