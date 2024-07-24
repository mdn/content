---
title: JavaScript technologies overview
slug: Web/JavaScript/JavaScript_technologies_overview
page-type: guide
---

{{jsSidebar("Introductory")}}

Whereas [HTML](/en-US/docs/Web/HTML) defines a webpage's structure and content and [CSS](/en-US/docs/Web/CSS) sets the formatting and appearance, [JavaScript](/en-US/docs/Web/JavaScript) adds interactivity to a webpage and creates rich web applications.

However, the umbrella term "JavaScript" as understood in a web browser context contains several very different elements. One of them is the core language (ECMAScript), another is the collection of the [Web APIs](/en-US/docs/Web/API), including the DOM (Document Object Model).

## JavaScript, the core language (ECMAScript)

The core language of JavaScript is standardized by the ECMA TC39 committee as a language named ECMAScript. "ECMAScript" is the term for the language standard, but "ECMAScript" and "JavaScript" can be used interchangeably.

This core language is also used in non-browser environments, for example in [Node.js](https://nodejs.org).

### What falls under the ECMAScript scope?

Among other things, ECMAScript defines:

- Language syntax (parsing rules, keywords, control flow, object literal initialization, ...)
- Error handling mechanisms ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, ability to create user-defined {{jsxref("Error")}} types)
- Types (boolean, number, string, function, object, ...)
- A prototype-based inheritance mechanism
- Built-in objects and functions, including {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, etc.
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- A [module system](/en-US/docs/Web/JavaScript/Guide/Modules)
- Basic memory model

### Standardization process

ECMAScript editions are approved and published as a standard by the ECMA General Assembly on a yearly basis. All development is public on the [Ecma TC39 GitHub organization](https://github.com/tc39), which hosts proposals, the official specification text, and meeting notes.

Before the 6th edition of ECMAScript (known as ES6), specifications were published once every several years, and are commonly referred by their major version numbers — ES3, ES5, etc. After ES6, the specification is named by the publishing year — ES2017, ES2018, etc. ES6 is synonymous with ES2015. _ESNext_ is a dynamic name that refers to whatever the next version is at the time of writing. ESNext features are more correctly called proposals, because, by definition, the specification has not been finalized yet.

The current committee-approved snapshot of ECMA-262 is available in PDF and HTML format on Ecma International's [ECMA-262 language specification page](https://ecma-international.org/publications-and-standards/standards/ecma-262/). ECMA-262 and ECMA-402 are continuously maintained and kept up to date by the specification editors; the TC39 website hosts the latest, up-to-date [ECMA-262](https://tc39.es/ecma262/) and [ECMA-402](https://tc39.es/ecma402/) versions.

New language features, including introduction of new syntaxes and APIs and revision of existing behaviors, are discussed in the form of proposals. Each proposal goes through a [4-stage process](https://tc39.es/process-document/), and is typically implemented by JavaScript engines at stage 3 or stage 4 and thus available for public consumption.

See [Wikipedia ECMAScript entry](https://en.wikipedia.org/wiki/ECMAScript) for more information on ECMAScript history.

### Internationalization API

The [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) is an addition to the ECMAScript Language Specification, also standardized by Ecma TC39. The internationalization API provides collation (string comparison), number formatting, and date-and-time formatting for JavaScript applications, letting the applications choose the language and tailor the functionality to their needs. The initial standard was approved in December 2012; the status of implementations in browsers is tracked in the documentation of the {{jsxref("Intl")}} object. The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.

### Related resources

There are a variety of ways you can participate in or just track current work on the ECMAScript Language Specification and the ECMAScript Internationalization API Specification and related resources:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM APIs

### WebIDL

The [WebIDL specification](https://webidl.spec.whatwg.org/) provides the glue between the DOM technologies and ECMAScript.

### The Core of the DOM

The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the **DOM tree** may be addressed and manipulated by using methods on the objects. The [W3C](/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model, which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:

- The document structure, a tree model, and the DOM Event architecture in [DOM core](https://dom.spec.whatwg.org/): [`Node`](/en-US/docs/Web/API/Node), [`Element`](/en-US/docs/Web/API/Element), [`DocumentFragment`](/en-US/docs/Web/API/DocumentFragment), [`Document`](/en-US/docs/Web/API/Document), [`DOMImplementation`](/en-US/docs/Web/API/DOMImplementation), [`Event`](/en-US/docs/Web/API/Event), [`EventTarget`](/en-US/docs/Web/API/EventTarget), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](https://w3c.github.io/uievents/).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](https://dom.spec.whatwg.org/#ranges).

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as [`document.body`](/en-US/docs/Web/API/Document/body).

The HTML specification also defines restrictions on documents; for example, it requires all children of a [`<ul>`](/en-US/docs/Web/HTML/Element/ul) element, which represents an unordered list, to be [`<li>`](/en-US/docs/Web/HTML/Element/li) elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

Looking for the [`Document`](/en-US/docs/Web/API/Document) object, [`Window`](/en-US/docs/Web/API/Window) object, and the other DOM elements? Read the [DOM documentation](/en-US/docs/Web/API/Document_Object_Model).

## Other notable APIs

- The [`setTimeout`](/en-US/docs/Web/API/setTimeout) and [`setInterval`](/en-US/docs/Web/API/setInterval) functions were first specified on the [`Window`](/en-US/docs/Web/API/Window) interface in HTML Standard.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) makes it possible to send asynchronous HTTP requests.
- The [Fetch API](https://fetch.spec.whatwg.org/) provides a more ergonomic abstraction for network requests.
- The [CSS Object Model](https://drafts.csswg.org/cssom/) abstract CSS rules as objects.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) allows parallel computation.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) allows low-level bidirectional communication.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) is a drawing API for [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas).
- The [WebAssembly interface](https://webassembly.github.io/spec/js-api) provides utilities for communication between JavaScript code and [WebAssembly](/en-US/docs/WebAssembly) modules.

Non-browser environments (like Node.js) often do not have DOM APIs — because they don't interact with a document — but they still usually implement many web APIs, such as [`fetch()`](/en-US/docs/Web/API/Window/fetch) and [`setTimeout()`](/en-US/docs/Web/API/setTimeout).

## JavaScript implementations

There are three main JavaScript implementations used in browser environments and beyond:

- Mozilla's [SpiderMonkey](https://spidermonkey.dev/), used in Firefox. This was the first _ever_ JavaScript engine, created by Brendan Eich at Netscape.
- Google's [V8](https://v8.dev/), used in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org), [Deno](https://deno.land/), [Electron](https://www.electronjs.org/), and more.
- Apple's [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (also known as SquirrelFish/Nitro), used in WebKit browsers such as Apple Safari, and [Bun](https://bun.sh/).

Besides the above implementations, there are other popular JavaScript engines such as:

- [Carakan](https://dev.opera.com/blog/carakan-faq/), used in earlier versions of Opera.
- Microsoft's [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) engine, used in Internet Explorer (although the language it implements is formally called "JScript" to avoid trademark issues). Earlier versions of Edge used a new JavaScript engine, confusingly also called [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>).
- [LibJS](https://serenityos.github.io/libjs-website/), used in the browser implementation of [SerenityOS](https://serenityos.org/).
- Mozilla's [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) engine, a JavaScript implementation written in Java, created primarily by Norris Boyd (also at Netscape).

There are some engines specifically tailored for non-browser purposes:

- [Engine262](https://engine262.js.org/), a JavaScript engine written in JavaScript. It is created for JavaScript developers to explore new language features and find bugs in the specification.
- [Moddable XS](https://www.moddable.com/), used in embedded systems such as IoT.
- [QuickJS](https://bellard.org/quickjs/), a small and embeddable JavaScript engine.
- Meta's [Hermes](https://hermesengine.dev/) engine, an engine optimized for [React Native](https://reactnative.dev/docs/hermes).
- Oracle's [GraalJS](https://www.graalvm.org/), a high performance implementation built on the GraalVM by Oracle Labs.

JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the [DOM](https://dom.spec.whatwg.org/) into JavaScript.

Another common application for JavaScript is as a (Web) server-side scripting language. A JavaScript web server exposes host objects representing a HTTP request and response objects, which can then be manipulated by a JavaScript program to dynamically generate web pages. [Node.js](https://nodejs.org) is a popular example of this.

## Shells

A JavaScript shell allows you to quickly test snippets of JavaScript code without having to reload a web page. They are extremely useful for developing and debugging code.

### Standalone JavaScript shells

The following JavaScript shells are stand-alone environments, like Perl or Python.

- [Node.js](https://nodejs.org/) - Node.js is a platform for easily building fast, scalable network applications.
- [ShellJS](https://github.com/shelljs/shelljs) - Portable Unix shell commands for Node.js.

### Browser-based JavaScript shells

The following JavaScript shells run code through the browser's JavaScript engine.

- Firefox has a [built-in JavaScript console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), which support multi-line editing.
- [Babel REPL](https://babeljs.io/repl) - A browser-based [REPL](https://en.wikipedia.org/wiki/REPL) for experimenting with future JavaScript.
- [TypeScript playground](https://www.typescriptlang.org/play) — A browser-based playground for experimenting both new JavaScript features (via the tsc compiler) and TypeScript syntax.

## Tools & resources

Helpful tools for writing and debugging your JavaScript code.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), and more.
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
