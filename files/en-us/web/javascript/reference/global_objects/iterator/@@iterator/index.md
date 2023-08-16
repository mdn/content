---
title: Iterator.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.@@iterator
---

{{JSRef}}

The **`[@@iterator]()`** method of {{jsxref("Iterator")}} instances implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows built-in iterators to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops. It returns the value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Return value

The value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `@@iterator` method makes built-in iterators [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically call this method to obtain the iterator to loop over.

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Iterator")}}
- {{jsxref("Symbol.iterator")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
