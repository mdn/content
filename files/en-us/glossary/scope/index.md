---
title: Scope
slug: Glossary/Scope
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
The **scope** is the current context of execution in which {{glossary("value","values")}} and expressions are "visible" or can be referenced. If a {{glossary("variable")}} or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:

- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a {{glossary("function")}}.

In addition, variables declared with [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) can belong to an additional scope:

- Block scope: The scope created with a pair of curly braces (a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block)).

A {{glossary("function")}} creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

```js example-bad
function exampleFunction() {
  const x = "declared inside function";  // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x);  // Causes error
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```js example-good
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

Blocks only scope `let` and `const` declarations, but not `var` declarations.

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## See also

- [Scope (computer science)](https://en.wikipedia.org/wiki/Scope_(computer_science)) on Wikipedia
