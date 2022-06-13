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

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: can't access property {x} of {y} (Firefox)
TypeError: {y} is undefined, can't access property {x} of it (Firefox)
TypeError: {y} is null, can't access property {x} of it (Firefox)

Examples:
TypeError: x is undefined, can't access property "prop" of it
TypeError: x is null, can't access property "prop" of it
TypeError: can't access property "prop" of undefined
TypeError: can't access property "prop" of null
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
var foo = undefined;
foo.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var foo = null;
foo.substring(1); // TypeError: x is null, can't access property "substring" of it
```

### Fixing the issue

To fix null pointer to `undefined` or `null` values, you can use
the [typeof](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator,
for example.

```js
if (typeof foo !== 'undefined') {
  // Now we know that foo is defined, we are good to go.
}
```

## See also

- {{jsxref("undefined")}}
- {{jsxref("null")}}
