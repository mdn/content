---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Map.getOrInsert
sidebar: jsref
---

{{SeeCompatTable}}

The **`getOrInsert()`** method of {{jsxref("Map")}} instances returns the value corresponding to the specified key in this `Map`. If the key is not present, it inserts a new entry with the key and a given default value, and returns the inserted value.

If the computation of the default value is expensive, consider using {{jsxref("Map.prototype.getOrInsertComputed()")}} instead, which takes a callback to compute the default value only if it's actually needed.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
console.log(map.getOrInsert("bar", "default"));
// Expected output: "foo"

console.log(map.getOrInsert("baz", "default"));
// Expected output: "default"
```

## Syntax

```js-nolint
getOrInsert(key, defaultValue)
```

### Parameters

- `key`
  - : The key of the value to return from the `Map` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `defaultValue`
  - : The value to insert and return if the key is not already present in the `Map` object.

### Return value

The value associated with the specified key in the `Map` object. If the key can't be found, `defaultValue` is inserted and returned.

## Description

The `getOrInsert()` method is equivalent to the following:

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

It is also similar to the following pattern (which is slightly less reliable if `null` or `undefined` are valid values in your map):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Examples

### Applying default values

You can use `getOrInsert()` to ensure that a key exists in a map, even if you currently don't need its value. This is usually to normalize user input.

Imagine you have a map of user preferences, and you want to ensure that a certain preference is always set to a default value if the user hasn't specified it:

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// Later in your code, you can safely assume these options exist
document.body.dataset.theme = options.get("theme");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Map.prototype.getOrInsert` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims polyfill of `Map.prototype.getOrInsert`](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
