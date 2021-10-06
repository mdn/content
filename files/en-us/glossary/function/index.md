---
title: Function
slug: Glossary/Function
tags:
  - CodingScripting
  - Glossary
  - IIFE
  - Immediately Invoked Function Expressions (IIFE)
  - Intro
  - JavaScript
---
A **function** is a code snippet that can be called by other code or by itself, or a {{Glossary("variable")}} that refers to the function. When a function is called, {{Glossary("Argument", "arguments")}} are passed to the function as input, and the function can optionally return a value. A function in {{glossary("JavaScript")}} is also an {{glossary("object")}}.

A function name is an {{Glossary("identifier")}} included as part of a function declaration or function expression. The function name's {{Glossary("scope")}} depends on whether the function name is a declaration or expression.

### Different types of functions

An **anonymous function** is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:

```js
// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() => {};
```

The following terms are not used in the ECMAScript language specification, they're jargon used to refer to different types of functions.

A **named function** is a function with a function name:

```js
// Function declaration
function foo() {};
// Named function expression
(function bar() {});
// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

An **inner function** is a function inside another function (`square` in this case). An **outer function** is a function containing a function (`addSquares` in this case):

```js
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) => {
   const square = x => x*x;
   return square(a) + square(b);
};
```

A **recursive function** is a function that calls itself. See {{Glossary("Recursion", "recursion")}}.

```js
function loop(x) {
   if (x >= 10)
      return;
   loop(x + 1);
};
//Using ECMAScript 2015 arrow notation
const loop = x => {
   if (x >= 10)
      return;
   loop(x + 1);
};
```

An **Immediately Invoked Function Expressions** ({{glossary("IIFE")}}) is a function that is called directly after the function is loaded into the browser’s compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s definition.

```js
// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

(() => console.log('hello world'))();
```

If you'd like to know more about IIFEs, check out the following page on Wikipedia : [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Arrow Functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
