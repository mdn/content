---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
tags:
  - Error
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing = in const declaration" occurs when a const
declaration was not given a value in the same statement (like
`const RED_FLAG;`). You need to provide one
(`const RED_FLAG = '#ff0'`).

## Message

```
SyntaxError: Missing initializer in const declaration (V8-based)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A constant is a value that cannot be altered by the program during normal execution. It
cannot change through re-assignment, and it can't be redeclared. In JavaScript,
constants are declared using the
[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
keyword. An initializer for a constant is required; that is, you must specify its value
in the same statement in which it's declared (which makes sense, given that it can't be
changed later).

## Examples

### Missing const initializer

Unlike `var` or `let`, you must specify a value for a
`const` declaration. This throws:

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Fixing the error

There are multiple options to fix this error. Check what was intended to be achieved
with the constant in question.

#### Adding a constant value

Specify the constant value in the same statement in which it's declared:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` or `var`?

Do not use `const` if you weren't meaning to declare a constant. Maybe you
meant to declare a block-scoped variable with
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
global variable with
[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var). Both
don't require an initial value.

```js example-good
let columns;
```

## See also

- [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
