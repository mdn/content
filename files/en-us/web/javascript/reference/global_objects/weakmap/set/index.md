---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.set
---

{{JSRef}}

The **`set()`** method of {{jsxref("WeakMap")}} instances adds a new element with a specified key
and value to this `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## Syntax

```js-nolint
set(key, value)
```

### Parameters

- `key`
  - : Must be either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). The key of the entry to add to the `WeakMap` object.
- `value`
  - : Any value representing the value of the entry to add to the `WeakMap` object.

### Return value

The `WeakMap` object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using the set() method

```js
const wm = new WeakMap();
const obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");

// Using a non-registered symbol as key
const sym = Symbol("foo");
wm.set(sym, "baz");
wm.set(Symbol.iterator, "qux");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
