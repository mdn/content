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
attempt to access properties of {{jsxref("null")}} and {{jsxref("undefined")}}. They
don't have any.

## Message

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

Both, {{jsxref("null")}} and {{jsxref("undefined")}}, have no properties you could
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

- {{jsxref("null")}}
- {{jsxref("undefined")}}
