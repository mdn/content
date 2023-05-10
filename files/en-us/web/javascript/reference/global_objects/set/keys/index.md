---
title: Set.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Set/keys
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.values
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.keys
---

{{JSRef}}

The **`keys()`** method is an alias for the [`values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values) method.

## Syntax

```js-nolint
keys()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using keys()

The `keys()` method is exactly equivalent to the {{jsxref("Set/values", "values()")}} method.

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.values()")}}
