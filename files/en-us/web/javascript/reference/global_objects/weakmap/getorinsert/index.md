---
title: WeakMap.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.WeakMap.getOrInsert
sidebar: jsref
---

{{SeeCompatTable}}

The **`getOrInsert()`** method of {{jsxref("WeakMap")}} instances returns the value corresponding to the key in this `WeakMap`, or inserts and returns a default value if there is none.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsert()")}}

```js interactive-example
const map = new WeakMap([[window, "foo"]]);
console.log(map.getOrInsert(window, "default"));
// Expected output: "foo"

console.log(map.getOrInsert({}, "default"));
// Expected output: "default"
```

## Syntax

```js-nolint
getOrInsert(key, defaultValue)
```

### Parameters

- `key`
  - : The key of the value to return from the `WeakMap` object. Must be either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `defaultValue`
  - : The value to insert and return if the key is not already present in the `WeakMap` object.

### Return value

The value associated with the specified key in the `WeakMap` object. If the key can't be found, {{jsxref("undefined")}} is returned.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using getOrInsert()

```js
const wm = new WeakMap();
const obj = {};

console.log(wm.get(obj)); // undefined
console.log(wm.getOrInsert(obj, "default")); // "default"
console.log(wm.get(obj)); // "default"
console.log(wm.getOrInsert(obj, "another default")); // "default"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
