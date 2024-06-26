---
title: GeneratorFunction.prototype.prototype
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype
page-type: javascript-instance-data-property
spec-urls:
  - https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-generatorfunction.prototype.prototype
  - https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-generatorfunction-instances-prototype
---

{{JSRef}}

The **`prototype`** property of `GeneratorFunction.prototype` is shared by all generator functions. Its value is [`Generator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). Each generator function created with the `function*` syntax or the `GeneratorFunction()` constructor also has its own `prototype` property, whose prototype is `GeneratorFunction.prototype.prototype`. When the generator function is called, its `prototype` property becomes the prototype of the returned generator object.

## Value

The same object as [`Generator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). `GeneratorFunction.prototype.prototype` is the technically more accurate name, but `Generator.prototype` appeals to the intuition that it's the prototype of generator objects.

{{js_property_attributes(1, 0, 0)}}

The `prototype` property of each `GeneratorFunction` instance is an empty object with no properties, whose prototype is `GeneratorFunction.prototype.prototype`. It has the following property attributes:

{{js_property_attributes(0, 0, 1)}}

## Description

A generator function instance has two `prototype` properties. The first one is its own `prototype` property. The second one is the `prototype` property on its prototype, which is `GeneratorFunction.prototype`. (Remember that every generator function is an instance of `GeneratorFunction`, so it has `GeneratorFunction.prototype` as its prototype.)

```js
function* genFunc() {}
const GeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(GeneratorFunctionPrototype, "prototype")); // true
```

When a generator function is called, the generator function's `prototype` property becomes the prototype of the returned generator object.

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === GeneratorFunctionPrototype.prototype); // true
```

The following diagram illustrates the prototype chain of a generator function and its instances. Each hollow arrow indicates an inheritance relationship (i.e. a prototype link), and each solid arrow indicates a property relationship. Note that there's no way to access `genFunc` from `gen` — they only have an `instanceof` relationship.

![The inheritance diagram of generators and generator functions](https://mdn.github.io/shared-assets/images/diagrams/javascript/generatorfunction/prototype-chain.svg)

## Specifications

{{Specifications}}

## See also

- [`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
