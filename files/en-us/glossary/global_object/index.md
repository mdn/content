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

## `window` object in the Browser

The `window` object is the Global Object in the Browser. Any Global Variables or Functions can be accessed as _properties_ of the `window` object.

### Access Global Variables

```js
var foo = "foobar";
foo === window.foo; // Returns: true
```

After defining a Global Variable `foo`, we can access its value directly from the `window` object, by using the variable name `foo` as a property name of the Global Object `window.foo`.

#### Explanation:

The global variable `foo` was stored in the `window` object, like this:

```js
foo: "foobar"
```

### Access Global Functions

```js
function greeting() {
   console.log("Hi!");
}

window.greeting(); // It is the same as the normal invoking: greeting();
```

The example above explains how Global Functions are stored as _properties_ in the `window` object. We created a Global Function called `greeting`, then invoked it using the `window` object.

#### Explanation:

The global function `greeting` was stored in the `window` object, like this:

```js
greeting: function greeting() {
   console.log("Hi!");
}
```

## See also

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{glossary("global scope")}}
  - {{glossary("object")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
