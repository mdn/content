---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.entries
---

{{JSRef}}

The **`entries()`** method returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the `[key, value]` pairs for each element in the `Map` object in insertion order.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Syntax

```js-nolint
entries()
```

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
