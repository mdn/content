---
title: Map.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.clear
sidebar: jsref
---

The **`clear()`** method of {{jsxref("Map")}} instances removes all elements from this map.

{{InteractiveExample("JavaScript Demo: Map.prototype.clear()")}}

```js interactive-example
const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size);
// Expected output: 2

map.clear();

console.log(map.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
