---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.delete
---
{{JSRef}}

The **`delete()`** method removes the specified element from a `Map` object by
key.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## Syntax

```js
delete(key)
```

### Parameters

- `key`
  - : The key of the element to remove from the `Map` object.

### Return value

`true` if an element in the `Map` object existed and has been removed, or
`false` if the element does not exist.

## Examples

### Using delete()

```js
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.delete('bar')); // Returns true. Successfully removed.
console.log(myMap.has('bar')); // Returns false. The "bar" element is no longer present.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
