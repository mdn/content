---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakMap
browser-compat: javascript.builtins.WeakMap.set
---
{{JSRef}}

The **`set()`** method adds a new element with a specified key
and value to a `WeakMap` object.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## Syntax

```js
set(key, value)
```

### Parameters

- `key`
  - : Required. Must be `object`. The key of the element to add to the
    `WeakMap` object.
- `value`
  - : Required. Any value. The value of the element to add to the `WeakMap`
    object.

### Return value

The `WeakMap` object.

## Examples

### Using the set() method

```js
const wm = new WeakMap();
const obj = {};

// Add new elements to the WeakMap
wm.set(obj, 'foo').set(window, 'bar'); // chainable

// Update an element in the WeakMap
wm.set(obj, 'baz');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
