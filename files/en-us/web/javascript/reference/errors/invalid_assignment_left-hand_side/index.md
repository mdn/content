---
title: 'SyntaxError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid assignment left-hand side" occurs when there was an
unexpected assignment somewhere. For example, a single `=` sign was used
instead of `==` or `===`.

## Message

```
SyntaxError: Invalid left-hand side in assignment (V8-based)
SyntaxError: invalid assignment left-hand side (Firefox)
SyntaxError: Left side of assignment is not a reference. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

There was an unexpected assignment somewhere. This might be due to a mismatch of an
[assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
and an [equality operator](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators), for example.
While a single `=` sign assigns a value to a variable, the `==` or `===` operators compare a value.

## Examples

### Typical invalid assignments

```js example-bad
if (Math.PI + 1 = 3 || Math.PI + 1 = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

const str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

In the `if` statement, you want to use an equality operator (`===`), and for
the string concatenation, the plus (`+`) operator is needed.

```js example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log('no way!');
}

const str = 'Hello, '
+ 'from the '
+ 'other side!';
```

## See also

- [Assignment operators](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Equality operators](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators)
