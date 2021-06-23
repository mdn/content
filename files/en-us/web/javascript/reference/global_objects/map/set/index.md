---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.set
---
{{JSRef}}

The **`set()`** method adds or updates an element with a specified key and a
value to a `Map` object.

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## Syntax

```js
set(key, value)
```

### Parameters

- `key`
  - : The key of the element to add to the `Map` object.
- `value`
  - : The value of the element to add to the `Map` object.

### Return value

The `Map` object.

## Examples

### Using set()

```js
let myMap = new Map()

// Add new elements to the map
myMap.set('bar', 'foo')
myMap.set(1, 'foobar')

// Update an element in the map
myMap.set('bar', 'baz')
```

### Using the set() with chaining

Since the `set()` method returns back the same `Map` object, you can chain the
method call like below:

```js
// Add new elements to the map with chaining.
myMap.set('bar', 'foo')
     .set(1, 'foobar')
     .set(2, 'baz');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
