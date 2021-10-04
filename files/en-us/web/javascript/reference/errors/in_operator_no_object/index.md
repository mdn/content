---
title: "TypeError: cannot use 'in' operator to search for 'x' in 'y'"
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---

{{jsSidebar("Errors")}}

The JavaScript exception "right-hand side of 'in' should be an object" occurs when the
[`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in)
was used to search in strings, or in numbers, or other primitive types. It can only be
used to check if a property is in an object.

## Message

```js
TypeError: Invalid operand to 'in' (Edge)
TypeError: right-hand side of 'in' should be an object, got 'x' (Firefox)
TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The [`in`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) can only be used to check if a property is in an object. You can't search
in strings, or in numbers, or other primitive types.

## Examples

### Searching in strings

Unlike in other programming languages (e.g. Python), you can't search in strings using
the [`in`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/in).

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

Instead you will need to use {{jsxref("String.prototype.indexOf()")}}, for example.

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### The operand can't be null or undefined

Make sure the object you are inspecting isn't actually {{jsxref("null")}} or
{{jsxref("undefined")}}.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

The `in` operator always expects an object.

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Searching in arrays

Be careful when using the `in` operator to search in {{jsxref("Array")}}
objects. The `in` operator checks the index number, not the value at that
index.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## See also

- [`in`
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/in)
