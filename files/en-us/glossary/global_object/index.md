---
title: Global object
slug: Glossary/Global_object
page-type: glossary-definition
---

{{GlossarySidebar}}

The **global object** in JavaScript is an {{glossary("object")}} which represents the {{glossary("global scope")}}.

> **Note:** _Globally available objects_, which are objects in the {{glossary("global scope")}}, are sometimes also referred to as global objects, but strictly speaking, there is only one global object per environment.

In each JavaScript environment, there's always a global object defined. The global object's interface depends on the execution context in which the script is running. For example:

- In a web browser, any code which the script doesn't specifically start up as a background task has a {{domxref("Window")}} as its global object. This is the vast majority of JavaScript code on the Web.
- Code running in a {{domxref("Worker")}} has a {{domxref("WorkerGlobalScope")}} object as its global object.
- Scripts running under {{Glossary("Node.js")}} have an object called [`global`](https://nodejs.org/api/globals.html#globals_global) as their global object.

The [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global property allows one to access the global object regardless of the current environment.

[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) statements and [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function) at the top level of a script create properties of the global object. On the other hand, {{jsxref("Statements/let", "let")}} and {{jsxref("Statements/const", "const")}} declarations never create properties of the global object.

The properties of the global object are automatically added to the {{glossary("global scope")}}.

In JavaScript, the global object always holds a reference to itself:

```js
console.log(globalThis === globalThis.globalThis); // true (everywhere)
console.log(window === window.window); // true (in a browser)
console.log(self === self.self); // true (in a browser or a Web Worker)
console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)
```

## See also

- Related glossary terms:
  - {{glossary("global scope")}}
  - {{glossary("object")}}
- {{jsxref("globalThis")}}
- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("Window.window")}}
- {{domxref("Window.self")}}
- {{domxref("Window.frames")}}
- {{domxref("WorkerGlobalScope.self")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
