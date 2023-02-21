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

`AsyncGeneratorFunction` is a subclass of {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/async-functionasterisk-function.html", "taller")}}

## Constructor

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Creates a new `AsyncGeneratorFunction` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Function")}}_.

These properties are defined on `AsyncGeneratorFunction.prototype` and shared by all `AsyncGeneratorFunction` instances.

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : The constructor function that created the instance object. For `AsyncGeneratorFunction` instances, the initial value is the {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} constructor.
- `AsyncGeneratorFunction.prototype.prototype`
  - : All async generator functions share the same [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which is [`AsyncGenerator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Each async generator function instance also has its own `prototype` property. When the async generator function is called, the returned async generator object inherits from the async generator function's `prototype` property, which in turn inherits from `AsyncGeneratorFunction.prototype.prototype`.
- `AsyncGeneratorFunction.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"AsyncGeneratorFunction"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

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
