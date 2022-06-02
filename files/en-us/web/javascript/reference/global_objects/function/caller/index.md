---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
browser-compat: javascript.builtins.Function.caller
---
{{JSRef}} {{deprecated_header}}

The **`function.caller`** property returns the function that invoked the specified function. It returns `null` for strict, async function and generator function callers.

## Description

If the function `f` was invoked by the top level code, the value of `f.caller` is {{jsxref("null")}}, otherwise it's the function that called `f`. It's also `null` for strict, async function and generator function callers.

This property replaces the obsolete {{jsxref("Functions/arguments/caller", "arguments.caller")}} property of the {{jsxref("Functions/arguments", "arguments")}} object.

The special property `__caller__`, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.

### Notes

Note that in case of recursion, you can't reconstruct the call stack using this property. Consider:

```js
function f(n) { g(n - 1); }
function g(n) { if (n > 0) { f(n); } else { stop(); } }
f(2);
```

At the moment `stop()` is called the call stack will be:

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

The following is true:

```js
stop.caller === g && f.caller === g && g.caller === f
```

so if you tried to get the stack trace in the `stop()` function like this:

```js
let f = stop;
let stack = 'Stack trace:';
while (f) {
  stack += '\n' + f.name;
  f = f.caller;
}
```

the loop would never stop.

## Examples

### Checking the value of a function's `caller` property

The following code checks the value a function's `caller` property.

```js
function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function.name", "Function.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
