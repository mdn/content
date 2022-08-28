---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Class
  - Function
  - JavaScript
browser-compat: javascript.builtins.Function
---
{{JSRef}}

Every JavaScript function is actually a `Function` object. This can be seen with the code `(function () {}).constructor === Function`, which returns true.

## Syntax

```js
new Function(functionBody)
new Function(arg0, functionBody)
new Function(arg0, arg1, functionBody)
new Function(arg0, arg1, /* … ,*/ argN, functionBody)

Function(functionBody)
Function(arg0, functionBody)
Function(arg0, arg1, functionBody)
Function(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **Note:** `Function()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Function` instance.

### Parameters

- `argN` {{optional_inline}}

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a default), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Constructor

- {{jsxref("Function/Function", "Function()")}}
  - : Creates a new `Function` object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to {{jsxref("Global_Objects/eval", "eval()")}}. However, unlike `eval()`, the `Function` constructor creates functions that execute in the global scope only.

## Instance properties

- {{jsxref("Function.prototype.arguments")}} {{Deprecated_Inline}}
  - : An array corresponding to the arguments passed to a function.
    This is deprecated as a property of {{jsxref("Function")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object (available within the function) instead.
- {{jsxref("Function.prototype.caller")}} {{Deprecated_Inline}}
  - : Specifies the function that invoked the currently executing function.
    This property is deprecated, and is only functional for some non-strict functions.
- {{jsxref("Function.prototype.displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : The display name of the function.
- {{jsxref("Function.prototype.length")}}
  - : Specifies the number of arguments expected by the function.
- {{jsxref("Function.prototype.name")}}
  - : The name of the function.
- {{jsxref("Function.prototype.prototype")}}
  - : Used when the function is used as a constructor with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. It will become the new object's prototype.

## Instance methods

- {{jsxref("Function.prototype.apply()")}}
  - : Calls a function with a given `this` value and optional arguments provided as an array (or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).
- {{jsxref("Function.prototype.bind()")}}
  - : Creates a new function that, when called, has its `this` keyword set to a provided value, optionally with a given sequence of arguments preceding any provided when the new function is called.
- {{jsxref("Function.prototype.call()")}}
  - : Calls a function with a given `this` value and optional arguments.
- {{jsxref("Function.prototype.toString()")}}
  - : Returns a string representing the source code of the function.
    Overrides the {{jsxref("Object.prototype.toString")}} method.

## Examples

### Difference between Function constructor and function declaration

Functions created with the `Function` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `Function` constructor was created. This is different from using {{jsxref("Global_Objects/eval", "eval()")}} with code for a function expression.

```js
// Create a global property with `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function('return x;'); // this `x` refers to global `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1();
console.log(f1());          // 10
const f2 = createFunction2();
console.log(f2());          // 20
```

While this code works in web browsers, `f1()` will produce a `ReferenceError` in Node.js, as `x` will not be found. This is because the top-level scope in Node is not the global scope, and `x` will be local to the module.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Operators/function", "function")}} expression
- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("Operators/function*", "function*")}} expression
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
