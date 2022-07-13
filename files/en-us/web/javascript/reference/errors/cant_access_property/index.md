---
title: 'TypeError: can''t access property "x" of "y"'
slug: Web/JavaScript/Reference/Errors/Cant_access_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "can't access property" occurs when property access was
operated on {{jsxref("undefined")}} or {{jsxref("null")}} values.

## Message

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: Cannot read properties of null (reading 'a') (V8-based)
TypeError: undefined has no properties (Firefox)
TypeError: null has no properties (Firefox)
TypeError: x is undefined (Firefox)
TypeError: x is null (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)
TypeError: null is not an object (evaluating 'obj.x') (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

The property access was operated on {{jsxref("undefined")}} or {{jsxref("null")}}
value.

## Examples

### Invalid cases

```js example-bad
// undefined and null cases on which the substring method won't work
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo is null
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
- {{jsxref("null")}}
