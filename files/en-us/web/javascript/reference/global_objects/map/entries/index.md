---
title: Map.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.entries
---

{{JSRef}}

The **`entries()`** method of {{jsxref("Map")}} instances returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the `[key, value]` pairs for each element in this map in insertion order.

{{InteractiveExample("JavaScript Demo: Map.prototype.entries()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.entries();

console.log(iterator.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator.next().value);
// Expected output: Array [1, "bar"]
```

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using entries()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
