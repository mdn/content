---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.clear
---
{{JSRef}}

The **`clear()`** method removes all elements from a `Map` object.

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## Syntax

```js
clear()
```

### Return value

{{jsxref("undefined")}}.

## Examples

### Using clear()

```js
var myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

myMap.size;       // 2
myMap.has('bar'); // true

myMap.clear();

myMap.size;       // 0
myMap.has('bar')  // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
