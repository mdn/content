---
title: arguments[Symbol.iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/Symbol.iterator
page-type: javascript-instance-method
browser-compat: javascript.functions.arguments.@@iterator
---

{{jsSidebar("Functions")}}

The **`[Symbol.iterator]()`** method of {{jsxref("Functions/arguments", "arguments")}} objects implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows `arguments` objects to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops. It returns an [array iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the value of each index in the `arguments` object.

The initial value of this property is the same function object as the initial value of the {{jsxref("Array.prototype.values")}} property (and also the same as [`Array.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)).

## Syntax

```js-nolint
arguments[Symbol.iterator]()
```

### Parameters

None.

### Return value

The same return value as {{jsxref("Array.prototype.values()")}}: a new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the value of each index in the `arguments` object.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `[Symbol.iterator]()` method makes `arguments` objects [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically call this method to obtain the iterator to loop over.

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

### Manually hand-rolling the iterator

You may still manually call the `next()` method of the returned iterator object to achieve maximum control over the iteration process.

```js
function f() {
  const argsIter = arguments[Symbol.iterator]();
  console.log(argsIter.next().value); // w
  console.log(argsIter.next().value); // y
  console.log(argsIter.next().value); // k
  console.log(argsIter.next().value); // o
  console.log(argsIter.next().value); // p
}
f("w", "y", "k", "o", "p");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
