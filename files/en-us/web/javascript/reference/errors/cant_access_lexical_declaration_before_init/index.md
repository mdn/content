---
title: "ReferenceError: can't access lexical declaration 'X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "can't access lexical declaration \`_variable_' before initialization" occurs when a lexical variable was accessed before it was initialized.
This happens within any block statement, when [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) variables are accessed before the line in which they are declared is executed.

## Message

```plain
ReferenceError: Cannot access 'X' before initialization (V8-based)
ReferenceError: can't access lexical declaration 'X' before initialization (Firefox)
ReferenceError: Cannot access uninitialized variable. (Safari)
```

## Error type

{{jsxref("ReferenceError")}}

## What went wrong?

A lexical variable was accessed before it was initialized.
This happens within any block statement, when variables declared with [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) are accessed before the line in which they are declared has been executed.

Note that it is the execution order of access and variable declaration that matters, not the order in which the lines appear in the code.
For more information, see the description of [Temporal Dead Zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

This issue does not occur for variables declared using `var`, because they are initialized with a default value of `undefined` when they are [hoisted](/en-US/docs/Glossary/Hoisting).

This error can also occur in [cyclic imports](/en-US/docs/Web/JavaScript/Guide/Modules#cyclic_imports) when a module uses a variable that depends on the module itself being evaluated.

## Examples

### Invalid cases

In this case, the variable `foo` is accessed before it is declared.
At this point foo has not been initialized with a value, so accessing the variable throws a reference error.

```js example-bad
function test() {
  // Accessing the 'const' variable foo before it's declared
  console.log(foo); // ReferenceError: foo is not initialized
  const foo = 33; // 'foo' is declared and initialized here using the 'const' keyword
}

test();
```

In this example, the imported variable `a` is accessed but is uninitialized, because the evaluation of `a.js` is blocked by the evaluation of the current module `b.js`.

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

### Valid cases

In the following example, we correctly declare a variable using the `const` keyword before accessing it.

```js example-good
function test() {
  // Declaring variable foo
  const foo = 33;
  console.log(foo); // 33
}
test();
```

In this example, the imported variable `a` is asynchronously accessed, so both modules are evaluated before the access to `a` occurs.

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

## See also

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/class", "class")}}
