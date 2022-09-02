---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
  - arguments
  - Non-standard
browser-compat: javascript.builtins.Function.arguments
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> **Warning:** The `arguments` property of {{jsxref("Function")}} objects is deprecated. The recommended way to access the `arguments` object is to refer to the variable {{jsxref("Functions/arguments", "arguments")}} available within functions.

The **`arguments`** accessor property represents the arguments passed to a {{jsxref("Function")}} object. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), async function, and generator function callers, accessing the `arguments` property throws an exception.

## Description

The value of `arguments` is an array-like object corresponding to the arguments passed to a function.

In the case of recursion, i.e. if function `f` appears several times on the call stack, the value of `f.arguments` represents the arguments corresponding to the most recent invocation of the function.

The value of the arguments property is normally {{jsxref("Operators/null", "null")}} if there is no outstanding invocation of the function in progress (that is, the function has been called but has not yet returned.

Note that the only behavior specified by the ECMAScript specification is that `Function.prototype` has an initial `arguments` accessor that unconditionally throws a {{jsxref("TypeError")}} for any `get` or `set` request (known as a "poison pill accessor"), and that implementations are not allowed to change this semantic for any function except non-strict plain functions. The actual behavior of the `arguments` property, if it's anything other than throwing an error, is implementation-defined. For example, in Chrome, it's defined as an own data property, while in Firefox and Safari, it's not accessible through reflective methods like [`Object.hasOwn()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) or [`Object.getOwnPropertyDescriptor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) at all.

```js
(function f() {
  console.log(f.arguments);
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log("f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments");
    console.log(Object.getPrototypeOf(f).arguments);
  }
})();

// In Chrome:
// Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
// arguments is an own property with descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// In Firefox:
// Arguments { … }
// f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments
// Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

## Examples

### Using the arguments property

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`before: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`after: ${g.arguments[0]}`);
}

f(2);

console.log(`returned: ${g.arguments}`);

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
