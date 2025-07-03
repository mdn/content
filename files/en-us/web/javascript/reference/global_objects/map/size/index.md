---
title: Map.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Map.size
---

{{JSRef}}

The **`size`** accessor property of {{jsxref("Map")}} instances returns the number of elements in this map.

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Expected output: 3
```

## Description

The value of `size` is an integer representing how many entries the `Map` object
has. A set accessor function for `size` is `undefined`; you can not change this
property.

## Examples

### Using size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
