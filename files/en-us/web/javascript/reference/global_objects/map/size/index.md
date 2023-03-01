---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Map.size
---

{{JSRef}}

The **`size`** accessor property returns the number of elements in a
{{jsxref("Map")}} object.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Description

The value of `size` is an integer representing how many entries the `Map` object
has. A set accessor function for `size` is `undefined`; you can not change this
property.

## Examples

### Using size

```js
const myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

console.log(myMap.size); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
