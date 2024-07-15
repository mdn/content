---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
page-type: javascript-class
browser-compat: javascript.builtins.Function
---

{{JSRef}}

The **`Function`** object provides methods for [functions](/en-US/docs/Web/JavaScript/Reference/Functions). In JavaScript, every function is actually a `Function` object.

## Constructor

- {{jsxref("Function/Function", "Function()")}}
  - : Creates a new `Function` object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to {{jsxref("Global_Objects/eval", "eval()")}}. However, unlike `eval()`, the `Function` constructor creates functions that execute in the global scope only.

## Instance properties

These properties are defined on `Function.prototype` and shared by all `Function` instances.

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Represents the arguments passed to this function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), arrow, async, and generator functions, accessing the `arguments` property throws a {{jsxref("TypeError")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures instead.
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Represents the function that invoked this function. For [strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode), arrow, async, and generator functions, accessing the `caller` property throws a {{jsxref("TypeError")}}.
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Function` instances, the initial value is the {{jsxref("Function/Function", "Function")}} constructor.

These properties are own properties of each `Function` instance.

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : The display name of the function.
- {{jsxref("Function/length", "length")}}
  - : Specifies the number of arguments expected by the function.
- {{jsxref("Function/name", "name")}}
  - : The name of the function.
- {{jsxref("Function/prototype", "prototype")}}
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
- [`Function.prototype[Symbol.hasInstance]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : Specifies the default procedure for determining if a constructor function recognizes an object as one of the constructor's instances. Called by the [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator.

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

- [`function`](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
