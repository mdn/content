---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Document
  - Method
browser-compat: api.Document.createTreeWalker
---
{{ApiRef("Document")}}

The **`Document.createTreeWalker()`** creator method returns a
newly created {{domxref("TreeWalker")}} object.

## Syntax

```js
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Parameters

- `root`
  - : A root {{domxref("Node")}} of this {{domxref("TreeWalker")}} traversal. Typically
    this will be an element owned by the document.
- `whatToShow` {{optional_inline}}

  - : A `unsigned long` representing a bitmask created by combining the
    constant properties of
    [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter).
    It is a convenient way of filtering for certain types of node. It defaults to
    `0xFFFFFFFF` representing the `SHOW_ALL` constant.

    | Constant                                                        | Numerical value                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                |
    | --------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                           | `4294967295` (that is the max value of `unsigned long`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                             | Shows attribute {{domxref("Attr")}} nodes. This is meaningful only when creating a {{domxref("TreeWalker")}} with an {{domxref("Attr")}} node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                             | Shows {{domxref("CDATASection")}} nodes.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_COMMENT`                                       | `128`                                           | Shows {{domxref("Comment")}} nodes.                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT`                                      | `256`                                           | Shows {{domxref("Document")}} nodes.                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                             | `1024`                                          | Shows {{domxref("DocumentFragment")}} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                 | `512`                                           | Shows {{domxref("DocumentType")}} nodes.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ELEMENT`                                       | `1`                                             | Shows {{domxref("Element")}} nodes.                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                            | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                            | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                          | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                        | `64`                                            | Shows {{domxref("ProcessingInstruction")}} nodes.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_TEXT`                                          | `4`                                             | Shows {{domxref("Text")}} nodes.                                                                                                                                                                                                                                                                                                                                                                      |

- `filter` {{optional_inline}}
  - : A {{domxref("NodeFilter")}}, that is an object with a method
    `acceptNode`, which is called by the {{domxref("TreeWalker")}} to determine
    whether or not to accept a node that has passed the `whatToShow` check.

### Return value

A new {{domxref("TreeWalker")}} object.

## Examples

The following example goes through all nodes in the body,
filters out any non nodes that aren't elements (with the \`NodeFilter.SHOW_ELEMENT\` value),
marks each remaining node as acceptable (The `acceptNode()` method could make
a different decision.), and then makes use of tree walker iterator
that is created to advance through the nodes (now all elements) and push them into an
array.

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } }
);

const nodeList = [];
let currentNode = treeWalker.currentNode;

while(currentNode) {
  nodeList.push(currentNode);
  currentNode = treeWalker.nextNode();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface of the object it creates: {{domxref("TreeWalker")}}.
