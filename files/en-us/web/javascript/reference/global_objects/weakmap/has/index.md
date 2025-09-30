---
title: WeakMap.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.has
sidebar: jsref
---

The **`has()`** method of {{jsxref("WeakMap")}} instances returns a boolean indicating whether an entry with the specified key exists in this `WeakMap` or not.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");

console.log(weakmap.has(object1));
// Expected output: true

console.log(weakmap.has(object2));
// Expected output: false
```

## Syntax

```js-nolint
has(key)
```

### Parameters

- `key`
  - : The key of the entry to test for presence in the `WeakMap` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

Returns `true` if an entry with the specified key exists in the `WeakMap` object; otherwise `false`. Always returns `false` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using has()

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
