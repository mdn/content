---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Landing page
  - Learn
  - l10n:priority
---
{{JsSidebar}}

**JavaScript** (**JS**) is a lightweight, interpreted, or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled programming language with {{Glossary("First-class Function", "first-class functions")}}. While it is most well-known as the scripting language for Web pages, [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) and [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript is a [prototype-based](/en-US/docs/Glossary/Prototype-based_programming), multi-paradigm, [single-threaded](/en-US/docs/Glossary/Thread), [dynamic](/en-US/docs/Glossary/Dynamic_typing) language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more [about JavaScript](/en-US/docs/Web/JavaScript/About_JavaScript).

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about {{Glossary("API","APIs")}} that are specific to Web pages, please see [Web APIs](/en-US/docs/Web/API) and {{Glossary("DOM")}}.

The standards for JavaScript are the [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) and the [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some [proposals for new ECMAScript features](https://github.com/tc39/proposals) have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the [stages](https://tc39.es/process-document/) 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the [Java programming language](<https://en.wikipedia.org/wiki/Java_(programming_language)>). Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

> **Callout:** **Looking to become a front-end web developer?**
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

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
- [A re-introduction to JavaScript](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : An overview for those who _think_ they know JavaScript.
- [JavaScript data structures](/en-US/docs/Web/JavaScript/Data_structures)
  - : Overview of available data structures in JavaScript.
- [Equality comparisons and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript provides three different value comparison operations: strict equality using `===`, loose equality using `==`, and the {{jsxref("Global_Objects/Object/is", "Object.is()")}} method.
- [Closures](/en-US/docs/Web/JavaScript/Closures)
  - : A closure is the combination of a function and the lexical environment within which that function was declared.

### Advanced

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Explanation of the widely misunderstood and underestimated prototype-based inheritance.
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
  - : Strict mode defines that you cannot use any variable before initializing it. It is a restricted variant of the language, for faster performance and easier debugging.
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript typed arrays provide a mechanism for accessing raw binary data.
- [Memory Management](/en-US/docs/Web/JavaScript/Memory_Management)
  - : Memory life cycle and garbage collection in JavaScript.
- [Concurrency model and Event Loop](/en-US/docs/Web/JavaScript/EventLoop)
  - : JavaScript has a concurrency model based on an "event loop".

## Reference

Browse the complete [JavaScript reference](/en-US/docs/Web/JavaScript/Reference) documentation.

- [Standard objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - : Get to know standard built-in objects {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, and others.
- [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Learn more about the behavior of JavaScript's operators {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, the [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), and more.
- [Statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)
  - : Learn how {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}}, and more JavaScript statements and keywords work.
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
  - : Learn how to work with JavaScript's functions to develop your applications.

## Tools & resources

Helpful tools for writing and debugging your **JavaScript** code.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), and more.
- [JavaScript Shells](/en-US/docs/Web/JavaScript/Shells)
  - : A JavaScript shell allows you to quickly test snippets of JavaScript code.
- [Learn JavaScript](https://learnjavascript.online/)
  - : An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free, and the complete course is available for a small one-time payment.
- [TogetherJS](https://togetherjs.com/)
  - : Collaboration made easy. By adding TogetherJS to your site, your users can help each other out on a website in real-time!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow questions tagged with "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Edit JavaScript, CSS, and HTML and get live results. Use external resources and collaborate with your team online.
- [Plunker](https://plnkr.co/)
  - : Plunker is an online community for creating, collaborating on, and sharing your web development ideas. Edit your JavaScript, CSS, and HTML files and get live results and file structure.
- [JSBin](https://jsbin.com/)
  - : JS Bin is an open-source collaborative web development debugging tool.
- [Codepen](https://codepen.io/)
  - : Codepen is another collaborative web development tool used as a live result playground.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz is another online playground/debugging tool, which can host and deploy full-stack applications using React, Angular, etc.
- [RunJS](https://runjs.app/)
  - : RunJS is a desktop playground/scratchpad tool, which provides live results and access to both Node and Browser APIs.
