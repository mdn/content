---
title: IIFE
slug: Glossary/IIFE
page-type: glossary-definition
---

{{GlossarySidebar}}

An **IIFE** (Immediately Invoked Function Expression) is an idiom in which a {{glossary("JavaScript")}} {{glossary("function")}} runs as soon as it is defined. It is also known as a _self-executing anonymous function_. The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();
```

It contains two major parts:

1. A [function _expression_](/en-US/docs/Web/JavaScript/Reference/Operators/function). This usually needs to be [enclosed in parentheses](/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) in order to be parsed correctly.
2. Immediately _calling_ the function expression. Arguments may be provided, though IIFEs without arguments are more common.

IIFEs are a common pattern used to execute arbitrarily many statements in their own scope (and possibly return a value), in a location that requires a single expression. They are similar to, but much more powerful than, the [comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator), which can only execute multiple expressions and, therefore, does not provide a way to use local variables or control flow statements.

Use cases of IIFEs include:

- Avoiding polluting the global namespace by creating a new {{glossary("scope")}}.
- Creating a new async context to use {{jsxref("Operators/await", "await")}} in a non-async context.
- Computing values with complex logic, such as using multiple statements as a single expression.

For code examples, see the [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) and [`async function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function) reference pages.

## See also

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Related glossary terms:
  - {{Glossary("Function")}}
