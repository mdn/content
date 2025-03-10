---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
page-type: javascript-instance-method
browser-compat: javascript.builtins.Map.forEach
---

{{JSRef}}

The **`forEach()`** method of {{jsxref("Map")}} instances executes a provided function once per each key/value
pair in this map, in insertion order.

{{InteractiveExample("JavaScript Demo: Map.prototype.forEach()")}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each entry in the map. The function is called with the following arguments:
    - `value`
      - : Value of each iteration.
    - `key`
      - : Key of each iteration.
    - `map`
      - : The map being iterated.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `forEach` method executes the provided `callback` once for each key of the
map which actually exist. It is not invoked for keys which have been deleted.
However, it is executed for values which are present but have the value
`undefined`.

`callback` is invoked with **three arguments**:

- the entry's `value`
- the entry's `key`
- the **`Map` object** being traversed

If a `thisArg` parameter is provided to `forEach`, it will be passed to
`callback` when invoked, for use as its `this` value. Otherwise, the value
`undefined` will be passed for use as its `this` value. The `this` value
ultimately observable by `callback` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

Each value is visited once, except in the case when it was deleted and re-added
before `forEach` has finished. `callback` is not invoked for values deleted
before being visited. New values added before `forEach` has finished will be
visited.

## Examples

### Printing the contents of a Map object

The following code logs a line for each element in an `Map` object:

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);
// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
