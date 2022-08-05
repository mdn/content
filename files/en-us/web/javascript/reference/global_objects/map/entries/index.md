---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
browser-compat: javascript.builtins.Map.entries
---
{{JSRef}}

The **`entries()`** method returns a new
_[iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)_ object
that contains the `[key, value]` pairs for each element in the `Map` object in
insertion order. In this particular case, this iterator object is also an
iterable, so the for-of loop can be used. When the protocol `[Symbol.iterator]`
is used, it returns a function that, when invoked, returns this iterator itself.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Syntax

```js
entries()
```

### Return value

A new {{jsxref("Map")}} iterator object.

## Examples

### Using entries()

```js
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

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
