---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
page-type: web-api-interface
browser-compat: api.HTMLAllCollection
---

{{APIRef("DOM")}}{{Deprecated_Header}}

The **`HTMLAllCollection`** interface represents a collection of _all_ of the document's elements, accessible by order (like an array) and by ID (like a regular object). It is returned by the {{domxref("document.all")}} property.

## Instance properties

- {{domxref("HTMLAllCollection.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the collection.

## Instance methods

- {{domxref("HTMLAllCollection.item()")}}
  - : Returns the specific node at the given zero-based `index` into the list. Returns `null` if the `index` is out of range.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Returns the specific node whose ID or, as a fallback, name matches the string specified by `name`. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the `name` attribute. Returns `null` if no node exists by the given name.

## Usage in JavaScript

### Indexed access

In addition to the methods above, an `HTMLAllCollection` can be accessed by integer indices and string property names. HTML IDs may contain `:` and `.` as valid characters, which would necessitate using bracket notation for property access. `collection[i]` is equivalent to `collection.item(i)`, where `i` can be an integer, a string containing an integer, or a string representing an ID.

### Calling as a function

An `HTMLAllCollection` object is callable. When it's called with no arguments or with `undefined`, it returns `null`. Otherwise, it returns the same value as the {{domxref("HTMLAllCollection/item", "item()")}} method when given the same arguments.

### Special type conversion behavior

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

## See also

- {{domxref("HTMLCollection")}}
