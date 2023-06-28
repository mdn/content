---
title: First-class Function
slug: Glossary/First-class_Function
page-type: glossary-definition
---

{{GlossarySidebar}}

A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Examples

### Assigning a function to a variable

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

We assigned an _Anonymous Function_ in a {{glossary("Variable")}}, then we used that variable to invoke the function by adding parentheses `()` at the end.

> **Note:** Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. _But it won't affect the way we invoke it._

### Passing a function as an argument

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

We are passing our `sayHello()` function as an argument to the `greeting()` function, this explains how we are treating the function as a value.

> **Note:** The function that we pass as an argument to another function is called a _{{glossary("callback function")}}_. _`sayHello()` is a callback function._

### Returning a function

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In this example, we are returning a function from another function - _We can return a function because functions in JavaScript are treated as values._

> **Note:** A function that returns a function or takes other functions as arguments is called a _higher-order function_.

## See also

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{glossary("Callback function")}}
  - {{glossary("Function")}}
  - {{glossary("Variable")}}
