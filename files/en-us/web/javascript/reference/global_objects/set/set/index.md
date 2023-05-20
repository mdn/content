---
title: Set() constructor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
page-type: javascript-constructor
browser-compat: javascript.builtins.Set.Set
---

{{JSRef}}

The **`Set()`** constructor creates {{jsxref("Set")}} objects.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntax

```js-nolint
new Set()
new Set(iterable)
```

> **Note:** `Set()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `iterable` {{optional_inline}}

  - : If an [iterable object](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) is passed, all of its elements will be added to the new
    `Set`.

    If you don't specify this parameter, or its value is `null`, the new
    `Set` is empty.

### Return value

A new `Set` object.

## Examples

### Using the `Set` object

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
