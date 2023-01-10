---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
page-type: javascript-class
tags:
  - Class
  - Function
  - JavaScript
browser-compat: javascript.builtins.Function
---

{{JSRef}}

Every JavaScript function is actually a `Function` object. This can be seen with the code `(function () {}).constructor === Function`, which returns true.

## Constructor

- {{jsxref("Function/Function", "Function()")}}
  - : Creates a new `Function` object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to {{jsxref("Global_Objects/eval", "eval()")}}. However, unlike `eval()`, the `Function` constructor creates functions that execute in the global scope only.

## Instance properties

- {{jsxref("Function.prototype.arguments")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Represents the arguments passed to this function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), arrow, async, and generator functions, accessing the `arguments` property throws a {{jsxref("TypeError")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures instead.
- {{jsxref("Function.prototype.caller")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Represents the function that invoked this function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), arrow, async, and generator functions, accessing the `caller` property throws a {{jsxref("TypeError")}}.
- {{jsxref("Function.prototype.displayName")}} {{Non-standard_Inline}} {{Optional_Inline}}
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
  return new Function("return x;"); // this `x` refers to global `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

While this code works in web browsers, `f1()` will produce a `ReferenceError` in Node.js, as `x` will not be found. This is because the top-level scope in Node is not the global scope, and `x` will be local to the module.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
