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
unexpected type. Oftentimes, unexpected {{jsxref("undefined")}} or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
values.

## Message

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: "x" is undefined (Firefox)
TypeError: "undefined" is not an object (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)

TypeError: "x" is not a symbol (V8-based & Firefox)
TypeError: Symbol.keyFor requires that the first argument be a symbol (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

There was an unexpected type. This occurs oftentimes with {{jsxref("undefined")}} or
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) values.

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

To fix null pointer to `undefined` or `null` values, you can test if the value is `undefined` or `null` first.

```js example-good
if (foo !== undefined && foo !== null) {
  // Now we know that foo is defined, we are good to go.
}
```

Or, if you are confident that `foo` will not be another [falsy](/en-US/docs/Glossary/Falsy) value like `""` or `0`, or if filtering those cases out is not an issue, you can simply test for its truthiness.

```js example-good
if (foo) {
  // Now we know that foo is truthy, it will necessarily not be null/undefined.
}
```

## See also

- {{jsxref("undefined")}}
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
