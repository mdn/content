---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.set
sidebar: jsref
---

The **`set()`** method of {{jsxref("Map")}} instances adds a new entry with a specified key and value to this `Map`, or updates an existing entry if the key already exists.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// Expected output: "foo"

console.log(map.get("baz"));
// Expected output: undefined
```

## Syntax

```js-nolint
set(key, value)
```

### Parameters

- `key`
  - : The key of the entry to add to or modify within the `Map` object. Can be any value. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `value`
  - : The value of the entry to add to or modify within the `Map` object. Can be any value.

### Return value

The `Map` object.

## Examples

### Using set()

```js
const myMap = new Map();

// Add new elements to the map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Update an element in the map
myMap.set("bar", "baz");
```

### Using the set() with chaining

Since the `set()` method returns back the same `Map` object, you can chain the method call like below:

```js
// Add new elements to the map with chaining.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
