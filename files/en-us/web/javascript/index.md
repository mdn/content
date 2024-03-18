---
title: JavaScript
slug: Web/JavaScript
page-type: landing-page
---

{{jsSidebar}}

**JavaScript** (**JS**) is a lightweight interpreted (or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled) programming language with {{Glossary("First-class Function", "first-class functions")}}. While it is most well-known as the scripting language for Web pages, [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) and [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript is a [prototype-based](/en-US/docs/Glossary/Prototype-based_programming), multi-paradigm, [single-threaded](/en-US/docs/Glossary/Thread), [dynamic](/en-US/docs/Glossary/Dynamic_typing) language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)), object introspection (via [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`Object` utilities](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)), and source-code recovery (JavaScript functions store their source text and can be retrieved through [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about {{Glossary("API", "APIs")}} that are specific to Web pages, please see [Web APIs](/en-US/docs/Web/API) and {{Glossary("DOM")}}.

The standards for JavaScript are the [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) and the [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some [proposals for new ECMAScript features](https://github.com/tc39/proposals) have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the [stages](https://tc39.es/process-document/) 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the [Java programming language](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript is _not_ "Interpreted Java"**. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

JavaScript documentation of core language features (pure [ECMAScript](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview), for the most part) includes the following:

- The [JavaScript guide](/en-US/docs/Web/JavaScript/Guide)
- The [JavaScript reference](/en-US/docs/Web/JavaScript/Reference)

For more information about JavaScript specifications and related technologies, see [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

## Tutorials

Learn how to program in JavaScript with guides and tutorials.

### For complete beginners

Head over to our [Learning Area JavaScript topic](/en-US/docs/Learn/JavaScript) if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

- [JavaScript first steps](/en-US/docs/Learn/JavaScript/First_steps)
  - : Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
- [JavaScript building blocks](/en-US/docs/Learn/JavaScript/Building_blocks)
  - : Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.
- [Introducing JavaScript objects](/en-US/docs/Learn/JavaScript/Objects)
  - : The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
  - : Discusses asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.
- [Client-side web APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Explores what APIs are, and how to use some of the most common APIs you'll come across often in your development work.

### JavaScript guide

- [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
  - : A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.

### Intermediate

- [Understanding client-side JavaScript frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.
- [JavaScript language overview](/en-US/docs/Web/JavaScript/Language_overview)
  - : An overview of the basic syntax and semantics of JavaScript for those coming from other programming languages to get up to speed.
- [JavaScript data structures](/en-US/docs/Web/JavaScript/Data_structures)
  - : Overview of available data structures in JavaScript.
- [Equality comparisons and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript provides three different value comparison operations: strict equality using `===`, loose equality using `==`, and the {{jsxref("Object.is()")}} method.
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : How different methods that visit a group of object properties one-by-one handle the enumerability and ownership of properties.
- [Closures](/en-US/docs/Web/JavaScript/Closures)
  - : A closure is the combination of a function and the lexical environment within which that function was declared.

### Advanced

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Explanation of the widely misunderstood and underestimated prototype-based inheritance.
- [Memory Management](/en-US/docs/Web/JavaScript/Memory_management)
  - : Memory life cycle and garbage collection in JavaScript.
- [The event loop](/en-US/docs/Web/JavaScript/Event_loop)
  - : JavaScript has a runtime model based on an "event loop".

## Reference

Browse the complete [JavaScript reference](/en-US/docs/Web/JavaScript/Reference) documentation.

- [Standard objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - : Get to know standard built-in objects {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, and others.
- [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Learn more about the behavior of JavaScript's operators {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, the [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), and more.
- [Statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)
  - : Learn how {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}}, and more JavaScript statements and keywords work.
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
  - : Learn how to work with JavaScript's functions to develop your applications.
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript classes are the most appropriate way to do object-oriented programming.
