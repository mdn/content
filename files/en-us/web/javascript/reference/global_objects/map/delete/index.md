---
title: Map.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.delete
sidebar: jsref
---

The **`delete()`** method of {{jsxref("Map")}} instances removes the entry specified by the key from this `Map`.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map.has("bar"));
// Expected result: false
```

## Syntax

```js-nolint
mapInstance.delete(key)
```

### Parameters

- `key`
  - : The key of the entry to remove from the `Map` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

`true` if an entry in the `Map` object has been removed successfully. `false` if the key is not found in the `Map`.

## Examples

### Using delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Returns true. Successfully removed.
console.log(myMap.has("bar")); // Returns false. The "bar" element is no longer present.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.clear()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
