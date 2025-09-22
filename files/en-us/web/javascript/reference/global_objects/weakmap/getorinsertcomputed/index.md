---
title: WeakMap.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.WeakMap.getOrInsertComputed
sidebar: jsref
---

{{SeeCompatTable}}

The **`getOrInsertComputed()`** method of {{jsxref("WeakMap")}} instances returns the value corresponding to the key in this `WeakMap`, or inserts and returns a default value computed from a callback if there is none.

Use this method instead of {{jsxref("WeakMap.prototype.getOrInsert()")}} when the default value is expensive to compute, and you want to avoid computing it unless it's actually needed.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsertComputed()")}}

```js interactive-example
const alan = { name: "Alan" };
const map = new WeakMap([[alan, 35]]);
const defaultCreator = (obj) => `${obj.name}'s age is unknown`;

console.log(map.getOrInsertComputed(alan, defaultCreator));
// Expected output: 35

const brett = { name: "Brett" };
console.log(map.getOrInsertComputed(brett, defaultCreator));
// Expected output: "Brett's age is unknown"
```

## Syntax

```js-nolint
getOrInsertComputed(key, callback)
```

### Parameters

- `key`
  - : The key of the element to return from the `Map` object. Must be either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.
- `callback`
  - : A function that returns the value to insert and return if the key is not already present in the `Map` object. The function is called with the following argument:
    - `key`
      - : The same key that was passed to `getOrInsertComputed()`.

### Return value

The value associated with the specified key in the `WeakMap` object. If the key can't be found, `callback(key)` is inserted and returned.

## Examples

### Caching

Caching involves building a mapping from the parameter of an expensive function to its return value, so that future calls with the same parameter can return the cached value instead of recomputing it. When no cached value exists, it needs to be computed and inserted into the cache.

We use a `WeakMap` here instead of a `Map`, so that the cached argument values do not prevent them from being garbage-collected if they are no longer needed elsewhere in the program. If your cached function takes non-object arguments, you can use a `Map` instead.

```js
// Any expensive function you want to cache
function computeExpensiveValue(requestOptions) {
  // Imagine expensive computation, like fetching data or complex calculations
  console.log(`Fetching from ${requestOptions.url}`);
  return new Response("Fake response");
}

// A higher-order function that adds caching to any function
function withCache(fn) {
  const cache = new WeakMap();
  return (param) => cache.getOrInsertComputed(param, fn);
}

const computeWithCache = withCache(computeExpensiveValue);
const options = { url: "https://example.com/a", method: "GET" };
const value1 = computeWithCache(options); // Logs "Fetching from https://example.com/a"
const value2 = computeWithCache(options); // No log
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
