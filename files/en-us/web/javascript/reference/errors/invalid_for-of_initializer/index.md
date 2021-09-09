---
title: >-
  SyntaxError: a declaration in the head of a for-of loop can't have an
  initializer
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
tags:
  - Error
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "a declaration in the head of a for-of loop can't have an initializer" occurs when the head of a[ for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop contains an initializer expression such as |`for (var i = 0 of iterable)`|. This is not allowed in for-of loops.

## Message

```js
SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The head of a[ for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop contains an initializer expression. That is, a variable is declared and assigned a value |`for (var i = 0 of iterable)`|. This is not allowed in for-of loops. You might want a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop that does allow an initializer.

## Examples

### Invalid `for-of` loop

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Valid `for-of` loop

You need to remove the initializer (`value = 50`) in the head of the `for-of` loop. Maybe you intended to make 50 an offset value, in that case you could add it to the loop body, for example.

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## See also

- [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) – disallows an initializer in strict mode as well ([SyntaxError: for-in loop head declarations may not have initializers](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) – allows to define an initializer when iterating.
