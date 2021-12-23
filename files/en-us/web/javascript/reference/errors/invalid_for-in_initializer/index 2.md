---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript [strict
mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "for-in loop head declarations may not have initializers"
occurs when the head of a [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) contains
an initializer expression, such as |`for (var i = 0 in obj)`|. This is not
allowed in for-in loops in strict mode.

## Message

```js
SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
```

## Error type

{{jsxref("SyntaxError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

The head of a[
for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop contains an initializer expression. That is, a variable is declared
and assigned a value |`for (var i = 0 in obj)`|. In non-strict mode, this
head declaration is silently ignored and behaves like `|for (var i in obj)|`.
In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), however,
a `SyntaxError` is thrown.

## Examples

This example throws a `SyntaxError`:

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Valid for-in loop

You can remove the initializer (`i = 0`) in the head of the for-in loop.

```js example-good
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### Array iteration

The for...in loop [shouldn't
be used for Array iteration](/en-US/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in). Did you intend to use a
[`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop
instead of a `for-in` loop to iterate an {{jsxref("Array")}}? The
`for` loop allows you to set an initializer then as well:

```js example-good
var arr = [ "a", "b", "c" ]

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## See also

- [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  – also disallows an initializer in both strict and non-strict mode.
- [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) –
  preferred for array iteration, allows to define an initializer.
