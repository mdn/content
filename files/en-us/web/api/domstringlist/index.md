---
title: DOMStringList
slug: Web/API/DOMStringList
page-type: web-api-interface
browser-compat: api.DOMStringList
---

{{APIRef("DOM")}}

The **`DOMStringList`** interface is a legacy type returned by some APIs and represents a non-modifiable list of strings (`DOMString`).

This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs represent list structures using types based on JavaScript [arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), thus making many array methods available, and at the same time imposing additional semantics on their usage (such as making their items read-only).

These historical reasons do not mean that you as a developer should avoid `DOMStringList`. You don't create `DOMStringList` objects yourself, but you get them from APIs such as `Location.ancestorOrigins`, and these APIs are not deprecated. However, be careful of the semantic differences from a real array.

This interface is used in [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) and in the {{domxref("Location")}} API:

- {{domxref("IDBDatabase.objectStoreNames")}}
- {{domxref("IDBObjectStore.indexNames")}}
- {{domxref("Location.ancestorOrigins")}}

## Instance properties

- {{domxref("DOMStringList.length")}} {{ReadOnlyInline}}
  - : Returns the size of the list.

## Instance methods

- {{domxref("DOMStringList.item()")}}
  - : Returns a string from the list with the given index.
- {{domxref("DOMStringList.contains()")}}
  - : Returns a boolean indicating whether the given string is in the list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
