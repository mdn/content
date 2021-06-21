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
initialization" occurs when a lexical variable was accessed before it was
initialized. This happens within any block statement, when
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declarations
are accessed before they are defined.

## Message

```js
ReferenceError: Use before delaration (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## Error type

{{jsxref("ReferenceError")}}

## What went wrong?

A lexical variable was accessed before it was initialized. This happens within
any block statement, when
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declarations
are accessed before they are defined.

## Examples

### Invalid cases

In this case, the variable "foo" is redeclared in the block statement using
`let`.

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = (foo + 55);
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### Valid cases

To change "foo" inside the if statement, you need to remove the `let` that
causes the redeclaration.

```js example-good
function test(){
   let foo = 33;
   if (true) {
      foo = (foo + 55);
   }
}
test();
```

## See also

- [Temporal Dead Zone and errors with let](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let)
