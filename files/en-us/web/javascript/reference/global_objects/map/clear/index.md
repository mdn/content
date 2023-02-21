---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.clear
---

{{JSRef}}

The **`clear()`** method removes all elements from a `Map` object.

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## Syntax

```js-nolint
clear()
```

### Return value

{{jsxref("undefined")}}.

## Examples

### Using clear()

```js
const myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

console.log(myMap.size);  // 2
console.log(myMap.has('bar')); // true

myMap.clear();

console.log(myMap.size);  // 0
console.log(myMap.has('bar')); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
