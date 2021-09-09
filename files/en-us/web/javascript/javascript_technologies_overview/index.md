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

However, the umbrella term "JavaScript" as understood in a web browser context contains several very different elements. One of them is the core language (ECMAScript), another is the collection of the [Web APIs](/en-US/docs/Web/Reference/API), including the DOM (Document Object Model).

## JavaScript, the core language (ECMAScript)

The core language of JavaScript is standardized by the ECMA TC39 committee as a language named [ECMAScript](/en-US/docs/Web/JavaScript/Language_Resources).

This core language is also used in non-browser environments, for example in [node.js](http://nodejs.org/).

### What falls under the ECMAScript scope?

Among other things, ECMAScript defines:

- Language syntax (parsing rules, keywords, control flow, object literal initialization, ...)
- Error handling mechanisms ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, ability to create user-defined {{jsxref("Error")}} types)
- Types (boolean, number, string, function, object, ...)
- The global object. In a browser, this global object is the [`window`](/en-US/docs/Web/API/Window "The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.") object, but ECMAScript only defines the APIs not specific to browsers, e.g. {{jsxref("parseInt")}}, {{jsxref("parseFloat")}}, {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}...
- A prototype-based inheritance mechanism
- Built-in objects and functions ({{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Array.prototype", "Array.prototype", "Methods")}} methods, {{jsxref("Object")}} introspection methods, etc.)
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### Browser support

As of October 2016, the current versions of the major Web browsers implement [ECMAScript 5.1](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) and [ECMAScript 2015](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla), but older versions (still in use) implement ECMAScript 5 only.

### Future

The major 6th Edition of ECMAScript was officially approved and published as a standard on June 17, 2015 by the ECMA General Assembly. Since then ECMAScript Editions are published on a yearly basis.

### Internationalization API

The [ECMAScript Internationalization API Specification](http://ecma-international.org/ecma-402/1.0/) is an addition to the ECMAScript Language Specification, also standardized by Ecma TC39. The internationalization API provides collation (string comparison), number formatting, and date-and-time formatting for JavaScript applications, letting the applications choose the language and tailor the functionality to their needs. The initial standard was approved in December 2012; the status of implementations in browsers is tracked in the documentation of the {{jsxref("Intl")}} object. The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.

## DOM APIs

### WebIDL

The [WebIDL specification](https://www.w3.org/TR/WebIDL/) provides the glue between the DOM technologies and ECMAScript.

### The Core of the DOM

The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the **DOM tree** may be addressed and manipulated by using methods on the objects. The [W3C](/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model, which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:

- The document structure, a tree model, and the DOM Event architecture in [DOM core](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html): [`Node`](/en-US/docs/Web/API/Node "Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."), [`Element`](/en-US/docs/Web/API/Element "Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."), [`DocumentFragment`](/en-US/docs/Web/API/DocumentFragment "The DocumentFragment interface represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document."), [`Document`](/en-US/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."), [`DOMImplementation`](/en-US/docs/Web/API/DOMImplementation "The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property."), [`Event`](/en-US/docs/Web/API/Event "The Event interface represents an event which takes place in the DOM."), [`EventTarget`](/en-US/docs/Web/API/EventTarget "EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them."), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](http://html5.org/specs/dom-range.html).

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".

### HTML DOM

[HTML](https://www.whatwg.org/html), the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as [`document.body`](/en-US/docs/Web/API/Document/body "The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.").

The HTML specification also defines restrictions on documents; for example, it requires all children of a [`<ul>`](/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element, which represents an unordered list, to be [`<li>`](/en-US/docs/Web/HTML/Element/li "The HTML <li> element is used to represent an item in a list.") elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

Looking for the [`Document`](/en-US/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.") object, [`Window`](/en-US/docs/Web/API/Window "The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.") object, and the other DOM elements? Read the [DOM documentation](/en-US/docs/Web/API/Document_Object_Model).

## Other notable APIs

- The [`setTimeout`](/en-US/docs/Web/API/setTimeout) and [`setInterval`](/en-US/docs/Web/API/setInterval) functions were first specified on the [`Window`](/en-US/docs/Web/API/Window) interface in HTML Standard.
- [XMLHttpRequest](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) makes it possible to send asynchronous HTTP requests.
- The [CSS Object Model](http://dev.w3.org/csswg/cssom/) abstract CSS rules as objects.
- [WebWorkers ](https://www.whatwg.org/specs/web-workers/current-work/)allows parallel computation.
- [WebSockets](https://www.whatwg.org/C/#network) allows low-level bidirectional communication.
- [Canvas 2D Context](https://www.whatwg.org/html/#2dcontext) is a drawing API for [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas).
