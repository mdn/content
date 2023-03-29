---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.values
---

{{JSRef}}

The **`values()`** method returns a new
_[iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)_ object
that contains the values for each element in the `Map` object in insertion
order.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## Syntax

```js-nolint
values()
```

### Return value

A new {{jsxref("Map")}} iterator object.

## Examples

### Using values()

```js
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

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
