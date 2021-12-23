---
title: Document.createNodeIterator()
slug: Web/API/Document/createNodeIterator
tags:
  - API
  - DOM
  - Gecko
  - MakeBrowserAgnostic
  - Method
browser-compat: api.Document.createNodeIterator
---
{{APIRef("DOM")}}

Returns a new [`NodeIterator`](/en-US/docs/Web/API/NodeIterator) object.

## Syntax

```js
const nodeIterator = document.createNodeIterator(root[, whatToShow[, filter]]);
```

### Values

- `root`
  - : The root node at which to begin the {{ domxref("NodeIterator") }}'s traversal.
- `whatToShow` {{ optional_inline() }}

  - : Is an optional `unsigned long` representing a bitmask created by
    combining the constant properties of
    [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter).
    It is a convenient way of filtering for certain types of node. It defaults to
    `0xFFFFFFFF` representing the `SHOW_ALL` constant.

    | Constant                                                        | Numerical value                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
    | --------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                           | `-1` (that is the max value of `unsigned long`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                             | Shows attribute {{ domxref("Attr") }} nodes. This is meaningful only when creating a {{ domxref("TreeWalker") }} with an {{ domxref("Attr") }} node as its root. In this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                             | Shows {{ domxref("CDATASection") }} nodes.                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                                       | `128`                                           | Shows {{ domxref("Comment") }} nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT`                                      | `256`                                           | Shows {{ domxref("Document") }} nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                             | `1024`                                          | Shows {{ domxref("DocumentFragment") }} nodes.                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                 | `512`                                           | Shows {{ domxref("DocumentType") }} nodes.                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ELEMENT`                                       | `1`                                             | Shows {{ domxref("Element") }} nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                            | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                            | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                          | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                        | `64`                                            | Shows {{ domxref("ProcessingInstruction") }} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_TEXT`                                          | `4`                                             | Shows {{ domxref("Text") }} nodes.                                                                                                                                                                                                                                                                                                                                                                              |

- `filter` {{ optional_inline() }}
  - : An object implementing the {{ domxref("NodeFilter") }} interface. Its
    `acceptNode()` method will be called for each node in the subtree based at
    root which is accepted as included by the whatToShow flag to determine whether or not
    to include it in the list of iterable nodes (a simple callback function may also be
    used instead). The method should return one of `NodeFilter.FILTER_ACCEPT`,
    `NodeFilter.FILTER_REJECT`, or `NodeFilter.FILTER_SKIP`. See the
    {{ anch("Example") }}.

## Example

```js
const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }
);
const pars = [];
let currentNode;

while (currentNode = nodeIterator.nextNode()) {
  pars.push(currentNode);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
