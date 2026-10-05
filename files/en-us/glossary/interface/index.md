---
title: Interface
slug: Glossary/Interface
page-type: glossary-definition
sidebar: glossarysidebar
---

In [object-oriented programming](/en-US/docs/Glossary/OOP), an **interface** describes the set of {{Glossary("property", "properties")}} and {{Glossary("method", "methods")}} that an object exposes. An object that implements an interface can be handled correctly when passed to functions or constructs designed to interoperate with such interfaces. Usually, an interface is treated as a _contract_: other than the behavior of these properties and methods, objects implementing the same interface may not be related in any way at runtime.

The JavaScript language itself defines some interfaces, such as [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), and [disposable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose), which interoperate with language constructs such as [spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await), and [`using`](/en-US/docs/Web/JavaScript/Reference/Statements/using). Due to the lack of compilation or static type checking, these contracts are not embodied by any language constructs, so MDN also refers to them as "protocols".

In [TypeScript](/en-US/docs/Glossary/TypeScript), the [`interface` declaration](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) creates interfaces whose implementation can be enforced at compile-time.

In web standards terminology ({{Glossary("WebIDL")}} in particular), an interface describes the shape of objects provided by Web {{Glossary("API", "APIs")}}. Unlike the OOP sense, interfaces in WebIDL are actually embodied in the form of a constructor function and a prototype object. For example, the `HTMLButtonElement` interface is exposed as the {{domxref("HTMLButtonElement")}} constructor and the `HTMLButtonElement.prototype` object (which all instances inherit from). This makes WebIDL interfaces behave more similarly to JavaScript [classes](/en-US/docs/Web/JavaScript/Reference/Classes). An interface can inherit from other interfaces, and can include members from {{Glossary("Mixin", "mixins")}}.

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_classes)
- {{Glossary("WebIDL")}}
- {{Glossary("Mixin")}}
- [Information contained in a WebIDL file](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)
- [Interface (object-oriented programming)](<https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)>) on Wikipedia
- [WebIDL](https://webidl.spec.whatwg.org/) specification
