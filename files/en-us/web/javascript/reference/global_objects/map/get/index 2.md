---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.get
---
{{JSRef}}

The **`get()`** method returns a specified element from a `Map` object. If the
value that is associated to the provided key is an object, then you will get a
reference to that object and any change made to that object will effectively
modify it inside the `Map` object.

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## Syntax

```js
get(key)
```

### Parameters

- `key`
  - : The key of the element to return from the `Map` object.

### Return value

The element associated with the specified key, or
{{jsxref("undefined")}} if the key can't be found in the `Map` object.

## Examples

### Using get()

```js
let myMap = new Map();
myMap.set('bar', 'foo');

myMap.get('bar');   // Returns "foo"
myMap.get('baz');   // Returns undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
