---
title: Map() constructor
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
page-type: javascript-constructor
browser-compat: javascript.builtins.Map.Map
---

{{JSRef}}

The **`Map()`** constructor creates {{jsxref("Map")}} objects.

## Syntax

```js-nolint
new Map()
new Map(iterable)
```

> **Note:** `Map()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `iterable` {{optional_inline}}
  - : An {{jsxref("Array")}} or other
    [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) object
    whose elements are key-value pairs. (For example, arrays with two elements,
    such as `[[ 1, 'one' ],[ 2, 'two' ]]`.) Each key-value pair is added to the
    new `Map`.

## Examples

### Creating a new Map

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill for `Map` in `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
