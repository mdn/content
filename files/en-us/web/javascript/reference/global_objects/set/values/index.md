---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - set
browser-compat: javascript.builtins.Set.values
---
{{JSRef}}

The **`values()`** method returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that
contains the values for each element in the `Set` object in insertion order.

> **Note:** The **`keys()`** method is an alias
> for this method (for similarity with {{jsxref("Map")}} objects), hence the
> `keys()` page redirecting here. It behaves exactly the same and returns
> **values** of `Set` elements.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## Syntax

```js
values()
```

### Return value

A new iterator object containing the values for each element in the given
`Set`, in insertion order.

## Examples

### Using values()

```js
const mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

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
