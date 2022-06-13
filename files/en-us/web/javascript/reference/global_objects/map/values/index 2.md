---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
browser-compat: javascript.builtins.Map.values
---
{{JSRef}}

The **`values()`** method returns a new
**[Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)** object
that contains the values for each element in the `Map` object in insertion
order.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## Syntax

```js
values()
```

### Return value

A new {{jsxref("Map")}} iterator object.

## Examples

### Using values()

```js
var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.values();

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
