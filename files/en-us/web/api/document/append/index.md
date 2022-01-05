---
title: Document.append()
slug: Web/API/Document/append
tags:
  - API
  - DOM
  - Method
  - Node
  - Document
  - Reference
browser-compat: api.Document.append
---
{{APIRef("DOM")}}

The **`Document.append()`** method
inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after
the last child of the document. {{domxref("DOMString")}} objects
are inserted as equivalent {{domxref("Text")}} nodes.

This method appends a child to a `Document`. To append to an arbitrary element in the tree, see {{domxref("Element.append()")}}.

## Syntax

```js
append(...nodesOrDOMStrings)
```

### Parameters

- `nodesOrDOMStrings`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Appending a root element to a document

If you try to append an element to an existing HTML document,
it might throw a `HierarchyRequestError`{{domxref("DOMException")}} given a {{HTMLElement("html")}} element already exists.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

If you are creating a new document without any existing element, you can append a root HTML element (or a root SVG element):

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.prepend()")}}
- {{domxref("Element.append()")}}
