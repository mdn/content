---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Map.size
---

{{JSRef}}

The **`size`** accessor property of {{jsxref("Map")}} instances returns the number of elements in this map.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Syntax

### Return value

The getter for `size` returns an integer representing how many entries the `Map` object has.

There is no setter for `size`, so you cannot change this property's value using assignment.

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
