---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.values
---

{{JSRef}}

The **`values()`** method returns a new _[set iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the values for each element in the `Set` object in insertion order.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## Syntax

```js-nolint
values()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using values()

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.values();

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
- {{jsxref("Set.prototype.keys()")}}
