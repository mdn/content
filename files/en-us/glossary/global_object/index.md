---
title: Global object
slug: Glossary/Global_object
tags:
  - CodingScripting
  - Glossary
  - NeedsContent
---
A global object is an {{glossary("object")}} that always exists in the {{glossary("global scope")}}.

In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables defined with the [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword, they're created as members of the global object. (In {{Glossary("Node.js")}} this is not the case.) The global object's {{Glossary("interface")}} depends on the execution context in which the script is running. For example:

- In a web browser, any code which the script doesn't specifically start up as a background task has a {{domxref("Window")}} as its global object. This is the vast majority of JavaScript code on the Web.
- Code running in a {{domxref("Worker")}} has a {{domxref("WorkerGlobalScope")}} object as its global object.
- Scripts running under {{Glossary("Node.js")}} have an object called [`global`](https://nodejs.org/api/globals.html#globals_global) as their global object.

The [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global property allows one to access the global object regardless of the current environment.

[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) statements and [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function) at the top level create properties of the global object. On the other hand, {{jsxref("Statements/let", "let")}} and {{jsxref("Statements/const", "const")}} declarations never create properties of the global object.

The properties of the global object are automatically added to the {{glossary("global scope")}}.

## See also

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{glossary("global scope")}}
  - {{glossary("object")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
