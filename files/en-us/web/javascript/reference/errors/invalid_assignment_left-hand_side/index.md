---
title: 'ReferenceError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
tags:
  - Error
  - Errors
  - JavaScript
  - ReferenceError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid assignment left-hand side" occurs when there was an
unexpected assignment somewhere. For example, a single "`=`" sign was used
instead of "`==`" or "`===`".

## Message

```js
ReferenceError: invalid assignment left-hand side
```

## Error type

{{jsxref("ReferenceError")}}.

## What went wrong?

There was an unexpected assignment somewhere. This might be due to a mismatch of an
[assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
and an [equality operator](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators), for example.
While a single "`=`" sign assigns a value to a variable, the "`==`" or "`===`" operators compare a value.

## Examples

### Typical invalid assignments

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

const str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

In the `if` statement, you want to use an equality operator ("=="), and for
the string concatenation, the plus ("+") operator is needed.

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log('no way!');
}

const str = 'Hello, '
+ 'from the '
+ 'other side!';
```

## See also

- [Assignment operators](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Equality operators](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators)
