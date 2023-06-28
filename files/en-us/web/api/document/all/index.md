---
title: "Document: all property"
short-title: all
slug: Web/API/Document/all
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.all
---

{{APIRef("DOM")}}{{Deprecated_Header}}

The {{DOMxRef("Document")}} interface's read-only **`all`**
property returns an {{DOMxRef("HTMLAllCollection")}} rooted at the document node. In
other words, it returns all of the document's elements, accessible by order (like an
array) and by ID (like a regular object).

## Value

An {{DOMxRef("HTMLAllCollection")}} which contains every element in the document.

## Special type conversion behavior

For historical reasons, `document.all` is an object that in many ways behaves like `undefined`. Specifically:

- It is [loosely equal](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) to `undefined` and `null`.
- It is [falsy](/en-US/docs/Glossary/Falsy) in boolean contexts.
- Its [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) is `"undefined"`.

These special behaviors ensure that code like:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

Will continue to provide modern behavior even if the code is run in a browser that implements `document.all` for compatibility reasons.

However, in all other contexts, `document.all` remains an object. For example:

- It is not [strictly equal](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) to either `undefined` or `null`.
- When used on the left-hand side of the [nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) or the [optional chaining operator](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`), it will not cause the expression to short-circuit.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
