---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - set
browser-compat: javascript.builtins.Set.has
---
{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
element with the specified value exists in a `Set` object or not.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## Syntax

```js
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

console.log(mySet.has("foo"));  // true
console.log(mySet.has("bar"));  // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1));        // true
console.log(set1.has({ key1: 1 })); // false, because they are different object references
console.log(set1.add({ key1: 1 })); // now set1 contains 2 entries
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
