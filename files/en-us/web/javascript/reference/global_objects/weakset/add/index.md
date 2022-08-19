---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakSet
browser-compat: javascript.builtins.WeakSet.add
---
{{JSRef}}

The **`add()`** method appends a new object to the end of a
`WeakSet` object.

{{EmbedInteractiveExample("pages/js/weakset-prototype-add.html", "taller")}}

## Syntax

```js
add(value)
```

### Parameters

- value
  - : Required. The object to add to the `WeakSet` collection.

### Return value

The `WeakSet` object.

## Examples

### Using add

```js
const ws = new WeakSet();

ws.add(window); // add the window object to the WeakSet

ws.has(window); // true

// WeakSet only takes objects as arguments
ws.add(1);
// results in "TypeError: Invalid value used in weak set" in Chrome
// and "TypeError: 1 is not a non-null object" in Firefox
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
