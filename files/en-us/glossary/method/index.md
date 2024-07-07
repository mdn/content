---
title: Method
slug: Glossary/Method
page-type: glossary-definition
---

{{GlossarySidebar}}

A **method** is a {{glossary("function")}} which is a {{glossary("property")}} of an {{glossary("object")}}. There are two kinds of methods: _instance methods_ which are built-in tasks performed by an object instance, or _{{Glossary("static method", "static methods")}}_ which are tasks that are called directly on an object constructor.

> **Note:** In JavaScript functions themselves are objects, so, in that context, a method is actually an {{glossary("object reference")}} to a function.

When `F` is said to be a _method_ of `O`, it often means that `F` uses `O` as its [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) binding. Function properties that do not have different behaviors based on their `this` value (or those that don't have a dynamic `this` binding at all — like [bound functions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) and [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) may not be universally recognized as methods.

## See also

- [Method (computer programming)](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) in Wikipedia
- [Defining a method in JavaScript](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (comparison of the traditional syntax and the new shorthand)
- [List of JavaScript built-in methods](/en-US/docs/Web/JavaScript/Reference)
- Related glossary terms:
  - {{Glossary("function")}}
  - {{Glossary("object")}}
  - {{Glossary("property")}}
  - {{Glossary("static method")}}
