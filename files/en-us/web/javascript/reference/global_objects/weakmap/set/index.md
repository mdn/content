---
title: WeakMap.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.set
sidebar: jsref
---

The **`set()`** method of {{jsxref("WeakMap")}} instances adds a new entry with a specified key and value to this `WeakMap`, or updates an existing entry if the key already exists.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");
weakmap.set(object2, "bar");

console.log(weakmap.get(object1));
// Expected output: "foo"

console.log(weakmap.get(object2));
// Expected output: "bar"
```

## Syntax

```js-nolint
set(key, value)
```

### Parameters

- `key`
  - : The key of the entry to add to or modify within the `WeakMap` object. Must be either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `value`
  - : The value of the entry to add to or modify within the `WeakMap` object. Can be any value.

### Return value

The `WeakMap` object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using set()

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
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
