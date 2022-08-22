---
title: NodeIterator
slug: Web/API/NodeIterator
page-type: web-api-interface
tags:
  - API
  - DOM
browser-compat: api.NodeIterator
---
{{APIRef("DOM")}}

The **`NodeIterator`** interface
represents an iterator over the members of a list of the nodes in a subtree of the
DOM. The nodes will be returned in document order.

## Syntax

A `NodeIterator` can be created using the
{{domxref("Document.createNodeIterator()")}} method, as follows:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Properties

_This interface doesn't inherit any property._

- {{domxref("NodeIterator.root")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Node")}} representing the root node as specified when the
    `NodeIterator` was created.
- {{domxref("NodeIterator.whatToShow")}} {{ReadOnlyInline}}

  - : Returns an `unsigned long` being a bitmask made of constants
    describing the types of {{domxref("Node")}} that must to be presented.
    Non-matching nodes are skipped, but their children may be included, if
    relevant.

    The possible values are:

    | Constant                                                        | Numerical value                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | --------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                           | `4294967295` (that is the max value of `unsigned long`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                             | Shows attribute {{ domxref("Attr") }} nodes. This is meaningful only when creating a {{ domxref("NodeIterator") }} with an {{ domxref("Attr") }} node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                             | Shows {{ domxref("CDATASection") }} nodes.                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_COMMENT`                                       | `128`                                           | Shows {{ domxref("Comment") }} nodes.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT`                                      | `256`                                           | Shows {{ domxref("Document") }} nodes.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                             | `1024`                                          | Shows {{ domxref("DocumentFragment") }} nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                 | `512`                                           | Shows {{ domxref("DocumentType") }} nodes.                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ELEMENT`                                       | `1`                                             | Shows {{ domxref("Element") }} nodes.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                            | Legacy, no more used.                                                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                            | Legacy, no more used.                                                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                          | Legacy, no more used.                                                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                        | `64`                                            | Shows {{domxref("ProcessingInstruction")}} nodes.                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_TEXT`                                          | `4`                                             | Shows {{domxref("Text") }} nodes.                                                                                                                                                                                                                                                                                                                                                                                          |

- {{domxref("NodeIterator.filter")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NodeFilter")}} used to select the relevant nodes.
- {{domxref("NodeIterator.referenceNode")}} {{ReadOnlyInline}}
  {{experimental_inline() }}
  - : Returns the {{domxref("Node")}} to which the iterator is anchored.
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{ReadOnlyInline}} {{
  experimental_inline() }}
  - : Returns a boolean flag that indicates whether the
    {{domxref("NodeIterator")}} is anchored before, the flag being `true`,
    or after, the flag being `false`, the anchor node.

## Methods

_This interface doesn't inherit any method._

- {{domxref("NodeIterator.detach()")}} {{deprecated_inline}}
  - : This operation is a no-op. It doesn't do anything. Previously it was telling the
    engine that the `NodeIterator` was no more used, but this is now
    useless.
- {{domxref("NodeIterator.previousNode()")}}
  - : Returns the previous {{domxref("Node")}} in the document, or `null` if
    there are none.
- {{domxref("NodeIterator.nextNode()")}}
  - : Returns the next {{domxref("Node")}} in the document, or `null` if
    there are none.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The creator method: {{domxref("Document.createNodeIterator()")}}.
- Related interfaces:

  - {{domxref("NodeFilter")}}
  - {{domxref("TreeWalker")}}
