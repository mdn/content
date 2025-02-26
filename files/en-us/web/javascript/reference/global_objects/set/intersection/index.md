---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.intersection
---

{{JSRef}}

The **`intersection()`** method of {{jsxref("Set")}} instances takes a set and returns a new set containing elements in both this set and the given set.

## Syntax

```js-nolint
intersection(other)
```

### Parameters

- `other`
  - : A {{jsxref("Set")}} object, or [set-like](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) object.

### Return value

A new {{jsxref("Set")}} object containing elements in both this set and the `other` set.

## Description

In mathematical notation, _intersection_ is defined as:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

And using Venn diagram:

![A Venn diagram where two circles overlap. The intersection of A and B is the part where they overlap.](diagram.svg)

`intersection()` accepts [set-like](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) objects as the `other` parameter. It requires {{jsxref("Operators/this", "this")}} to be an actual {{jsxref("Set")}} instance, because it directly retrieves the underlying data stored in `this` without invoking any user code. Then, its behavior depends on the sizes of `this` and `other`:

- If there are more elements in `this` than `other.size`, then it iterates over `other` by calling its `keys()` method, and constructs a new set with all elements produced that are also present in `this`.
- Otherwise, it iterates over the elements in `this`, and constructs a new set with all elements `e` in `this` that cause `other.has(e)` to return a [truthy](/en-US/docs/Glossary/Truthy) value.

Because of this implementation, the efficiency of `intersection()` mostly depends on the size of the smaller set between `this` and `other` (assuming sets can be accessed in sublinear time). The order of elements in the returned set is the same as that of the smaller of `this` and `other`.

## Examples

### Using intersection()

The following example computes the intersection between the set of odd numbers (<10) and the set of perfect squares (<10). The result is the set of odd numbers that are perfect squares.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Set.prototype.intersection` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
