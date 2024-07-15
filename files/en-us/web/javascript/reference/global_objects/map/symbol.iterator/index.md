---
title: Map.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.@@iterator
---

{{JSRef}}

The **`[Symbol.iterator]()`** method of {{jsxref("Map")}} instances implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows `Map` objects to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops. It returns a [map iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the key-value pairs of the map in insertion order.

The initial value of this property is the same function object as the initial value of the {{jsxref("Map.prototype.entries")}} property.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
map[Symbol.iterator]()
```

### Parameters

None.

### Return value

The same return value as {{jsxref("Map.prototype.entries()")}}: a new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the key-value pairs of the map.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `[Symbol.iterator]()` method makes `Map` objects [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically call this method to obtain the iterator to loop over.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### Manually hand-rolling the iterator

You may still manually call the `next()` method of the returned iterator object to achieve maximum control over the iteration process.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
