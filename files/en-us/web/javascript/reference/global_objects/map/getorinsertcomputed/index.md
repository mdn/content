---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Map.getOrInsertComputed
sidebar: jsref
---

{{SeeCompatTable}}

The **`getOrInsertComputed()`** method of {{jsxref("Map")}} instances returns the value corresponding to the specified key in this `Map`. If the key is not present, it inserts a new entry with the key and a default value computed from a given callback, and returns the inserted value.

Use this method instead of {{jsxref("Map.prototype.getOrInsert()")}} when the default value is expensive to compute, and you want to avoid computing it unless it's actually needed.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsertComputed()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => `default for ${key}`;

console.log(map.getOrInsertComputed("bar", defaultCreator));
// Expected output: "foo"

console.log(map.getOrInsertComputed("baz", defaultCreator));
// Expected output: "default for baz"
```

## Syntax

```js-nolint
getOrInsertComputed(key, callback)
```

### Parameters

- `key`
  - : The key of the element to return from the `Map` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `callback`
  - : A function that returns the value to insert and return if the key is not already present in the `Map` object. The function is called with the following argument:
    - `key`
      - : The same key that was passed to `getOrInsertComputed()`.

### Return value

The value associated with the specified key in the `Map` object. If the key can't be found, the result of `callback(key)` is inserted and returned.

## Examples

### Avoiding unnecessary default computation

When using {{jsxref("Map.prototype.getOrInsert()")}}, the default value is computed every time, even if it is not needed. With `getOrInsertComputed()`, the default value is only computed when necessary.

```js
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => {
  console.log(`Creating default for ${key}`);
  return `default for ${key}`;
};

map.getOrInsert("bar", defaultCreator("bar")); // Logs "Creating default for bar"
map.getOrInsertComputed("bar", defaultCreator); // No log
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Map.prototype.getOrInsertComputed` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims polyfill of `Map.prototype.getOrInsertComputed`](https://www.npmjs.com/package/map.prototype.getorinsertcomputed)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsert()")}}
