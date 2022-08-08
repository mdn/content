---
title: function declaration
slug: Web/JavaScript/Reference/Statements/function
tags:
  - Function
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.function
---
{{jsSidebar("Statements")}}

The **function declaration** (function statement) defines a function with
the specified parameters.

You can also define functions using the {{jsxref("Function")}} constructor and a
{{jsxref("Operators/function", "function expression", "", 1)}}.

{{EmbedInteractiveExample("pages/js/statement-function.html","shorter")}}

## Syntax

```js
function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

- `name`
  - : The function name.
- `param` {{optional_inline}}
  - : The name of an argument to be passed to the function. Maximum number of arguments
    varies in different engines.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A function created with a function declaration is a `Function` object and
has all the properties, methods and behavior of `Function` objects. See
{{jsxref("Function")}} for detailed information on functions.

A function can also be created using an expression (see {{jsxref("Operators/function",
  "function expression", "", 1)}}).

By default, functions return `undefined`. To return any other value, the
function must have a {{jsxref("Statements/return", "return")}} statement that specifies
the value to return.

### Conditionally created functions

Functions can be conditionally declared, that is, a function statement can be nested
within an `if` statement, however the results are inconsistent across
implementations and therefore this pattern should not be used in production code. For
conditional function creation, use function expressions instead.

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (false) {
  function foo(){ return 1; }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

The results are exactly the same for a condition that evaluates to true

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (true) {
  function foo(){ return 1; }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

### Function declaration hoisting

Function declarations in JavaScript are hoisted to the top of the enclosing function or
global scope. You can use the function before you declared it:

```js
hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}
```

Note that {{jsxref("Operators/function", "function expressions", "", 1)}} are not
hoisted:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
  console.log('bar');
};
```

## Examples

### Using function

The following code declares a function that returns the total amount of sales, when
given the number of units sold of three products.

```js
function calcSales(unitsA, unitsB, unitsC) {
  return unitsA * 79 + unitsB * 129 + unitsC * 699;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function")}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Statements/function*", "function* statement", "", 1)}}
- {{jsxref("Operators/function*", "function* expression", "", 1)}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "async function", "", 1)}}
- {{jsxref("Operators/async_function", "async function expression", "", 1)}}
