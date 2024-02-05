---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Set.size
---

{{JSRef}}

The **`size`** accessor property of {{jsxref("Set")}} instances returns the number of (unique) elements in this set.

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

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
