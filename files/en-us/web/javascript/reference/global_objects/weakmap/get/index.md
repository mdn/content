---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.get
---

{{JSRef}}

The **`get()`** method of {{jsxref("WeakMap")}} instances returns a specified element from this `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key of the element to return from the `WeakMap` object.

### Return value

The element associated with the specified key in the `WeakMap` object. If
the key can't be found, {{jsxref("undefined")}} is returned. Always returns
`undefined` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using the get() method

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Returns "foo".
wm.get("baz"); // Returns undefined.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
