---
title: "Document: prepend() method"
short-title: prepend()
slug: Web/API/Document/prepend
page-type: web-api-instance-method
browser-compat: api.Document.prepend
---

{{APIRef("DOM")}}

The **`Document.prepend()`** method
inserts a set of {{domxref("Node")}} objects or strings before
the first child of the document. Strings
are inserted as equivalent {{domxref("Text")}} nodes.

This method prepends a child to a `Document`. To prepend to an arbitrary element in the tree, see {{domxref("Element.prepend()")}}.

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
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

### Prepending a root element to a document

If you try to prepend an element to an existing HTML document,
it might throw a `HierarchyRequestError' {{domxref("DOMException")}} given a {{HTMLElement("html")}} element already exists.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

If you are creating a new document without any existing element, you can prepend a root HTML element (or a root SVG element):

```js
let doc = new Document();
let html = document.createElement("html");
doc.prepend(html);

doc.children; // HTMLCollection [<html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.append()")}}
- {{domxref("Element.prepend()")}}
