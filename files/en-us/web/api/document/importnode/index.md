---
title: "Document: importNode() method"
short-title: importNode()
slug: Web/API/Document/importNode
page-type: web-api-instance-method
browser-compat: api.Document.importNode
---

{{APIRef("DOM")}}

The {{domxref("Document")}} object's **`importNode()`** method creates a copy of a
{{domxref("Node")}} or {{domxref("DocumentFragment")}} from another document, to be
inserted into the current document later.

The imported node is not yet included in the document tree. To include it, you need to
call an insertion method such as {{domxref("Node.appendChild", "appendChild()")}} or
{{domxref("Node.insertBefore", "insertBefore()")}} with a node that _is_
currently in the document tree.

Unlike {{domxref("document.adoptNode()")}}, the original node is not removed from its
original document. The imported node is a clone of the original.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameters

- `externalNode`
  - : The external {{domxref("Node")}} or {{domxref("DocumentFragment")}} to import into
    the current document.
- `deep` {{optional_inline}}

  - : A boolean flag, whose default value is `false`,
    which controls whether to include the entire DOM subtree
    of the `externalNode` in the import.

    - If `deep` is set to `true`, then
      `externalNode` and all of its descendants are copied.
    - If `deep` is set to `false`, then only
      `externalNode` is imported — the new node has no children.

### Return value

The copied `importedNode` in the scope of the importing document.

> **Note:** `importedNode`'s {{domxref("Node.parentNode")}} is `null`, since it has not yet been inserted into the document tree!

## Examples

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notes

Before they can be inserted into the current document, nodes from external documents should either be:

- cloned using {{domXref("document.importNode()")}}; or
- adopted using {{domXref("document.adoptNode()")}}.

> **Note:** Although Firefox doesn't currently enforce this rule, we encourage you to follow this rule for improved future compatibility.

For more on the {{domXref("Node.ownerDocument")}} issues, see the W3C DOM FAQ.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.adoptNode()")}}, which behaves very similar to this method
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
