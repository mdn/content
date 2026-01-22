---
title: JavaScript
slug: Web/JavaScript
page-type: landing-page
sidebar: jssidebar
---
---
title: "JavaScript"
slug: "/en-US/docs/Web/JavaScript"
tags:
  - JS
---

# JavaScript

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a dynamic, prototype-based language with garbage collection and supports multiple programming paradigms, including imperative, functional, and object-oriented.

## Dynamic features

JavaScript supports dynamic features like creating objects at runtime, variable-length parameter lists, function variables, dynamic code evaluation (`eval`), object introspection (e.g., `for...in` loops), and retrieving the source code of functions (`Object.toString()`).

This section focuses on the JavaScript language itself, not web-specific APIs or runtime environments. For Web APIs, see the sections on [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) and [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

JavaScript standards are defined by the ECMAScript language specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). We document features as browsers implement them, which means sometimes documentation may reference features before official standard publication.

**Note:** JavaScript is not Java. Both "Java" and "JavaScript" are trademarks of Oracle in the United States and other countries.

## Learning Resources

- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Your first web site: adding interactivity](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Frameworks and libraries](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

## Standard objects

JavaScript has built-in standard objects like `Array`, `Boolean`, `Error`, `Function`, `JSON`, `Math`, `Number`, `Object`, `RegExp`, `String`, `Map`, `Set`, `WeakMap`, `WeakSet`, etc.

## Expressions and operators

Learn about JavaScript operators and their behaviors:

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}

Object.toString();


