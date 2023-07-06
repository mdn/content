---
title: Function expression
slug: Web/JavaScript/Reference/Operators/function
page-type: javascript-operator
browser-compat: javascript.operators.function
---

{{jsSidebar("Operators")}}

The **`function`** keyword can be used to define a function inside an expression.

You can also define functions using the [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function) or the [arrow syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## Syntax

```js-nolint
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

> **Note:** An expression statement cannot begin with the keyword `function` to avoid ambiguity with a [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function). The `function` keyword only begins an expression when it appears in a context that cannot accept statements.

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of an argument to be passed to the function.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A `function` expression is very similar to, and has almost the same syntax as, a [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function). The main difference between a `function` expression and a `function` declaration is the _function name_, which can be omitted in `function` expressions to create _anonymous_ functions. A `function` expression can be used as an [IIFE](/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about [functions](/en-US/docs/Web/JavaScript/Reference/Functions) for more information.

### Function expression hoisting

Function expressions in JavaScript are not hoisted, unlike [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function#hoisting). You can't use function expressions before you create them:

```js
console.log(notHoisted); // undefined
// Even though the variable name is hoisted,
// the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression. This name is then local only to the function body (scope). This avoids using the deprecated {{jsxref("Functions/arguments/callee", "arguments.callee")}} property to call the function recursively.

```js
const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

If a function expression is named, the [`name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property of the function is set to that name, instead of the implicit name inferred from syntax (such as the variable the function is assigned to).

Unlike declarations, the name of the function expressions is read-only.

```js
function foo() {
  foo = 1;
}
foo();
console.log(foo); // 1
(function foo() {
  foo = 1; // TypeError: Assignment to constant variable.
})();
```

## Examples

### Creating an unnamed function

The following example defines an unnamed function and assigns it to `x`. The function returns the square of its argument:

```js
const x = function (y) {
  return y * y;
};
```

### Using a function as a callback

More commonly it is used as a {{Glossary("Callback_function", "callback")}}:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Using an Immediately Invoked Function Expression (IIFE)

An anonymous function is created and called:

```js-nolint
(function () {
  console.log("Code runs!");
})();

// or

!function () {
  console.log("Code runs!");
}();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("Operators/function*", "function*")}} expression
- {{jsxref("GeneratorFunction")}} object
- {{jsxref("Statements/async_function", "async function")}} declaration
- {{jsxref("Operators/async_function", "async function")}} expression
