---
title: "ReferenceError: can't access lexical declaration 'X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Error
  - Errors
  - JavaScript
  - ReferenceError
---
{{jsSidebar("Errors")}}

The JavaScript exception "can't access lexical declaration \`_variable_' before initialization" occurs when a lexical variable was accessed before it was initialized.
This happens within any block statement, when [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) variables are accessed before the line in which they are declared is executed.

## Message

```
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
For more information see: [Temporal Dead Zone and errors with let](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let).

Note also that this issue does not occur for variables declared using `var`, because they are initialized with a default value of `undefined` when they are [hoisted](/en-US/docs/Glossary/Hoisting).

## Examples

### Invalid cases

In this case, the variable `foo` is accessed before it is declared.
At this point is has not been initialized with a value, so accessing the variable throws a reference error.

```js example-bad
function test() {
  // Accessing the 'const' variable foo before it's declared
  console.log(foo);       // ReferenceError: foo is not initialized
  const foo = 33;         // 'foo' is declared and initialized here using the 'const' keyword
}

test();
```

### Valid cases

In the following example, we correctly declare a variable using the `const` keyword before accessing it.

```js example-good
function test() {
  // Declaring variable foo
  const foo = 33;
  console.log(foo);    // 33
}
test();
```
