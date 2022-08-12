---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - set
browser-compat: javascript.builtins.Set.forEach
---
{{JSRef}}

The **`forEach()`** method executes a provided function once
for each value in the `Set` object, in insertion order.

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## Syntax

```js
// Arrow function
forEach(() => { /* ... */ } )
forEach((value) => { /* ... */ } )
forEach((value, key) => { /* ... */ } )
forEach((value, key, set) => { /* ... */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function() { /* ... */ })
forEach(function(value) { /* ... */ })
forEach(function(value, key) { /* ... */ })
forEach(function(value, key, set) { /* ... */ })
forEach(function(value, key, set) { /* ... */ }, thisArg)
```

### Parameters

- `callback`

  - : Function to execute for each element, taking three arguments:

    - `value`, `key`
      - : The current element being processed in the `Set`. As there are no
        keys in `Set`, the value is passed for both arguments.
    - `set`
      - : The `Set` object which `forEach()` was called upon.

- `thisArg`
  - : Value to use as `this` when executing `callbackFn`.

### Return value

{{jsxref("undefined")}}.

## Description

The `forEach()` method executes the provided
`callback` once for each value which actually exists in the
`Set` object. It is not invoked for values which have been deleted. However,
it is executed for values which are present but have the value `undefined`.

`callback` is invoked with **three arguments**:

- the **element value**
- the **element key**
- the **`Set` object being traversed**

There are no keys in `Set` objects, however, so the first two arguments are
both **values** contained in the {{jsxref("Set")}}. This is to make it
consistent with other `forEach()` methods for {{jsxref("Map.foreach",
  "Map")}} and {{jsxref("Array.forEach","Array")}}.

If a `thisArg` parameter is provided to `forEach()`,
it will be passed to `callback` when invoked, for use as its
`this` value. Otherwise, the value `undefined` will be passed for
use as its `this` value. The `this` value ultimately observable by
`callback` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

Each value is visited once, except in the case when it was deleted and re-added before
`forEach()` has finished. `callback` is not invoked for
values deleted before being visited. New values added before `forEach()` has
finished will be visited.

`forEach()` executes the `callback` function once for
each element in the `Set` object; it does not return a value.

## Examples

### Logging the contents of a Set object

The following code logs a line for each element in a `Set` object:

```js
function logSetElements(value1, value2, set) {
  console.log(`s[${value}] = ${value2}`);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
