---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.@@iterator
---
{{JSRef}}

<p class="seoSummary">The initial value of the <strong><code>@@iterator</code></strong>
property is the same function object as the initial value of the
{{jsxref("Map.prototype.entries()", "entries")}} method.</p>

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js
myMap[Symbol.iterator]
```

### Return value

The map **iterator** function, which is the
{{jsxref("Map.prototype.entries()", "entries()")}} function by
default.

## Examples

### Using \[@@iterator]\()

```js
const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

const mapIter = myMap[Symbol.iterator]()

console.log(mapIter.next().value) // ["0", "foo"]
console.log(mapIter.next().value) // [1, "bar"]
console.log(mapIter.next().value) // [Object, "baz"]
```

### Using \[@@iterator]\() with for..of

```js
const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

for (const entry of myMap) {
  console.log(entry)
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`)
}
// 0: foo
// 1: bar
// [Object]: baz
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
