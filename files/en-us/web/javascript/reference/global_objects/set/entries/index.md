---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.entries
---

{{JSRef}}

The **`entries()`** method returns a new _[set iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains **an array of `[value, value]`** for each element in the `Set` object, in insertion order. For `Set` objects there is no `key` like in `Map` objects. However, to keep the API similar to the `Map` object, each _entry_ has the same value for its _key_ and _value_ here, so that an array `[value, value]` is returned.

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## Syntax

```js-nolint
entries()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using entries()

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

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
