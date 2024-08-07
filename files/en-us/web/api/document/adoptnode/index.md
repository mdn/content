---
title: "Document: adoptNode() method"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
page-type: web-api-instance-method
browser-compat: api.Document.adoptNode
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** transfers a {{Glossary("node/dom", "node")}} from another {{domxref("Document", "document", "", "1")}} into the method's document.
The adopted node and its subtree are removed from their original document (if any), and their {{domxref("Node.ownerDocument", "ownerDocument")}} is changed to the current document.
The node can then be inserted into the current document.

## Syntax

```js-nolint
adoptNode(externalNode)
```

### Parameters

- `externalNode`
  - : The node from another document to be adopted.

### Return value

The copied `importedNode` in the scope of the importing document.

After calling this method, `importedNode` and
`externalNode` are the same object.

> **Note:** `importedNode`'s
> {{domxref("Node.parentNode")}} is `null`, since it has not yet been
> inserted into the document tree!

## Examples

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## Notes

Before they can be inserted into the current document, nodes from external documents
should either be:

- cloned using {{domXref("document.importNode()")}}; or
- adopted using `document.adoptNode()`.

For more on the {{domXref("Node.ownerDocument")}} issues, see the [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.importNode()")}}
