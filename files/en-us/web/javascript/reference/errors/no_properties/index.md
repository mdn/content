---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "null (or undefined) has no properties" occurs when you
attempt to access properties of [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and {{jsxref("undefined")}}. They
don't have any.

## Message

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

Both [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and {{jsxref("undefined")}}, have no properties you could
access.

## Examples

### null and undefined have no properties

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## See also

- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
