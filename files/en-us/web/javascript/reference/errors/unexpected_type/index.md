---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "_x_ is (not) _y_" occurs when there was an
unexpected type. Oftentimes, unexpected {{jsxref("undefined")}} or {{jsxref("null")}}
values.

## Message

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: "x" is (not) "y" (Firefox)

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

There was an unexpected type. This occurs oftentimes with {{jsxref("undefined")}} or
{{jsxref("null")}} values.

Also, certain methods, such as {{jsxref("Object.create()")}} or
{{jsxref("Symbol.keyFor()")}}, require a specific type, that must be provided.

## Examples

### Invalid cases

```js example-bad
// undefined and null cases on which the substring method won't work
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
const foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Fixing the issue

To fix null pointer to `undefined` values,
you can use the [typeof](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator,
for example.

```js
if (foo !== undefined) {
  // Now we know that foo is defined, we are good to go.
}

if (typeof foo !== 'undefined') {
  // The same idea, but prefer to use the one above - this one
  // allows typos which accidentally test an undeclared variable.
}
```

## See also

- {{jsxref("undefined")}}
- {{jsxref("null")}}
