---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
page-type: javascript-class
browser-compat: javascript.builtins.AsyncGenerator
---

{{JSRef}}

The **`AsyncGenerator`** object is returned by an {{jsxref("Statements/async_function*", "async generator function", "", 1)}} and it conforms to both the [async iterable protocol and the async iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Async generator methods always yield {{jsxref("Promise")}} objects.

`AsyncGenerator` is a subclass of the hidden {{jsxref("AsyncIterator")}} class.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Constructor

There's no JavaScript entity that corresponds to the `AsyncGenerator` constructor. Instances of `AsyncGenerator` must be returned from [async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*):

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

There's only a hidden object which is the prototype object shared by all objects created by async generator functions. This object is often stylized as `AsyncGenerator.prototype` to make it look like a class, but it should be more appropriately called {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}, because `AsyncGeneratorFunction` is an actual JavaScript entity. To understand the prototype chain of `AsyncGenerator` instances, see {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}.

## Instance properties

These properties are defined on `AsyncGenerator.prototype` and shared by all `AsyncGenerator` instances.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : The constructor function that created the instance object. For `AsyncGenerator` instances, the initial value is [`AsyncGeneratorFunction.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > **Note:** `AsyncGenerator` objects do not store a reference to the async generator function that created them.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"AsyncGenerator"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

_Also inherits instance methods from its parent {{jsxref("AsyncIterator")}}_.

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Returns a {{jsxref("Promise")}} which will be resolved with the given value yielded by the {{jsxref("Operators/yield", "yield")}} expression.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Acts as if a `return` statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) block.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Acts as if a `throw` statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Examples

### Async generator iteration

The following example iterates over an async generator, logging values 1–6 to the console at decreasing time intervals. Notice how each time a Promise is yielded, but it's automatically resolved within the `for await...of` loop.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(1000, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("All done!");
}

async function main() {
  for await (const value of generate()) {
    console.log("value", value);
  }
}

main().catch((e) => console.error(e));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "Generator Function", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Async Generator Function", "", 1)}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) guide
