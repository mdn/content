---
title: "Document: append() method"
short-title: append()
slug: Web/API/Document/append
page-type: web-api-instance-method
browser-compat: api.Document.append
---

{{APIRef("DOM")}}

The **`Document.append()`** method
inserts a set of {{domxref("Node")}} objects or strings after
the last child of the document. Strings
are inserted as equivalent {{domxref("Text")}} nodes.

This method appends a child to a `Document`. To append to an arbitrary element in the tree, see {{domxref("Element.append()")}}.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} objects or strings to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Appending a root element to a document

If you try to append an element to an existing HTML document,
it might throw a `HierarchyRequestError` {{domxref("DOMException")}} given a {{HTMLElement("html")}} element already exists.

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
