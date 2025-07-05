---
title: Set.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Set.size
---

{{JSRef}}

The **`size`** accessor property of {{jsxref("Set")}} instances returns the number of (unique) elements in this set.

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set = new Set();
const object = {};

set.add(42);
set.add("forty two");
set.add("forty two");
set.add(object);

console.log(set.size);
// Expected output: 3
```

## Description

The value of `size` is an integer representing how many entries the `Set` object has. A set accessor function for `size` is `undefined`; you cannot change this property.

## Examples

### Using size

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
