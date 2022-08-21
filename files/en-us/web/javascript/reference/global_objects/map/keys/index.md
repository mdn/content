---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
browser-compat: javascript.builtins.Map.keys
---

{{JSRef}}

The **`keys()`** method returns a new
_[iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)_ object
that contains the keys for each element in the `Map` object in insertion order. In this particular case, this iterator object is also an iterable, so a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop can be used.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## Syntax

```js
keys()
```

### Return value

A new {{jsxref("Map")}} iterator object.

## Examples

### Using keys()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
