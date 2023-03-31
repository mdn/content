---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
page-type: javascript-instance-method
browser-compat: javascript.functions.arguments.@@iterator
---

{{jsSidebar("Functions")}}

The **`@@iterator`** method of the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows `arguments` to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops. It returns an iterator that yields the value of each index in the `arguments` object.

The initial value of this property is the same function object as the initial value of the {{jsxref("Array.prototype.values")}} property (and also the same as [`Array.prototype[@@iterator]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)).

## Syntax

```js-nolint
arguments[Symbol.iterator]()
```

### Return value

The same return value as {{jsxref("Array.prototype.values()")}}: a new iterable iterator object that yields the value of each index in the `arguments` object.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `@@iterator` method makes `arguments` [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically calls this method to obtain the iterator to loop over.

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.values()")}}
