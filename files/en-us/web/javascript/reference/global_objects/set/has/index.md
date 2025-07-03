---
title: Set.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.has
---

{{JSRef}}

The **`has()`** method of {{jsxref("Set")}} instances returns a boolean indicating whether an
element with the specified value exists in this set or not.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// Expected output: true

console.log(set.has(5));
// Expected output: true

console.log(set.has(6));
// Expected output: false
```

## Syntax

```js-nolint
has(value)
```

### Parameters

- `value`
  - : The value to test for presence in the `Set` object.

### Return value

Returns `true` if an element with the specified value exists in the `Set` object; otherwise `false`.

## Examples

### Using the has() method

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set = new Set();
const obj = { key1: 1 };
set.add(obj);

console.log(set.has(obj)); // true
console.log(set.has({ key1: 1 })); // false, because they are different object references
console.log(set.add({ key1: 1 })); // now set contains 2 entries
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
