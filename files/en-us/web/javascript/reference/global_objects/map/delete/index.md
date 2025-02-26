---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.delete
---

{{JSRef}}

The **`delete()`** method of {{jsxref("Map")}} instances removes the specified element from this map by
key.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## Syntax

```js-nolint
mapInstance.delete(key)
```

### Parameters

- `key`
  - : The key of the element to remove from the `Map` object.

### Return value

`true` if an element in the `Map` object existed and has been removed, or
`false` if the element does not exist.

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
