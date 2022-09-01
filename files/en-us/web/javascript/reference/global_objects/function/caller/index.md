---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Function
  - JavaScript
  - Property
  - Non-standard
browser-compat: javascript.builtins.Function.caller
---

{{JSRef}}{{Non-standard_Header}}

A {{jsxref("Function")}} object's **`caller`** property accessor property represents the function that invoked the specified function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), async function, and generator function callers, accessing the `caller` property throws an exception.

## Description

If the function `f` was invoked by the top-level code, the value of `f.caller` is {{jsxref("Operators/null", "null")}}; otherwise it's the function that called `f`. If the function that called `f` is a strict mode function, the value of `f.caller` is also `null`.

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), accessing `caller` of a function throws an error. This is to prevent a function from being able to "walk the stack", which both poses security risks and severely limits the possibility of optimizations like inlining and tail-call optimization. For more explanation, you can read [the rationale for the deprecation of `arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee#why_was_arguments.callee_removed_from_es5_strict_mode).

Note that the only behavior specified by the ECMAScript specification is that `Function.prototype` has an initial `caller` accessor that unconditionally throws a {{jsxref("TypeError")}} for any `get` or `set` request (known as a "poison pill accessor"), and that implementations are not allowed to change this semantic for any function except non-strict plain functions, in which case it must not have the value of a strict mode function. The actual behavior of the `caller` property, if it's anything other than throwing an error, is implementation-defined. For example, in Chrome, it's defined as an own data property, while in Firefox and Safari, it's not accessible through reflective methods like [`Object.hasOwn()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) or [`Object.getOwnPropertyDescriptor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) at all.

```js
(function f() {
  console.log(f.caller);
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log("f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller");
    console.log(Object.getPrototypeOf(f).caller);
  }
})();

// In Chrome:
// null
// caller is an own property with descriptor {value: null, writable: false, enumerable: false, configurable: false}

// In Firefox:
// null
// f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller
// Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

This property replaces the obsolete `arguments.caller` property of the {{jsxref("Functions/arguments", "arguments")}} object.

The special property `__caller__`, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.

## Examples

### Checking the value of a function's caller property

The following code checks the value a function's `caller` property.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  } else {
    return `This function's caller was ${myFunc.caller}`;
  }
}
```

### Reconstructing the stack and recursion

Note that in case of recursion, you can't reconstruct the call stack using this property. Consider:

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

At the moment `stop()` is called the call stack will be:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

The following is true:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

so if you tried to get the stack trace in the `stop()` function like this:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

the loop would never stop.

### Strict mode caller

If the caller is a strict mode function, the value of `caller` is `null`.

```js
function callerFunc() {
  calleeFunc();
}

function strictCallerFunc() {
  "use strict";
  calleeFunc();
}

function calleeFunc() {
  console.log(calleeFunc.caller);
}

(function () {
  callerFunc();
})();
// Logs [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// Logs null
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
