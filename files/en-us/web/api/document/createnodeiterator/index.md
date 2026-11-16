---
title: "Document: createNodeIterator() method"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
page-type: web-api-instance-method
browser-compat: api.Document.createNodeIterator
---

{{APIRef("DOM")}}

The **`Document.createNodeIterator()`** method returns a new [`NodeIterator`](/en-US/docs/Web/API/NodeIterator) object.

## Syntax

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### Parameters

- `root`
  - : The root node at which to begin the {{ domxref("NodeIterator") }}'s traversal.

- `whatToShow` {{optional_inline}}
  - : An optional `unsigned long` representing a bitmask created by
    combining the constant properties of `NodeFilter`.
    It is a convenient way of filtering for certain types of node. It defaults to
    `0xFFFFFFFF` representing the `SHOW_ALL` constant.

    | Constant                                                 | Numerical value | Description                                       |
    | -------------------------------------------------------- | --------------- | ------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`    | Shows all nodes.                                  |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`           | Shows {{domxref("Attr")}} nodes.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`           | Shows {{domxref("CDATASection")}} nodes.          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`          | Shows {{domxref("Comment")}} nodes.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`         | Shows {{domxref("Document")}} nodes.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`         | Shows {{domxref("DocumentFragment")}} nodes.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`         | Shows {{domxref("DocumentType")}} nodes.          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`           | Shows {{domxref("Element")}} nodes.               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`          | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`          | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`         | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`          | Shows {{domxref("ProcessingInstruction")}} nodes. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`           | Shows {{domxref("Text")}} nodes.                  |

    > [!NOTE]
    > The `NodeFilter.SHOW_ATTRIBUTE` constant is only effective when the root is an attribute node. Since the parent of any `Attr` node is always `null`, {{DOMXref("TreeWalker.nextNode()")}} and {{DOMXref("TreeWalker.previousNode()")}} will never return an `Attr` node. To traverse `Attr` nodes, use {{DOMXref("Element.attributes")}} instead.

- `filter` {{optional_inline}}
  - : A callback function or an object with an `acceptNode()` method. The function or method will be called for each node in the subtree based at root which is accepted as included by the whatToShow flag to determine whether or not to include it in the list of iterable nodes. The method should return one of `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT`, or `NodeFilter.FILTER_SKIP`. See the [Example](#examples).

    For `createNodeIterator`, the values `NodeFilter.FILTER_REJECT` and `NodeFilter.FILTER_SKIP` are equivalent. This node will not be included in the list of iterable nodes, but its children will continue to be iterated over.

### Return value

A new [`NodeIterator`](/en-US/docs/Web/API/NodeIterator) object.

## Examples

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT,
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

The same, but using an object with an `acceptNode()` method:

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
