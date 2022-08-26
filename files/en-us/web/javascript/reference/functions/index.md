---
title: Functions
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - Functions
  - Guide
  - JavaScript
  - Parameter
  - parameters
browser-compat: javascript.functions
---
{{jsSidebar("Functions")}}

Generally speaking, a function is a "subprogram" that can be _called_ by code
external (or internal in the case of recursion) to the function. Like the program
itself, a function is composed of a sequence of statements called the _function
body_. Values can be _passed_ to a function, and the function
will *return* a value.

In JavaScript, functions are first-class objects, because they can have properties and
methods just like any other object. What distinguishes them from other objects is that
functions can be called. In brief, they are
[`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
objects.

For more examples and explanations,
see the [JavaScript guide about functions](/en-US/docs/Web/JavaScript/Guide/Functions).

## Description

Every function in JavaScript is a `Function` object. See
{{jsxref("Function")}} for information on properties and methods of
`Function` objects.

To return a value other than the default, a function must have a
[`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
statement that specifies the value to return. A function without a return statement
will return a default value. In the case of a [constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
called with the
[`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new)
keyword, the default value is the value of its `this` parameter. For all
other functions, the default return value is {{jsxref("undefined")}}.

The parameters of a function call are the function's _arguments_. Arguments may be passed _by value_
(in the case of [primitive values](/en-US/docs/Web/JavaScript/Data_structures#primitive_values))
or _by reference_ (in the case of [objects](/en-US/docs/Web/JavaScript/Data_structures#objects)).
This means that if a function reassigns a primitive type parameter, the value won't change outside the function. In the case of
an object type parameter, if its properties are mutated, the change will impact outside of the function.
See the following example:

```js
/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
const mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);
```

The [`this` keyword](/en-US/docs/Web/JavaScript/Reference/Operators/this)
does not refer to the currently executing function, so you must refer to
`Function` objects by name, even within the function body.

## Defining functions

There are several ways to define functions:

### The function declaration

There is a special syntax for declaring functions
(see [function statement](/en-US/docs/Web/JavaScript/Reference/Statements/function) for details):

```js
function name([param[, param[, ... param]]]) {
  statements
}
```

- `name`
  - : The function name.
- `param`
  - : The name of an argument to be passed to the function.
- `statements`
  - : The statements comprising the body of the function.

### The function expression

A function expression is similar to and has the same syntax as a function declaration
(see [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) for details).
A function expression may be a part of a larger expression.
One can define "named" function expressions (where the name of the
expression might be used in the call stack for example) or "anonymous" function
expressions. Function expressions are not _hoisted_ onto the beginning of the
scope, therefore they cannot be used before they appear in the code.

```js
function [name]([param[, param[, ... param]]]) {
  statements
}
```

- `name`
  - : The function name. Can be omitted, in which case the function becomes known as an
    anonymous function.
- `param`
  - : The name of an argument to be passed to the function.
- `statements`
  - : The statements comprising the body of the function.

Here is an example of an **anonymous** function expression (the
`name` is not used):

```js
const myFunction = function () {
  statements
}
```

It is also possible to provide a name inside the definition in order to create a
**named** function expression:

```js
const myFunction = function namedFunction() {
  statements
}
```

One of the benefits of creating a named function expression is that in case we
encountered an error, the stack trace will contain the name of the function, making it
easier to find the origin of the error.

As we can see, both examples do not start with the `function` keyword.
Statements involving functions which do not start with `function` are
function expressions.

When functions are used only once, a common pattern is an [IIFE (Immediately Invoked Function Expression)](/en-US/docs/Glossary/IIFE).

```js
(function () {
  statements
})();
```

IIFE are function expressions that are invoked as soon as the function is declared.

### The generator function (function*) declaration

There is a special syntax for generator function declarations (see
{{jsxref('Statements/function*', 'function* statement')}} for details):

```js
function* name([param[, param[, ... param]]]) {
  statements
}
```

- `name`
  - : The function name.
- `param`
  - : The name of an argument to be passed to the function.
- `statements`
  - : The statements comprising the body of the function.

### The generator function (function*) expression

A generator function expression is similar to and has the same syntax as a generator
function declaration (see {{jsxref('Operators/function*', 'function* expression')}} for
details):

```js
function* [name]([param[, param[, ... param]]]) {
  statements
}
```

- `name`
  - : The function name. Can be omitted, in which case the function becomes known as an
    anonymous function.
- `param`
  - : The name of an argument to be passed to the function.
- `statements`
  - : The statements comprising the body of the function.

### The arrow function expression (=>)

An arrow function expression has a shorter syntax and lexically binds its `this` value
(see [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for details):

```js
([param[, param]]) => {
  statements
}

param => expression

(param) => expression
```

- `param`
  - : The name of an argument. Zero arguments need to be indicated with `()`.
    For exactly one argument, the parentheses are not required.
    (like `foo => 1`)
- `statements` or `expression`
  - : Multiple statements need to be enclosed in brackets. A single expression requires
    no brackets. The expression is also the implicit return value of the function.

### The Function constructor

> **Note:** Using the `Function` constructor to create
> functions is not recommended since it needs the function body as a string which may
> prevent some JS engine optimizations and can also cause other problems.

As all other objects, {{jsxref("Function")}} objects can be created using the
`new` operator:

```js
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Zero or more names to be used by the function as formal parameters. Each must be a
    proper JavaScript identifier.
- `functionBody`
  - : A string containing the JavaScript statements comprising the function body.

Invoking the `Function` constructor as a function (without using the
`new` operator) has the same effect as invoking it as a constructor.

### The GeneratorFunction constructor

> **Note:** `GeneratorFunction` is not a global object, but
> could be obtained from generator function instance (see
> {{jsxref("GeneratorFunction")}} for more detail).

> **Note:** Using the `GeneratorFunction` constructor to
> create functions is not recommended since it needs the function body as a string
> which may prevent some JS engine optimizations and can also cause other problems.

As all other objects, {{jsxref("GeneratorFunction")}} objects can be created using the
`new` operator:

```js
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Zero or more names to be used by the function as formal argument names. Each must
    be a string that conforms to the rules for a valid JavaScript identifier or a list
    of such strings separated with a comma; for example `"x"`, `"theValue"`, or `"a,b"`.
- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

Invoking the `GeneratorFunction` constructor as a function (without using
the `new` operator) has the same effect as invoking it as a constructor.

## Function parameters

### Default parameters

Default function parameters allow formal parameters to be initialized with default
values if no value or `undefined` is passed. For more details,
see [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Rest parameters

The rest parameter syntax allows representing an indefinite number of arguments as an array.
For more details, see [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## The arguments object

You can refer to a function's arguments within the function by using the
`arguments` object. See [arguments](/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

- [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
  - : An array-like object containing the arguments passed to the currently executing function.
- [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : The currently executing function.
- [`arguments.length`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : The number of arguments passed to the function.

## Defining method functions

### Getter and setter functions

You can define getters (accessor methods) and setters (mutator methods) on any standard
built-in object or user-defined object that supports the addition of new properties.
The syntax for defining getters and setters uses the object literal syntax.

- [get](/en-US/docs/Web/JavaScript/Reference/Functions/get)
  - : Binds an object property to a function that will be called when that property is
    looked up.
- [set](/en-US/docs/Web/JavaScript/Reference/Functions/set)
  - : Binds an object property to a function to be called when there is an attempt to set
    that property.

### Method definition syntax

In object literals, you are able to define own methods in a shorter syntax, similar to the getters and setters. See [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for more information.

```js
const obj = {
  foo() {},
  bar() {},
};
```

## Constructor vs. declaration vs. expression

Compare the following:

A function defined with the `Function` _constructor_ assigned to the
variable `multiply`:

```js
const multiply = new Function('x', 'y', 'return x * y');
```

A _function declaration_ of a function named `multiply`:

```js
function multiply(x, y) {
  return x * y;
} // there is no semicolon here
```

A _function expression_ of an anonymous function assigned to the variable
`multiply`:

```js
const multiply = function (x, y) {
  return x * y;
};
```

A _function expression_ of a function named `funcName` assigned to
the variable `multiply`:

```js
const multiply = function funcName(x, y) {
  return x * y;
};
```

### Differences

All do approximately the same thing, with a few subtle differences:

There is a distinction between the function name and the variable the function is
assigned to. The function name cannot be changed, while the variable the function is
assigned to can be reassigned. The function name can be used only within the function's
body. Attempting to use it outside the function's body results in an error (or get another value, if the same name is declared elsewhere). For example:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

The function name also appears when the function is serialized via its
[`toString()` method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString).

On the other hand, the variable the function is assigned to is limited only by its
scope, which is guaranteed to include the scope in which the function is declared.

As the `const y = function x() {}` example shows, the function name can be different from the variable the
function is assigned to. They have no relation to each other. A function declaration
also creates a variable with the same name as the function name. Thus, unlike those
defined by function expressions, functions defined by function declarations can be
accessed by their name in the scope they were defined in, as well as in their own body.

A function defined by `new Function` will dynamically have its source assembled, which is observable when you serialize it. For example, `console.log(new Function().toString())` gives:

```js
function anonymous(
) {

}
```

This is the actual source used to compile the function. However, although the `Function()` constructor will create the function with name `anonymous`, this name is not added to the scope of the body. The body only ever has access to global variables. For example, the following would result in an error:

```js
new Function("alert(anonymous);")();
```

Unlike functions defined by function expressions or by the `Function`
constructor, a function defined by a function declaration can be used before the
function declaration itself. For example:

```js
foo(); // logs "FOO!"
function foo() {
  console.log('FOO!');
}
```

A function defined by a function expression or by a function declaration inherits the
current scope. That is, the function forms a closure. On the other hand, a function
defined by a `Function` constructor does not inherit any scope other than
the global scope (which all functions inherit).

```js
/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a variable with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
// var declarations create properties on the global object
var p = 5;
function myFunc() {
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function('\tconsole.log(p);');

  decl();
  expr();
  cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
```

Functions defined by function expressions and function declarations are parsed only
once, while those defined by the `Function` constructor are not. That is,
the function body string passed to the `Function` constructor must be parsed
each and every time the constructor is called. Although a function expression creates a
closure every time, the function body is not reparsed, so function expressions are
still faster than `new Function(...)`. Therefore the `Function`
constructor should generally be avoided whenever possible.

It should be noted, however, that function expressions and function declarations nested
within the function generated by parsing a `Function()` constructor's string
aren't parsed repeatedly. For example:

```js
const foo = (new Function("const bar = 'FOO!'; return function() { alert(bar); };"))();
foo(); // The segment "function() { alert(bar); }" of the function body string is not re-parsed.
```

A function declaration is very easily (and often unintentionally) turned into a
function expression. A function declaration ceases to be one when it either:

- becomes part of an expression
- is no longer a "source element" of a function or the script itself. A "source
  element" is a non-nested statement in the script or a function body:

```js
let x = 0;               // source element
if (x === 0) {           // source element
  x = 10;                // not a source element
  function boo() {}      // not a source element
}
function foo() {         // source element
  let y = 2;             // source element
  function bar() {}      // source element
  while (y < 10) {       // source element
    function blah() {}   // not a source element
    y++;                 // not a source element
  }
}
```

### Examples

```js
// function declaration
function foo() {}

// function expression
(function bar() {})

// function expression
x = function hello() {}

if (x) {
  // function expression
  function world() {}
}

// function declaration
function a() {
  // function declaration
  function b() {}
  if (0) {
    // function expression
    function c() {}
  }
}
```

## Block-level functions

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), starting
with ES2015, functions inside blocks are now scoped to that block. Prior to ES2015,
block-level functions were forbidden in strict mode.

```js
'use strict';

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

In a word: Don't.

In non-strict code, function declarations inside blocks behave strangely. For example:

```js
if (shouldDefineZero) {
  function zero() {     // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

ES2015 says that if `shouldDefineZero` is false, then `zero`
should never be defined, since the block never executes. However, it's a new part of
the standard. Historically, this was left unspecified, and some browsers would define
`zero` whether the block executed or not.

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), all
browsers that support ES2015 handle this the same way: `zero` is defined
only if `shouldDefineZero` is true, and only exists within that scope of the
`if`-block.

A safer way to define functions conditionally is to assign a function expression to a
variable:

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

The following function returns a string containing the formatted representation of a
number padded with leading zeros.

```js
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  let numStr = num.toString();             // Initialize return value as string
  const numZeros = totalLen - numStr.length; // Calculate no. of zeros
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

The following statements call the padZeros function.

```js
let result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4);  // returns "0005"
```

### Determining whether a function exists

You can determine whether a function exists by using the `typeof` operator.
In the following example, a test is performed to determine if the `window`
object has a property called `noFunc` that is a function. If so, it is used;
otherwise, some other action is taken.

```js
if (typeof window.noFunc === 'function') {
  // use noFunc()
} else {
  // do something else
}
```

Note that in the `if` test, a reference to `noFunc` is used—there
are no brackets "()" after the function name so the actual function is not called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions")}}
- {{jsxref("Functions/Default_parameters", "Default parameters")}}
- {{jsxref("Functions/rest_parameters", "Rest parameters")}}
- {{jsxref("Functions/arguments", "Arguments object")}}
- {{jsxref("Functions/get", "getter")}}
- {{jsxref("Functions/set", "setter")}}
- {{jsxref("Functions/Method_definitions", "Method definitions")}}
