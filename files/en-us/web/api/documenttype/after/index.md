---
title: DocumentType.after()
slug: Web/API/DocumentType/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.DocumentType.after
---
{{APIRef("DOM")}}

The **`DocumentType.after()`** method inserts a set of
{{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
`DocumentType`'s parent, just after the `DocumentType`.
{{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
after(... nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement('html'));

myDoc.childNodes;
// NodeList [<!DOCTYPE html>, <html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentType.before()")}}
