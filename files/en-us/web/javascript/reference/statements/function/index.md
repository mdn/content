---
title: function declaration
slug: Web/JavaScript/Reference/Statements/function
page-type: javascript-statement
browser-compat: javascript.statements.function
---

{{jsSidebar("Statements")}}

The **`function`** declaration creates a {{glossary("binding")}} of a new function to a given name.

You can also define functions using the [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function).

{{EmbedInteractiveExample("pages/js/statement-function.html","shorter")}}

## Syntax

```js-nolint
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

### Parameters

- `name`
  - : The function name.
- `param` {{optional_inline}}
  - : The name of an argument to be passed to the function. Maximum number of arguments
    varies in different engines.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A `function` declaration creates a {{jsxref("Function")}} object. Each time when a function is called, it returns the value specified by the last executed {{jsxref("Statements/return", "return")}} statement, or `undefined` if the end of the function body is reached. See [functions](/en-US/docs/Web/JavaScript/Reference/Functions) for detailed information on functions.

`function` declarations behave like a mix of {{jsxref("Statements/var", "var")}} and {{jsxref("Statements/let", "let")}}:

- Like `let`, in strict mode, [function declarations are scoped to the most closely containing block](#block-level_function_declaration).
- Like `let`, function declarations at the top level of a module or within blocks in strict mode cannot be [redeclared](#redeclarations) by any other declaration.
- Like `var`, function declarations at the top level of a script (strict or non-strict) become properties on {{jsxref("globalThis")}}. Function declarations at the top level of a script or function body (strict or non-strict) can be redeclared by another `function` or `var`.
- Like both, function declarations can be re-assigned, but you should avoid doing so.
- Unlike either, function declarations are [hoisted](#hoisting) together with its value and can be called anywhere in its scope.

### Block-level function declaration

> **Warning:** In [non-strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), function declarations inside blocks behave strangely. Only declare functions in blocks if you are in strict mode.

Functions can be conditionally declared — that is, a function statement can be nested within an [`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement. However, in non-strict mode, the results are inconsistent across implementations.

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is global. typeof foo is undefined
//
// In Firefox:
// 'foo' name is global. typeof foo is undefined
//
// In Safari:
// 'foo' name is global. typeof foo is function
```

The scoping and hoisting effect won't change regardless of whether the `if` body is actually executed.

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is global. typeof foo is undefined
//
// In Firefox:
// 'foo' name is global. typeof foo is undefined
//
// In Safari:
// 'foo' name is global. typeof foo is function
```

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), [block](/en-US/docs/Web/JavaScript/Reference/Statements/block)-level function declarations are scoped to that block and are hoisted to the top of the block.

```js
"use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
// 'foo' name is not global. typeof foo is undefined
```

### Hoisting

Function declarations in JavaScript are [hoisted](/en-US/docs/Glossary/Hoisting) to the top of the enclosing function or global scope. You can use the function before you declared it:

```js
hoisted(); // Logs "foo"

function hoisted() {
  console.log("foo");
}
```

Note that [function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function) are not hoisted:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Redeclarations

Whether `function` declarations can be redeclared in the same scope depends on what scope it's contained in.

At the top level of a script, `function` declarations behave like `var` and can be redeclared by another `function` or `var` but not by {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, or {{jsxref("Statements/class", "class")}}.

```js
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

When `function` declarations are redeclared by `var`, the `var` declaration's initializer always overrides the function's value, regardless of their relative position. This is because function declarations are hoisted before any initializer gets evaluated, so the initializer comes later and overrides the value.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

At the top level of a function's body, `function` also behaves like `var` and can be redeclared or have the same name as a parameter.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

At the top level of a module or a block in strict mode, `function` declarations behave like `let` and cannot be redeclared by any other declaration.

```js
// Assuming current source is a module
function foo() {}
function foo() {} // SyntaxError: Identifier 'foo' has already been declared
```

```js
"use strict";
{
  function foo() {}
  function foo() {} // SyntaxError: Identifier 'foo' has already been declared
}
```

A `function` declaration within a `catch` block cannot have the same name as the `catch`-bound identifier, even in non-strict mode.

```js
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Examples

### Using function

The following code declares a function that returns the total amount of sales, when given the number of units sold of three products.

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

- [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions reference](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
