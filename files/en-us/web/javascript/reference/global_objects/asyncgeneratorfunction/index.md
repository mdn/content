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

{{InteractiveExample("JavaScript Demo: AsyncGeneratorFunction()", "taller")}}

```js interactive-example
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## Constructor

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Creates a new `AsyncGeneratorFunction` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Function")}}_.

These properties are defined on `AsyncGeneratorFunction.prototype` and shared by all `AsyncGeneratorFunction` instances.

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : The constructor function that created the instance object. For `AsyncGeneratorFunction` instances, the initial value is the {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} constructor.
- `AsyncGeneratorFunction.prototype.prototype`
  - : All async generator functions share the same [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which is [`AsyncGenerator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Each async generator function created with the `async function*` syntax or the `AsyncGeneratorFunction()` constructor also has its own `prototype` property, whose prototype is `AsyncGeneratorFunction.prototype.prototype`. When the async generator function is called, its `prototype` property becomes the prototype of the returned async generator object.
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"AsyncGeneratorFunction"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

These properties are own properties of each `AsyncGeneratorFunction` instance.

- {{jsxref("AsyncGeneratorFunction/prototype", "prototype")}}
  - : Used when the function is used as a constructor with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. It will become the new object's prototype.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Function")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`async function*`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
