---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.@@iterator
---

{{JSRef}}

The **`@@iterator`** method of a `Set` object implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows sets to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops. It returns an iterator that yields the values of the set.

The initial value of this property is the same function object as the initial value of the {{jsxref("Set.prototype.values")}} property.

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## Syntax

```js-nolint
set[Symbol.iterator]()
```

### Return value

The same return value as {{jsxref("Set.prototype.values()")}}: a new iterable iterator object that yields the values of the set.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `@@iterator` method makes `Set` objects [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically calls this method to obtain the iterator to loop over.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

### Manually hand-rolling the iterator

You may still manually call the `next()` method of the returned iterator object to achieve maximum control over the iteration process.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
