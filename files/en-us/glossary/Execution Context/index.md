---
title: Execution_context
slug: Glossary/Execution_context
tags:
  - Glossary
  - JavaScript
---

An **execution context** is the environment in which Javascript code executes. It consists of the {{glossary("scope")}}, the information that links a variable name with the actual variable storing data, and of the binding of the {{jsxref("this")}} reference, the object `this` refers to.

When running, the JavaScript engine initially creates the _global execution context_, then a new context is created for each function or `eval` call.

Variables created using `let` and constants are available in the _current_ execution context only, while variables created using `var` are _hoisted_ to the _global_ execution context and available everywhere, when not hidden by another declaration.

#### Example:
```js
const n = 2;  // n is available to the global execution context

function square(num) { // the square function creates its own execution context, when num is declared
  const ans = num * num; // ans is only available to the function execution context
  return ans;
}

const square2 = square(n); // square2 is available to the global execution context
const square4 = ans; // ans is undefined as it was defined in another execution context

```


## See also

- {{glossary("Hoisting")}} 
- {{glossary("Scope")}}
