---
title: Iterator.prototype[Symbol.dispose]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.@@dispose
---

{{JSRef}}

The **`[Symbol.dispose]()`** method of {{jsxref("Iterator")}} instances implements the _disposable protocol_ and allows it to be disposed when used with {{jsxref("Statements/using", "using")}}. It calls the `return()` method of `this`, if it exists.

## Syntax

```js-nolint
iterator[Symbol.dispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Declaring an iterator with `using`

The `Symbol.dispose` method is intended to be automatically called in a `using` declaration. This is useful if you have an iterator that you manually iterate over by calling its `next()` method; if you iterate it with {{jsxref("Statements/for...of", "for...of")}} or something similar, then error handling and cleanup is done automatically.

```js
function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

function doSomething() {
  using numbers = generateNumbers();
  const res1 = numbers.next();
  // Not iterating the rest of the numbers
  // Before the function exists, the async iterator is disposed
  // Logs "Cleaning up"
}

doSomething();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
