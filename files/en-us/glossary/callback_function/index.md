---
title: Callback function
slug: Glossary/Callback_function
tags:
  - Callback
  - Callback function
  - CodingScripting
  - Glossary
---
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```js
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

The above example is a {{glossary("synchronous")}} callback, as it is executed immediately.

Note, however, that callbacks are often used to continue code execution after an {{glossary("asynchronous")}} operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a [`.then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as [`fetch()`](/en-US/docs/Web/API/fetch).

## See also

- [Callback](https://en.wikipedia.org/wiki/Callback_(computer_programming)) on Wikipedia
