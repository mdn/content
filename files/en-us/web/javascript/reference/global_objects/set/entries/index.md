---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - set
browser-compat: javascript.builtins.Set.entries
---
{{JSRef}}

The **`entries()`** method returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) object
that contains **an array of `[value, value]`** for each element
in the `Set` object, in insertion order. For `Set` objects there
is no `key` like in `Map` objects. However, to keep the API
similar to the `Map` object, each _entry_ has the same value for its
_key_ and _value_ here, so that an array `[value, value]` is
returned.

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## Syntax

```js
entries()
```

### Return value

A new iterator object that contains an array of `[value, value]` for each
element in the given `Set`, in insertion order.

## Examples

### Using entries()

```js
const mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
