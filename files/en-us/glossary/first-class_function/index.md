---
title: First-class Function
slug: Glossary/First-class_Function
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Example | Assign a function to a variable

### JavaScript

```js
const foo = function() {
   console.log("foobar");
}
foo(); // Invoke it using the variable
// foobar
```

We assigned an **Anonymous Function** in a {{glossary("Variable")}}, then we used that variable to invoke the function by adding parentheses `()` at the end.

> **Note:** **Even if your function was named,** you can use the variable name to invoke it. Naming it will be helpful when debugging your code. _But it won't affect the way we invoke it._

## Example | Pass a function as an Argument

### JavaScript

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

We are passing our `sayHello()` function as an argument to the `greeting()` function, this explains how we are treating the function as a **value**.

> **Note:** The function that we pass as an argument to another function, is called a **{{glossary("Callback function")}}**. _`sayHello` is a Callback function._

## Example | Return a function

### JavaScript

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

In this example; We need to return a function from another function - _We can return a function because we treated function in JavaScript as a **value**._

> **Note:** A function that returns a function is called a **Higher-Order Function**.

Back to our example; Now, we need to invoke `sayHello` function and its returned `Anonymous Function`. To do so, we have two ways:

### 1- Using a variable

```js
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
// Hello!
```

This way, it returns the `Hello!` message.

> **Note:** You have to use another variable. If you invoked `sayHello` directly, it would return the function itself **without invoking its returned function**.

### 2- Using double parentheses

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
// Hello!
```

We are using double parentheses `()()` to invoke the returned function as well.

## See also

- {{Interwiki("wikipedia", "First-class_function", "First-class functions")}} on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{glossary("Callback function")}}
  - {{glossary("Function")}}
  - {{glossary("Variable")}}
