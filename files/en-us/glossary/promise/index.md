---
title: Promise
slug: Glossary/Promise
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

A **{{jsxref("Promise")}}** is an {{Glossary("object")}} that's returned by a {{Glossary("function")}} that has not yet completed its work. The promise literally represents a promise made by the function that it will eventually return a result through the promise object.

When the called function finishes its work {{Glossary("asynchronous", "asynchronously")}}, a function on the promise object called a resolution (or fulfillment, or completion) handler is called to let the original caller know that the task is complete.

## See also

- [Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises)
- {{jsxref("Promise")}} in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference).
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
