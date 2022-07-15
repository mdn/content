---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
  - arguments
browser-compat: javascript.builtins.Function.arguments
---
{{JSRef}} {{deprecated_header}}

> **Warning:** The `arguments` property of {{jsxref("Function")}} objects is deprecated. The recommended way to access the `arguments` object is to refer to the variable {{jsxref("Functions/arguments", "arguments")}} available within functions.

A {{jsxref("Function")}} object's **`arguments`** property refers to an array-like object corresponding to the arguments passed to a function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), async function, and generator function callers, accessing the `arguments` property throws an exception.

## Description

In the case of recursion, i.e. if function `f` appears several times on the call stack, the value of `f.arguments` represents the arguments corresponding to the most recent invocation of the function.

The value of the arguments property is normally {{jsxref("Operators/null", "null")}} if there is no outstanding invocation of the function in progress (that is, the function has been called but has not yet returned.

## Examples

### Using the arguments object

```js
function f(n) { g(n - 1) }

function g(n) {
  console.log('before: ' + g.arguments[0])
  if (n > 0) { f(n) }
  console.log('after: ' + g.arguments[0])
}

f(2)

console.log('returned: ' + g.arguments)

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Specifications

Not part of any standard. Deprecated in favor of {{jsxref("Functions/arguments", "arguments")}} in ECMAScript 3.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
