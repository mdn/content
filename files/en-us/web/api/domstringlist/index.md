---
title: DOMStringList
slug: Web/API/DOMStringList
page-type: web-api-interface
browser-compat: api.DOMStringList
---

{{APIRef("DOM")}}

The **`DOMString`** interface is a legacy type returned by some APIs and represents a non-modifiable list of strings (`DOMString`). Modern APIs use {{jsxref("Array")}} objects (in WebIDL: `sequence<DOMString>`) instead.

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
