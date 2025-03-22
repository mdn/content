---
title: HTMLCollection
slug: Web/API/HTMLCollection
page-type: web-api-interface
browser-compat: api.HTMLCollection
---

{{APIRef("DOM")}}

The **`HTMLCollection`** interface represents a generic collection (array-like object similar to {{jsxref("Functions/arguments", "arguments")}}) of elements (in document order) and offers methods and properties for selecting from the list.

An `HTMLCollection` in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (e.g., using {{jsxref("Array/from", "Array.from")}}) to iterate over if adding, moving, or removing nodes.

This interface is called `HTMLCollection` for historical reasons, because before the modern DOM, collections implementing this interface could only have HTML elements as their items.

This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs represent list structures using types based on JavaScript [arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), thus making many array methods available, and at the same time imposing additional semantics on their usage (such as making their items read-only).

These historical reasons do not mean that you as a developer should avoid `HTMLCollection`. You don't create `HTMLCollection` objects yourself, but you get them from APIs such as {{domxref("Document.getElementsByClassName()")}}, and these APIs are not deprecated. However, be careful of the semantic differences from a real array.

## Instance properties

- {{domxref("HTMLCollection.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the collection.

## Instance methods

- {{domxref("HTMLCollection.item()")}}

  - : Returns the specific element at the given zero-based `index` into the list. Returns `null` if the `index` is out of range.

    An alternative to accessing `collection[i]` (which instead returns `undefined` when `i` is out-of-bounds). This is mostly useful for non-JavaScript DOM implementations.

- {{domxref("HTMLCollection.namedItem()")}}

  - : Returns the specific node whose ID or, as a fallback, name matches the string specified by `name`. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the `name` attribute. Returns `null` if no node exists by the given name.

    An alternative to accessing `collection[name]` (which instead returns `undefined` when `name` does not exist). This is mostly useful for non-JavaScript DOM implementations.

## Usage in JavaScript

`HTMLCollection` also exposes its members as properties by name and index. HTML IDs may contain `:` and `.` as valid characters, which would necessitate using bracket notation for property access. Currently, an `HTMLCollection` object does not recognize purely numeric IDs, which would cause conflict with the array-style access, though HTML does permit these.

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
