---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
page-type: javascript-class
browser-compat: javascript.builtins.AsyncGeneratorFunction
---

{{JSRef}}

The **`AsyncGeneratorFunction`** object provides methods for [async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*). In JavaScript, every async generator function is actually an `AsyncGeneratorFunction` object.

Note that `AsyncGeneratorFunction` is _not_ a global object. It can be obtained with the following code:

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

{{EmbedInteractiveExample("pages/js/async-functionasterisk-function.html", "taller")}}

## Constructor

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Creates a new `AsyncGeneratorFunction` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Function")}}_.

- `AsyncGeneratorFunction.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"AsyncGeneratorFunction"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- `AsyncGeneratorFunction.prototype.prototype`
  - : All async generator functions share the same [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which is [`AsyncGenerator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). When the function is called, this object becomes the prototype of the returned async generator object. An async generator function instance can also create its own `prototype` property, which will be used instead of `AsyncGeneratorFunction.prototype.prototype`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Function")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`async function*` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
