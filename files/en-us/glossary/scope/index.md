---
title: Scope
slug: Glossary/Scope
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
The current context of execution. The context in which {{glossary("value","values")}} and **expressions** are "visible" or can be referenced. If a **{{glossary("variable")}}** or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A **{{glossary("function")}}** serves as a **closure** in {{glossary("JavaScript")}}, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

```js
function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```js
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

## See also

- {{Interwiki("wikipedia", "Scope (computer science)")}} on Wikipedia
