---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakSet
browser-compat: javascript.builtins.WeakSet.delete
---
{{JSRef}}

The **`delete()`** method removes the specified element from a
`WeakSet` object.

{{EmbedInteractiveExample("pages/js/weakset-prototype-delete.html")}}

## Syntax

```js
delete(value)
```

### Parameters

- `value`
  - : Required. The object remove from the `WeakSet` object.

### Return value

`true` if an element in the `WeakSet` object has been removed
successfully. `false` if the `value` is not found in
the `WeakSet` or if the `value` is not an object.

## Examples

### Using the delete() method

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj);    // Returns false. No obj found to be deleted.
ws.delete(window); // Returns true.  Successfully removed.

ws.has(window);    // Returns false. The window is no longer present in the WeakSet.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.has()")}}
