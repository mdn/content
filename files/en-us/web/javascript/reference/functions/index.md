---
title: Functions
slug: Web/JavaScript/Reference/Functions
page-type: guide
browser-compat: javascript.functions
---

{{jsSidebar("Functions")}}

Generally speaking, a function is a "subprogram" that can be _called_ by code external (or internal, in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the _function body_. Values can be _passed_ to a function as parameters, and the function will _return_ a value.

In JavaScript, functions are [first-class objects](/en-US/docs/Glossary/First-class_Function), because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

For more examples and explanations, see the [JavaScript guide about functions](/en-US/docs/Web/JavaScript/Guide/Functions).

## Description

Function values are typically instances of [`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function). See {{jsxref("Function")}} for information on properties and methods of `Function` objects. Callable values cause [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to return `"function"` instead of `"object"`.

> **Note:** Not all callable values are `instanceof Function`. For example, the `Function.prototype` object is callable but not an instance of `Function`. You can also manually set the [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) of your function so it no longer inherits from `Function.prototype`. However, such cases are extremely rare.

### Return value

By default, if a function's execution doesn't end at a [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement, or if the `return` keyword doesn't have an expression after it, then the return value is {{jsxref("undefined")}}. The `return` statement allows you to return an arbitrary value from the function. One function call can only return one value, but you can simulate the effect of returning multiple values by returning an object or array and [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the result.

> **Note:** Constructors called with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) have a different set of logic to determine their return values.

### Passing arguments

[Parameters and arguments](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) have slightly different meanings, but in MDN web docs, we often use them interchangeably. For a quick reference:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In this example, the `num` variable is called the function's _parameter_: it's declared in the bracket-enclosed list of the function's definition. The function expects the `num` parameter to be a number — although this is not enforceable in JavaScript without writing runtime validation code. In the `formatNumber(2)` call, the number `2` is the function's _argument_: it's the value that is actually passed to the function in the function call. The argument value can be accessed inside the function body through the corresponding parameter name or the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

Arguments are always [_passed by value_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference) and never _passed by reference_. This means that if a function reassigns a parameter, the value won't change outside the function. More precisely, object arguments are [_passed by sharing_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), which means if the object's properties are mutated, the change will impact the outside of the function. For example:

```js
function updateBrand(obj) {
  // Mutating the object is visible outside the function
  obj.brand = "Toyota";
  // Try to reassign the parameter, but this won't affect
  // the variable's value outside the function
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota
```

The [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword refers to the object that the function is accessed on — it does not refer to the currently executing function, so you must refer to the function value by name, even within the function body.

### Defining functions

Broadly speaking, JavaScript has four kinds of functions:

- Regular function: can return anything; always runs to completion after invocation
- Generator function: returns a [`Generator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object; can be paused and resumed with the [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield) operator
- Async function: returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise); can be paused and resumed with the [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) operator
- Async generator function: returns an [`AsyncGenerator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) object; both the `await` and `yield` operators can be used

For every kind of function, there are three ways to define it:

- Declaration
  - : [`function`](/en-US/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)
- Expression
  - : [`function`](/en-US/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/en-US/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/en-US/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)
- Constructor
  - : [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

In addition, there are special syntaxes for defining [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and [methods](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions), which provide more precise semantics for their usage. [Classes](/en-US/docs/Web/JavaScript/Reference/Classes) are conceptually not functions (because they throw an error when called without `new`), but they also inherit from `Function.prototype` and have `typeof MyClass === "function"`.

```js
// Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

All syntaxes do approximately the same thing, but there are some subtle behavior differences.

- The `Function()` constructor, `function` expression, and `function` declaration syntaxes create full-fledged function objects, which can be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). However, arrow functions and methods cannot be constructed. Async functions, generator functions, and async generator functions are not constructible regardless of syntax.
- The `function` declaration creates functions that are [_hoisted_](/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting). Other syntaxes do not hoist the function and the function value is only visible after the definition.
- The arrow function and `Function()` constructor always create _anonymous_ functions, which means they can't easily call themselves recursively. One way to call an arrow function recursively is by assigning it to a variable.
- The arrow function syntax does not have access to `arguments` or `this`.
- The `Function()` constructor cannot access any local variables — it only has access to the global scope.
- The `Function()` constructor causes runtime compilation and is often slower than other syntaxes.

For `function` expressions, there is a distinction between the function name and the variable the function is assigned to. The function name cannot be changed, while the variable the function is assigned to can be reassigned. The function name can be different from the variable the function is assigned to — they have no relation to each other. The function name can be used only within the function's body. Attempting to use it outside the function's body results in an error (or gets another value, if the same name is declared elsewhere). For example:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

On the other hand, the variable the function is assigned to is limited only by its scope, which is guaranteed to include the scope in which the function is declared.

A function declaration also creates a variable with the same name as the function name. Thus, unlike those defined by function expressions, functions defined by function declarations can be accessed by their name in the scope they were defined in, as well as in their own body.

A function defined by `new Function` will dynamically have its source assembled, which is observable when you serialize it. For example, `console.log(new Function().toString())` gives:

```js-nolint
function anonymous(
) {

}
```

This is the actual source used to compile the function. However, although the `Function()` constructor will create the function with name `anonymous`, this name is not added to the scope of the body. The body only ever has access to global variables. For example, the following would result in an error:

```js
new Function("alert(anonymous);")();
```

A function defined by a function expression or by a function declaration inherits the current scope. That is, the function forms a closure. On the other hand, a function defined by a `Function` constructor does not inherit any scope other than the global scope (which all functions inherit).

```js
// p is a global variable
globalThis.p = 5;
function myFunc() {
  // p is a local variable
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function("\tconsole.log(p);");

  decl();
  expr();
  cons();
}
myFunc();

// Logs:
// 9 (for 'decl' by function declaration (current scope))
// 9 (for 'expr' by function expression (current scope))
// 5 (for 'cons' by Function constructor (global scope))
```

Functions defined by function expressions and function declarations are parsed only once, while a function defined by the `Function` constructor parses the string passed to it each and every time the constructor is called. Although a function expression creates a closure every time, the function body is not reparsed, so function expressions are still faster than `new Function(...)`. Therefore the `Function` constructor should generally be avoided whenever possible.

A function declaration may be unintentionally turned into a function expression when it appears in an expression context.

```js
// A function declaration
function foo() {
  console.log("FOO!");
}

doSomething(
  // A function expression passed as an argument
  function foo() {
    console.log("FOO!");
  },
);
```

On the other hand, a function expression may also be turned into a function declaration. An [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the `function` or `async function` keywords, which is a common mistake when implementing [IIFEs](/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expressions).

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Instead, start the expression statement with something else, so that the `function` keyword unambiguously starts a function expression. Common options include [grouping](/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) and using [`void`](/en-US/docs/Web/JavaScript/Reference/Operators/void).

```js-nolint example-good
(function () {
  console.log("FOO!");
})();

void function () {
  console.log("FOO!");
}();
```

### Function parameters

Each function parameter is a simple identifier that you can access in the local scope.

```js
function myFunc(a, b, c) {
  // You can access the values of a, b, and c here
}
```

There are three special parameter syntaxes:

- [_Default parameters_](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) allow formal parameters to be initialized with default values if no value or `undefined` is passed.
- The [_rest parameter_](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) allows representing an indefinite number of arguments as an array.
- [_Destructuring_](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) allows unpacking elements from arrays, or properties from objects, into distinct variables.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

There are some consequences if one of the above non-simple parameter syntaxes is used:

- You cannot apply `"use strict"` to the function body — this causes a [syntax error](/en-US/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Even if the function is not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object stops syncing with the named parameters, and [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) throws an error when accessed.

### The arguments object

You can refer to a function's arguments within the function by using the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

- [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
  - : An array-like object containing the arguments passed to the currently executing function.
- [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : The currently executing function.
- [`arguments.length`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : The number of arguments passed to the function.

### Getter and setter functions

You can define accessor properties on any standard built-in object or user-defined object that supports the addition of new properties. Within [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) and [classes](/en-US/docs/Web/JavaScript/Reference/Classes), you can use special syntaxes to define the getter and setter of an accessor property.

- [get](/en-US/docs/Web/JavaScript/Reference/Functions/get)
  - : Binds an object property to a function that will be called when that property is looked up.
- [set](/en-US/docs/Web/JavaScript/Reference/Functions/set)
  - : Binds an object property to a function to be called when there is an attempt to set that property.

Note that these syntaxes create an _object property_, not a _method_. The getter and setter functions themselves can only be accessed using reflective APIs such as {{jsxref("Object.getOwnPropertyDescriptor()")}}.

### Block-level functions

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), functions inside blocks are scoped to that block. Prior to ES2015, block-level functions were forbidden in strict mode.

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 in non-strict mode
```

### Block-level functions in non-strict code

In a word: **Don't.**

In non-strict code, function declarations inside blocks behave strangely. For example:

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

The semantics of this in strict mode are well-specified — `zero` only ever exists within that scope of the `if` block. If `shouldDefineZero` is false, then `zero` should never be defined, since the block never executes. However, historically, this was left unspecified, so different browsers implemented it differently in non-strict mode. For more information, see the [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) reference.

A safer way to define functions conditionally is to assign a function expression to a variable:

```js
// Using a var makes it available as a global variable,
// with closer behavior to a top-level function declaration
var zero;
if (shouldDefineZero) {
  zero = function () {
    console.log("This is zero.");
  };
}
```

## Examples

### Returning a formatted number

The following function returns a string containing the formatted representation of a number padded with leading zeros.

```js
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  let numStr = num.toString(); // Initialize return value as string
  const numZeros = totalLen - numStr.length; // Calculate no. of zeros
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

The following statements call the `padZeros` function.

```js
let result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### Determining whether a function exists

You can determine whether a function exists by using the [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator. In the following example, a test is performed to determine if the `window` object has a property called `noFunc` that is a function. If so, it is used; otherwise, some other action is taken.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Note that in the `if` test, a reference to `noFunc` is used — there are no brackets `()` after the function name so the actual function is not called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
