---
title: HTMLCollection
slug: Web/API/HTMLCollection
page-type: web-api-interface
tags:
  - API
  - DOM
  - Element Lists
  - HTMLCollection
  - Interface
  - Reference
browser-compat: api.HTMLCollection
---
{{APIRef("DOM")}}

The **`HTMLCollection`** interface represents a generic collection (array-like object similar to {{jsxref("Functions/arguments", "arguments")}}) of elements (in document order) and offers methods and properties for selecting from the list.

> **Note:** This interface is called `HTMLCollection` for historical reasons (before the modern DOM, collections implementing this interface could only have HTML elements as their items).

An `HTMLCollection` in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (e.g., using {{jsxref("Array/from", "Array.from")}}) to iterate over if adding, moving, or removing nodes.

## Properties

- {{domxref("HTMLCollection.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the collection.

## Methods

- {{domxref("HTMLCollection.item()")}}

  - : Returns the specific node at the given zero-based `index` into the list. Returns `null` if the `index` is out of range.

    An alternative to accessing `collection[i]` (which instead returns  `undefined` when `i` is out-of-bounds). This is mostly useful for non-JavaScript DOM implementations.

- {{domxref("HTMLCollection.namedItem()")}}

  - : Returns the specific node whose ID or, as a fallback, name matches the string specified by `name`. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the `name` attribute. Returns `null` if no node exists by the given name.

    An alternative to accessing `collection[name]` (which instead returns `undefined` when `name` does not exist). This is mostly useful for non-JavaScript DOM implementations.

## Usage in JavaScript

`HTMLCollection` also exposes its members directly as properties by both name and index. HTML IDs may contain `:` and `.` as valid characters, which would necessitate using bracket notation for property access. Currently `HTMLCollections` does not recognize purely numeric IDs, which would cause conflict with the array-style access, though HTML5 does permit these.

For example, assuming there is one `<form>` element in the document and its `id` is `myForm`:

```js
let elem1, elem2;

// document.forms is an HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms["named.item.with.periods"];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
