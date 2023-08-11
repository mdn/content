---
title: GeneratorFunction() constructor
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
page-type: javascript-constructor
browser-compat: javascript.builtins.GeneratorFunction.GeneratorFunction
---

{{JSRef}}

The **`GeneratorFunction()`** constructor creates {{jsxref("GeneratorFunction")}} objects.

Note that `GeneratorFunction` is _not_ a global object. It can be obtained with the following code:

```js
const GeneratorFunction = function* () {}.constructor;
```

The `GeneratorFunction()` constructor is not intended to be used directly, and all caveats mentioned in the {{jsxref("Function/Function", "Function()")}} description apply to `GeneratorFunction()`.

## Syntax

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg0, functionBody)
new GeneratorFunction(arg0, arg1, functionBody)
new GeneratorFunction(arg0, arg1, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg0, functionBody)
GeneratorFunction(arg0, arg1, functionBody)
GeneratorFunction(arg0, arg1, /* …, */ argN, functionBody)
```

> **Note:** `GeneratorFunction()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `GeneratorFunction` instance.

### Parameters

See {{jsxref("Function/Function", "Function()")}}.

## Examples

### Creating and using a GeneratorFunction() constructor

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function*` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Functions", "Functions", "", 1)}}
