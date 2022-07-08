---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakMap
browser-compat: javascript.builtins.WeakMap.get
---
{{JSRef}}

The **`get()`** method returns a specified element from a
`WeakMap` object.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## Syntax

```js
get(key)
```

### Parameters

- `key`
  - : Required. The key of the element to return from the `WeakMap` object.

### Return value

The element associated with the specified key in the `WeakMap` object. If
the key can't be found, {{jsxref("undefined")}} is returned.

## Examples

### Using the get() method

```js
const wm = new WeakMap();
wm.set(window, 'foo');

wm.get(window); // Returns "foo".
wm.get('baz');  // Returns undefined.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
