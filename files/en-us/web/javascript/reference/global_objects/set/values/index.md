---
title: Set.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.values
sidebar: jsref
---

The **`values()`** method of {{jsxref("Set")}} instances returns a new _[set iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the values for each element in this set in insertion order.

{{InteractiveExample("JavaScript Demo: Set.prototype.values()")}}

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.values();

console.log(iterator.next().value);
// Expected output: 42

console.log(iterator.next().value);
// Expected output: "forty two"
```

## Syntax

```js-nolint
values()
```

### Parameters

None.

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
