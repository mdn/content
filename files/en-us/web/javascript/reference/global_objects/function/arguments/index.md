---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
page-type: javascript-instance-accessor-property
status:
  - deprecated
  - non-standard
browser-compat: javascript.builtins.Function.arguments
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> **Note:** The `arguments` property of {{jsxref("Function")}} objects is deprecated. The recommended way to access the `arguments` object is to refer to the variable {{jsxref("Functions/arguments", "arguments")}} available within functions.

The **`arguments`** accessor property of {{jsxref("Function")}} instances returns the arguments passed to this function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), arrow, async, and generator functions, accessing the `arguments` property throws a {{jsxref("TypeError")}}.

## Description

The value of `arguments` is an array-like object corresponding to the arguments passed to a function.

In the case of recursion, i.e. if function `f` appears several times on the call stack, the value of `f.arguments` represents the arguments corresponding to the most recent invocation of the function.

The value of the `arguments` property is normally {{jsxref("Operators/null", "null")}} if there is no outstanding invocation of the function in progress (that is, the function has been called but has not yet returned).

Note that the only behavior specified by the ECMAScript specification is that `Function.prototype` has an initial `arguments` accessor that unconditionally throws a {{jsxref("TypeError")}} for any `get` or `set` request (known as a "poison pill accessor"), and that implementations are not allowed to change this semantic for any function except non-strict plain functions. The actual behavior of the `arguments` property, if it's anything other than throwing an error, is implementation-defined. For example, Chrome defines it as an own data property, while Firefox and Safari extend the initial poison-pill `Function.prototype.arguments` accessor to specially handle `this` values that are non-strict functions.

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// In Chrome:
// arguments is an own property with descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// In Firefox:
// f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments
// Arguments { … }
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

// Logs:
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
