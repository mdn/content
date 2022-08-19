---
title: About JavaScript
slug: Web/JavaScript/About_JavaScript
tags:
  - Beginner
  - Guide
  - Introduction
  - JavaScript
---
{{JsSidebar}}

## What is JavaScript?

**JavaScript** (often shortened to **JS**) is a lightweight, interpreted, object-oriented language with [first-class functions](https://en.wikipedia.org/wiki/First-class_function), and is best known as the scripting language for Web pages, but it's [used in many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) as well. It is a [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming), multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.

JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.

Contrary to popular misconception, **JavaScript is _not_ "Interpreted Java"**. In a nutshell, JavaScript is a dynamic scripting language supporting [prototype based](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as `if` statements, `for` and `while` loops, and `switch` and `try ... catch` blocks function the same as in these languages (or nearly so).

JavaScript can function as both a [procedural](https://en.wikipedia.org/wiki/Procedural_programming) and an [object oriented language](/en-US/docs/Learn/JavaScript/Objects). Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects **at run time**, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)), object introspection (via `for ... in`), and source code recovery (JavaScript programs can decompile function bodies back into their source text).

For a more in depth discussion of JavaScript programming follow the [JavaScript resources](#javascript_resources) links below.

## What JavaScript implementations are available?

The Mozilla project provides two JavaScript implementations. The first **ever** JavaScript was created by Brendan Eich at Netscape, and has since been updated to conform to ECMA-262 Edition 5 and later versions. This engine, code named [SpiderMonkey](https://spidermonkey.dev/), is implemented in C/C++. The [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) engine, created primarily by Norris Boyd (also at Netscape) is a JavaScript implementation written in Java. Like SpiderMonkey, Rhino is ECMA-262 Edition 5 compliant.

Several major runtime optimizations such as TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) and IonMonkey were added to the SpiderMonkey JavaScript engine over time. Work is always ongoing to improve JavaScript execution performance.

Besides the above implementations, there are other popular JavaScript engines such as:-

- Google's [V8](https://v8.dev/), which is used in the Google Chrome browser and recent versions of Opera browser. This is also the engine used by [Node.js](https://nodejs.org).
- The [JavaScriptCore](https://webkit.org/project/) (SquirrelFish/Nitro) used in some WebKit browsers such as Apple Safari.
- [Carakan](https://dev.opera.com/blog/carakan-faq/) in old versions of Opera.
- The [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) engine used in Internet Explorer (although the language it implements is formally called "JScript" in order to avoid trademark issues).

Each of Mozilla's JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the [DOM](https://dom.spec.whatwg.org/) into JavaScript.

Another common application for JavaScript is as a (Web) server side scripting language. A JavaScript web server would expose host objects representing a HTTP request and response objects, which could then be manipulated by a JavaScript program to dynamically generate web pages. [Node.js](https://nodejs.org) is a popular example of this.

## JavaScript resources

- [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)
  - : Pointers to published JavaScript standards and relevant resources.
- [A re-introduction to JavaScript](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : [JavaScript guide](/en-US/docs/Web/JavaScript/Guide) and [JavaScript reference](/en-US/docs/Web/JavaScript/Reference).

JavaScript® is a trademark or registered trademark of Oracle in the U.S. and other countries.
