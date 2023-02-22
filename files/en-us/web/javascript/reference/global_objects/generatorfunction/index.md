---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
page-type: javascript-class
browser-compat: javascript.builtins.GeneratorFunction
---

{{JSRef}}

The **`GeneratorFunction`** object provides methods for [generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*). In JavaScript, every generator function is actually a `GeneratorFunction` object.

Note that `GeneratorFunction` is _not_ a global object. It can be obtained with the following code:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` is a subclass of {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/functionasterisk-function.html", "taller")}}

## Constructor

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Creates a new `GeneratorFunction` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Function")}}_.

These properties are defined on `GeneratorFunction.prototype` and shared by all `GeneratorFunction` instances.

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : The constructor function that created the instance object. For `GeneratorFunction` instances, the initial value is the {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}} constructor.
- `GeneratorFunction.prototype.prototype`
  - : All generator functions share the same [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which is [`Generator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). Each generator function instance also has its own `prototype` property. When the generator function is called, the returned generator object inherits from the generator function's `prototype` property, which in turn inherits from `GeneratorFunction.prototype.prototype`.
- `GeneratorFunction.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"GeneratorFunction"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Function")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function*` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
