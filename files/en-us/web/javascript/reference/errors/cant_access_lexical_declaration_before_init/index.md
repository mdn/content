---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Error
  - Errors
  - JavaScript
  - ReferenceError
---
{{jsSidebar("Errors")}}

The JavaScript exception "can't access lexical declaration \`_variable_' before
initialization" occurs when a lexical variable was accessed before it was initialized.
This happens within any block statement, when
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
declarations are accessed before they are defined.

## Message

```js
ReferenceError: Cannot access 'X' before initialization (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## Error type

{{jsxref("ReferenceError")}}

## What went wrong?

A lexical variable was accessed before it was initialized. This happens within any
block statement, when
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
declarations are accessed before they are defined.

## Examples

### Invalid cases

In this case, the variable "foo" is accessed, even before it is declared which throws an reference error ( because variables declared using `let/const` are not [hoisted](/en-US/docs/Glossary/Hoisting) ).

```js example-bad
function test() {

  // Accessing the variable foo before it's declared 

  console.log(foo);     // ReferenceError: can't access lexical
  let foo = 33;         // 'foo' is declared here using the 'let' keyword
   
}
test();
```

### Valid cases

In the following example, we correctly declare a variable using the `let` keyword before accessing it, so we encounter no error. And in contrast, notice how we are accessing the `bar` variable even before it is declared — without encountering any error. That's because of the [hoisted](/en-US/docs/Glossary/Hoisting) nature of `var` variables.

```js example-good
function test(){

   // Declaring variable foo
   let foo = 33;
   console.log(foo, bar);    // 33 undefined
   var bar = 12;
}
test();
```

## See also

- [Temporal
  Dead Zone and errors with let](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let)
