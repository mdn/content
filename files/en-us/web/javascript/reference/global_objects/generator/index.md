---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
tags:
  - Class
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Legacy Generator
  - Legacy Iterator
  - Reference
browser-compat: javascript.builtins.Generator
---
{{JSRef}}

The **`Generator`** object is returned by a {{JSxRef("Statements/function*", "generator function", "", 1)}} and it conforms to both the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) and the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

## Constructor

This object cannot be instantiated directly. Instead, a `Generator` instance can be returned from a [generator function](/en-US/docs/Web/JavaScript/Reference/Statements/function*):

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

## Instance methods

- {{JSxRef("Generator.prototype.next()")}}
  - : Returns a value yielded by the {{JSxRef("Operators/yield", "yield")}} expression.
- {{JSxRef("Generator.prototype.return()")}}
  - : Returns the given value and finishes the generator.
- {{JSxRef("Generator.prototype.throw()")}}
  - : Throws an error to a generator (also finishes the generator, unless caught from within that generator).

## Examples

### An infinite iterator

With a generator function, values are not evaluated until they are needed. Therefore a generator allows us to define a potentially infinite data structure.

```js
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Statements/function*", "function*")}}
- {{JSxRef("Operators/function*", '<code>function*</code> expression', "", 1)}}
- {{JSxRef("GeneratorFunction")}}
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
