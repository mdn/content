---
title: Function expression
slug: Web/JavaScript/Reference/Operators/function
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expressions
browser-compat: javascript.operators.function
---
{{jsSidebar("Operators")}}

The **`function`** keyword can be used to define a function inside an expression.

You can also define functions using the {{jsxref("Function/Function", "Function")}} constructor and a {{jsxref("Statements/function", "function declaration", "", 1)}}.

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## Syntax

The expression is not allowed at the start of a statement.

```js
function (param0) {
  statements
}
function (param0, param1) {
  statements
}
function (param0, param1, /* … ,*/ paramN) {
  statements
}

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

You can also create functions using the [arrow function syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Parameters

- `name` {{optional_inline}}
  - : The function name.
    Can be omitted, in which case the function is _anonymous_.
    The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of an argument to be passed to the function.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A function expression is very similar to and has almost the same syntax as a function declaration (see {{jsxref("Statements/function", "function")}} statement for details).
The main difference between a function expression and a function declaration is the _function name_, which can be omitted in function expressions to create _anonymous_ functions.

A function expression can be used as an [IIFE (Immediately Invoked Function Expression)](/en-US/docs/Glossary/IIFE) which runs as soon as it is defined.
See also the chapter about {{jsxref("Functions", "functions", "", 1)}} for more information.

### Function expression hoisting

Function expressions in JavaScript are not hoisted, unlike {{jsxref("Statements/function", "function declarations", "#Function_declaration_hoisting", 1)}}.
You can't use function expressions before you create them:

```js
console.log(notHoisted); // undefined
//  even though the variable name is hoisted, the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log('bar');
};
```

### Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression.
**This name is then local only to the function body (scope)**.
This also avoids using the non-standard {{jsxref("Functions/arguments/callee", "arguments.callee")}} property.

```js
const math = {
  factit: function factorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;
```

The variable to which the function expression is assigned will have a `name` property.
The name doesn't change if it's assigned to a different variable.
If function name is omitted, it will be the variable name (implicit name).
If function name is present, it will be the function name (explicit name).
This also applies to {{jsxref("Functions/Arrow_functions", "arrow functions")}} (arrows don't have a name so you can only give the variable an implicit name).

```js
const foo = function () {};
foo.name // "foo"

const foo2 = foo;
foo2.name // "foo"

const bar = function baz() {};
bar.name // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
```

## Examples

### Creating an unnamed function

The following example defines an unnamed function and assigns it to `x`.
The function returns the square of its argument:

```js
const x = function (y) {
  return y * y;
};
```

### Using a function as a callback

More commonly it is used as a {{Glossary("Callback_function", "callback")}}:

```js
button.addEventListener('click', function (event) {
  console.log('button is clicked!');
})
```

### Using an Immediately Invoked Function Expression (IIFE)

An anonymous function is created and called:

```js
(function () {
  console.log('Code runs!');
})();

// or

!function () {
  console.log('Code runs!');
}();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("Operators/function*", "function*")}} expression
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "async function", "", 1)}}
- {{jsxref("Operators/async_function", "async function expression", "", 1)}}
