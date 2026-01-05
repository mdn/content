---
title: Closure
slug: Glossary/Closure
page-type: glossary-definition
sidebar: glossarysidebar
---

In computer programming, a **closure** is a technique for implementing lexically {{glossary("scope", "scoped")}} name binding in a language with {{glossary("first-class function", "first-class functions")}}.

In {{glossary("JavaScript")}}, a {{glossary("function")}} creates a closure context.
As shown by the following code, the inner function maintains access to the `count` variable even after `createCounter()` has finished executing.

```js
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## See also

- [Closures in JavaScript](/en-US/docs/Web/JavaScript/Guide/Closures)
- [Closure](https://en.wikipedia.org/wiki/Closure_%28computer_programming%29) on Wikipedia
