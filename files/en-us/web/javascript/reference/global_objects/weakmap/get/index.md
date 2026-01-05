---
title: WeakMap.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.get
sidebar: jsref
---

The **`get()`** method of {{jsxref("WeakMap")}} instances returns the value corresponding to the key in this `WeakMap`, or `undefined` if there is none. Object values are returned as the same reference that was originally stored, not as a copy, so mutations to the returned object will be reflected anywhere that reference is held, including inside the `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, 42);

console.log(weakmap.get(object1));
// Expected output: 42

console.log(weakmap.get(object2));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key of the value to return from the `WeakMap` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

The value associated with the specified key in the `WeakMap` object. If the key can't be found, {{jsxref("undefined")}} is returned. Always returns `undefined` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using get()

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
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
