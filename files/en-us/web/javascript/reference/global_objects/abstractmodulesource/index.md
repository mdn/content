---
title: AbstractModuleSource
slug: Web/JavaScript/Reference/Global_Objects/AbstractModuleSource
page-type: javascript-class
browser-compat: javascript.builtins.AbstractModuleSource
sidebar: jsref
---

An **_AbstractModuleSource_** object represents the compiled source of a module obtained with [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source) or [`import.source()`](/en-US/docs/Web/JavaScript/Reference/Operators/import/source). There is no directly visible `AbstractModuleSource` constructor.

## Description

The `AbstractModuleSource` constructor (often referred to as `%AbstractModuleSource%` to indicate its "intrinsicness", since it does not correspond to any global exposed to a JavaScript program) serves as the common superclass of all module source subclasses, providing a common interface of utility methods. This constructor is not directly exposed: there is no global `AbstractModuleSource` property. It is only accessible through `Object.getPrototypeOf(moduleSourceObject.constructor)` and similar.

### AbstractModuleSource objects

- [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module)

JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

## Constructor

This object cannot be instantiated directly — attempting to construct it with `new` throws a {{jsxref("TypeError")}}.

```js
import source modSource from "./module.wasm";

new (Object.getPrototypeOf(modSource.constructor))();
// TypeError: Abstract class AbstractModuleSource not directly constructable
```

Instead, obtain a module source object using `import source`, `import.source()`, or a concrete module type's API, such as `WebAssembly.Module()`. These concrete constructors do not call the abstract constructor.

## Instance properties

These properties are defined on `AbstractModuleSource.prototype` and shared by all `AbstractModuleSource` subclass instances.

- {{jsxref("Object/constructor", "AbstractModuleSource.prototype.constructor")}}
  - : The constructor function that created the instance object. `AbstractModuleSource.prototype.constructor` is the hidden `AbstractModuleSource` constructor function, but each module source subclass also defines its own `constructor` property.
- `AbstractModuleSource.prototype[Symbol.toStringTag]`
  - : The initial value of the [`AbstractModuleSource.prototype[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is a getter that returns a string based on the constructor's identity, such as `"WebAssembly.Module"` or `"ModuleSource"`. It returns `undefined` if the `this` value is not one of the module source subclasses. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module)
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("Statements/import/source", "import source")}}
