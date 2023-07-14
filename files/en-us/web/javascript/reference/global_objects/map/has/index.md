---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.has
---

{{JSRef}}

The **`has()`** method returns a boolean indicating whether an element with the
specified key exists or not.

{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}

## Syntax

```js-nolint
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
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
