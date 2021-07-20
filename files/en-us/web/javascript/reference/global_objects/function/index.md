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

Every JavaScript function is actually a `Function` object. This can be seen with the code `(function(){}).constructor === Function`, which returns true.

## Constructor

- {{jsxref("Function/Function", "Function()")}}
  - : Creates a new `Function` object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to {{jsxref("Global_Objects/eval")}}. However, unlike eval, the `Function` constructor creates functions that execute in the global scope only.

## Instance properties

- {{jsxref("Function.prototype.arguments")}}
  - : An array corresponding to the arguments passed to a function.
    This is deprecated as a property of {{jsxref("Function")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object (available within the function) instead.
- {{jsxref("Function.prototype.caller")}}
  - : Specifies the function that invoked the currently executing function.
    This property is deprecated, and is only functional for some non-strict functions.
- {{jsxref("Function.prototype.displayName")}}
  - : The display name of the function.
- {{jsxref("Function.prototype.length")}}
  - : Specifies the number of arguments expected by the function.
- {{jsxref("Function.prototype.name")}}
  - : The name of the function.

## Instance methods

- {{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}
  - : Calls a function and sets its `this` to the provided `thisArg`. Arguments can be passed as an {{jsxref("Array")}} object.
- {{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}
  - : Creates a new function which, when called, has its `this` set to the provided `thisArg`. Optionally, a given sequence of arguments will be prepended to arguments provided the newly-bound function is called.
- {{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}
  - : Calls a function and sets its `this` to the provided value. Arguments can be passed as they are.
- {{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}
  - : Returns a string representing the source code of the function.
    Overrides the {{jsxref("Object.prototype.toString")}} method.

## Examples

### Difference between Function constructor and function declaration

Functions created with the `Function` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `Function` constructor was created. This is different from using {{jsxref("Global_Objects/eval")}} with code for a function expression.

```js
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
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
