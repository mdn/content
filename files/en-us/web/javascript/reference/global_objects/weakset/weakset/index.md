---
title: WeakSet() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
page-type: javascript-constructor
browser-compat: javascript.builtins.WeakSet.WeakSet
---

{{JSRef}}

The **`WeakSet()`** constructor creates {{jsxref("WeakSet")}} objects.

## Syntax

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> **Note:** `WeakSet()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `iterable` {{optional_inline}}
  - : If an [iterable object](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) is passed, all of its elements will be added to the new
    `WeakSet`. null is treated as undefined.

## Examples

### Using the WeakSet object

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Note that `foo !== bar`. While they are similar objects, _they are not
**the same object**_. And so they are both added to the set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
