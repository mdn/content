---
title: Map.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.values
---

{{JSRef}}

The **`values()`** method of {{jsxref("Map")}} instances returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the values for each element in this map in insertion order.

{{InteractiveExample("JavaScript Demo: Map.prototype.values()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.values();

console.log(iterator.next().value);
// Expected output: "foo"

console.log(iterator.next().value);
// Expected output: "bar"
```

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using values()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
