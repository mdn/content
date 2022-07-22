---
title: JavaScript technologies overview
slug: Web/JavaScript/JavaScript_technologies_overview
tags:
  - Beginner
  - DOM
  - Guide
  - JavaScript
---
{{JsSidebar("Introductory")}}

## Introduction

Whereas [HTML](/en-US/docs/Web/HTML) defines a webpage's structure and content and [CSS](/en-US/docs/Web/CSS) sets the formatting and appearance, [JavaScript](/en-US/docs/Web/JavaScript) adds interactivity to a webpage and creates rich web applications.

However, the umbrella term "JavaScript" as understood in a web browser context contains several very different elements. One of them is the core language (ECMAScript), another is the collection of the [Web APIs](/en-US/docs/Web/API), including the DOM (Document Object Model).

## JavaScript, the core language (ECMAScript)

The core language of JavaScript is standardized by the ECMA TC39 committee as a language named [ECMAScript](/en-US/docs/Web/JavaScript/Language_Resources). ECMAScript and JavaScript are often used interchangeably today, but "ECMAScript" is the term for the language standard.

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

After the 6th major edition of ECMAScript (commonly known as ES6) was officially approved and published as a standard on June 17, 2015 by the ECMA General Assembly, ECMAScript editions are published on a yearly basis. All development is public on the [Ecma TC39 GitHub organization](https://github.com/tc39), which hosts proposals, the official specification text, and meeting notes.

New language features, including introduction of new syntaxes and APIs and revision of existing behaviors, are discussed in the form of proposals. Each proposal goes through a [4-stage process](https://tc39.es/process-document/), and is typically implemented by JavaScript engines at stage 3 or stage 4 and thus available for public consumption.

### Internationalization API

The [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) is an addition to the ECMAScript Language Specification, also standardized by Ecma TC39. The internationalization API provides collation (string comparison), number formatting, and date-and-time formatting for JavaScript applications, letting the applications choose the language and tailor the functionality to their needs. The initial standard was approved in December 2012; the status of implementations in browsers is tracked in the documentation of the {{jsxref("Intl")}} object. The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.

## DOM APIs

### WebIDL

The [WebIDL specification](https://webidl.spec.whatwg.org/) provides the glue between the DOM technologies and ECMAScript.

### The Core of the DOM

The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the **DOM tree** may be addressed and manipulated by using methods on the objects. The [W3C](/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model, which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:

- The document structure, a tree model, and the DOM Event architecture in [DOM core](https://dom.spec.whatwg.org/): [`Node`](/en-US/docs/Web/API/Node), [`Element`](/en-US/docs/Web/API/Element), [`DocumentFragment`](/en-US/docs/Web/API/DocumentFragment), [`Document`](/en-US/docs/Web/API/Document), [`DOMImplementation`](/en-US/docs/Web/API/DOMImplementation), [`Event`](/en-US/docs/Web/API/Event), [`EventTarget`](/en-US/docs/Web/API/EventTarget), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](https://w3c.github.io/uievents/).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](https://html5.org/specs/dom-range.html).

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

Non-browser environments (like Node.js) often do not have DOM APIs because they don't interact with a document, but they still usually implement many web APIs, such as [`fetch()`](/en-US/docs/Web/API/fetch) and [`setTimeout()`](/en-US/docs/Web/API/setTimeout).
