---
title: function expression
slug: Web/JavaScript/Reference/Operators/function
page-type: javascript-operator
browser-compat: javascript.operators.function
---

{{jsSidebar("Operators")}}

The **`function`** keyword can be used to define a function inside an expression.

You can also define functions using the [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function) or the [arrow syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

{{InteractiveExample("JavaScript Demo: function expression", "shorter")}}

```js interactive-example
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```

## Syntax

```js-nolint
function (param0) {
  statements
}
function (param0, param1) {
  statements
}
function (param0, param1, /* …, */ paramN) {
  statements
}

function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> An [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the keyword `function` to avoid ambiguity with a [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function). The `function` keyword only begins an expression when it appears in a context that cannot accept statements.

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters).
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
  factorial: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factorial(3); // 3;2;1;
```

If a function expression is named, the [`name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property of the function is set to that name, instead of the implicit name inferred from syntax (such as the variable the function is assigned to).

Unlike declarations, the name of the function expressions is read-only.

```js
"use strict";

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

### Using function expression

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

[IIFEs](/en-US/docs/Glossary/IIFE) are a common pattern used to execute arbitrarily many statements in their own scope (and possibly return a value), in a location that requires a single expression. Many traditional use cases of IIFEs have been obsoleted by new syntax features such as [modules](/en-US/docs/Web/JavaScript/Guide/Modules) and [block-scoped declarations](/en-US/docs/Web/JavaScript/Reference/Statements/let). IIFEs themselves are more commonly written with [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) now, but the idea remains the same. In general, IIFEs look like this:

```js
// standard IIFE
(function () {
  // statements…
})();

// IIFE with arguments
(function (a, b) {
  console.log(a + b);
})(1, 2); // logs 3

// IIFE being used to initialize a variable
const value = (() => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
    return "heads";
  } else {
    return "tails";
  }
})();
```

Here, we introduce several use cases with examples.

### Avoid polluting the global namespace in script code

The top-level scope of all scripts are shared, which could include many functions and global variables from different files, so to avoid name conflicts, it's important to limit the number of globally declared names (this is greatly mitigated in [modules](/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts), but sometimes limiting the scope of temporary variables is still useful, especially when the file is very long). If we have some initialization code that we don't need to use again, we could use the IIFE pattern, which is better than using a function declaration or a function expression because it ensures that the code is only run here and once.

```js
// top-level of a script (not a module)

var globalVariable = (() => {
  // some initialization code
  let firstVariable = something();
  let secondVariable = somethingElse();
  return firstVariable + secondVariable;
})();

// firstVariable and secondVariable cannot be accessed outside of the function body.
```

### The module pattern

We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module
pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### For loop with var before ES6

We could see the following use of IIFE in some old code, before the introduction of the block-scoped `let` and `const` declarations. With the statement `var`, we have only function scopes and the global scope.
Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and when we click
them, we would like them to alert 0 and 1. The following code doesn't work:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, both Button 0 and Button 1 alert 2 because `i` is global,
with the last value 2. To fix this problem before ES6, we could use the IIFE pattern:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, Buttons 0 and 1 alert 0 and 1. The variable `i` is globally defined. Using the statement `let`, we could simply do:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

When clicked, these buttons alert 0 and 1.

### Control flow statements in expression positions

IIFEs enable us to use language constructs such as `switch` in an expression.

```js
someObject.property = (() => {
  switch (someVariable) {
    case 0:
      return "zero";
    case 1:
      return "one";
    default:
      return "unknown";
  }
})();
```

This approach can be especially useful in scenarios where you want to make a variable `const`, but
are forced to use `let` or `var` during initialization:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Using IIFEs, we can make the variable `const`:

```js
const onlyAssignedOnce = (() => {
  try {
    return someFunctionThatMightThrow();
  } catch (e) {
    return null;
  }
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
