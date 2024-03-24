---
title: "SyntaxError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid assignment left-hand side" occurs when there was an unexpected assignment somewhere. It may be triggered when a single `=` sign was used instead of `==` or `===`.

## Message

```plain
SyntaxError: Invalid left-hand side in assignment (V8-based)
SyntaxError: invalid assignment left-hand side (Firefox)
SyntaxError: Left side of assignment is not a reference. (Safari)
```

## Error type

{{jsxref("SyntaxError")}} or {{jsxref("ReferenceError")}}, depending on the syntax.

## What went wrong?

There was an unexpected assignment somewhere. This might be due to a mismatch of an [assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators) and an [equality operator](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators), for example. While a single `=` sign assigns a value to a variable, the `==` or `===` operators compare a value.

## Examples

### Typical invalid assignments

```js-nolint example-bad
if (Math.PI + 1 = 3 || Math.PI + 1 = 4) {
  console.log("no way!");
}
// SyntaxError: invalid assignment left-hand side

const str = "Hello, "
+= "is it me "
+= "you're looking for?";
// SyntaxError: invalid assignment left-hand side
```

In the `if` statement, you want to use an equality operator (`===`), and for the string concatenation, the plus (`+`) operator is needed.

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("no way!");
}

const str = "Hello, "
  + "from the "
  + "other side!";
```

### Assignments producing ReferenceErrors

Invalid assignments don't always produce syntax errors. Sometimes the syntax is almost correct, but at runtime, the left hand side expression evaluates to a _value_ instead of a _reference_, so the assignment is still invalid. Such errors occur later in execution, when the statement is actually executed.

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

Function calls, [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) calls, [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super), and [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) are all values instead of references. If you want to use them on the left hand side, the assignment target needs to be a property of their produced values instead.

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> **Note:** In Firefox and Safari, the first example produces a `ReferenceError` in non-strict mode, and a `SyntaxError` in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). Chrome throws a runtime `ReferenceError` for both strict and non-strict modes.

### Using optional chaining as assignment target

[Optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) is not a valid target of assignment.

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

Instead, you have to first guard the nullish case.

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## See also

- [Assignment operators](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Equality operators](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators)
