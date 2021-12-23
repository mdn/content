---
title: Function.arguments
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

The **`function.arguments`** property refers to an array-like object corresponding to the arguments passed to a function. Use the simple variable {{jsxref("Functions/arguments", "arguments")}} instead. This property is restricted to non-strict functions.

## Description

The syntax `function.arguments` is deprecated. The recommended way to access the {{jsxref("Functions/arguments", "arguments")}} object available within functions is to refer to the variable {{jsxref("Functions/arguments", "arguments")}}.

In the case of recursion, i.e. if function `f` appears several times on the call stack, the value of `f.arguments` represents the arguments corresponding to the most recent invocation of the function.

The value of the arguments property is normally null if there is no outstanding invocation of the function in progress (that is, the function has been called but has not yet returned.

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
