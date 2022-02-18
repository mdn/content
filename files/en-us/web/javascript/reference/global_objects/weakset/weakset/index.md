---
title: WeakSet() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
tags:
  - Constructor
  - JavaScript
  - Reference
  - WeakSet
  - Polyfill
browser-compat: javascript.builtins.WeakSet.WeakSet
---
{{JSRef}}

The **`WeakSet`** constructor lets you create
`WeakSet` objects that store weakly held _objects_ in a collection.

## Syntax

```js
new WeakSet()
new WeakSet(iterable)
```

### Parameters

- _iterable_
  - : If an [iterable
    object](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) is passed, all of its elements will be added to the new
    `WeakSet`. null is treated as undefined.

## Examples

### Using the WeakSet object

```js
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained
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
