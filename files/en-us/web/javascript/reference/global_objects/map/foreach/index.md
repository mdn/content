---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.forEach
---
{{JSRef}}

The **`forEach()`** method executes a provided function once per each key/value
pair in the `Map` object, in insertion order.

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## Syntax

```js
// Arrow function
forEach(() => { ... } )
forEach((value) => { ... } )
forEach((value, key) => { ... } )
forEach((value, key, map) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function callbackFn() { ... })
forEach(function callbackFn(value) { ... })
forEach(function callbackFn(value, key) { ... })
forEach(function callbackFn(value, key, map) { ... })
forEach(function callbackFn(value, key, map) { ... }, thisArg)
```

### Parameters

- `callbackFn`
  - : Function to execute for each entry of `myMap`. It takes the following
    arguments:
    - `value` {{Optional_Inline}}
      - : Value of each iteration.
    - `key` {{Optional_Inline}}
      - : Key of each iteration.
    - `map` {{Optional_Inline}}
      - : The map being iterated (`myMap` in the above Syntax box).
- `thisArg` {{Optional_Inline}}
  - : Value to use as `this` when executing `callback`.

### Return value

{{jsxref("undefined")}}.

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
    console.log(`map.get('${key}') = ${value}`)
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
// logs:
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
