---
title: Callback function
slug: Glossary/Callback_function
page-type: glossary-definition
---

{{GlossarySidebar}}

A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

The consumer of a callback-based API writes a function that is passed into the API. The provider of the API (called the _caller_) takes the function and calls back (or executes) the function at some point inside the caller's body. The caller is responsible for passing the right parameters into the callback function. The caller may also expect a particular return value from the callback function, which is used to instruct further behavior of the caller.

There are two ways in which the callback may be called: _synchronous_ and _asynchronous_. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an {{glossary("asynchronous")}} operation has completed.

Understanding whether the callback is synchronously or asynchronously called is particularly important when analyzing side effects. Consider the following example:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

If `doSomething` calls the callback synchronously, then the last statement would log `2` because `value = 2` is synchronously executed; otherwise, if the callback is asynchronous, the last statement would log `1` because `value = 2` is only executed after the `console.log` statement.

Examples of synchronous callbacks include the callbacks passed to {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}}, etc. Examples of asynchronous callbacks include the callbacks passed to [`setTimeout()`](/en-US/docs/Web/API/setTimeout) and {{jsxref("Promise.prototype.then()")}}.

The [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises#timing) guide has more information on the timing of asynchronous callbacks.

## See also

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) on Wikipedia
