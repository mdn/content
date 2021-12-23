---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.has
---
{{JSRef}}

The **`has()`** method returns a boolean indicating whether an element with the
specified key exists or not.

{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}

## Syntax

```js
has(key)
```

### Parameters

- `key`
  - : The key of the element to test for presence in the `Map` object.

### Return value

`true` if an element with the specified key exists in the `Map` object;
otherwise `false`.

## Examples

### Using has()

```js
let myMap = new Map()
myMap.set('bar', "foo")

myMap.has('bar')   // returns true
myMap.has('baz')   // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
