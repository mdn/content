---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - WeakMap
browser-compat: javascript.builtins.WeakMap.delete
---
{{JSRef}}

The **`delete()`** method removes the specified element from a
{{jsxref("WeakMap")}} object.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## Syntax

```js
delete(key)
```

### Parameters

- `key`
  - : The key of the element to remove from the `WeakMap` object.

### Return value

`true` if an element in the `WeakMap` object has been removed
successfully. `false` if the key is not found in the `WeakMap` or
if the key is not an object.

## Examples

### Using the delete() method

```js
const wm = new WeakMap();
wm.set(window, 'foo');

wm.delete(window); // Returns true. Successfully removed.

wm.has(window);    // Returns false. The window object is no longer in the WeakMap.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
