---
title: NodeIterator
slug: Web/API/NodeIterator
page-type: web-api-interface
browser-compat: api.NodeIterator
---

{{APIRef("DOM")}}

The **`NodeIterator`** interface represents an iterator to traverse nodes of a DOM subtree in document order.

A `NodeIterator` can be created using the {{domxref("Document.createNodeIterator()")}} method, as follows:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instance properties

_This interface doesn't inherit any property._

- {{domxref("NodeIterator.root")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Node")}} representing the root node, as specified when the
    `NodeIterator` was created.
- {{domxref("NodeIterator.whatToShow")}} {{ReadOnlyInline}}
  - : Returns an `unsigned long` bitmask that describes the types of {{domxref("Node")}}
    to be matched. Non-matching nodes are skipped, but relevant child nodes may be included.
- {{domxref("NodeIterator.filter")}} {{ReadOnlyInline}}
  - : Returns a `NodeFilter` used to select the relevant nodes.
- {{domxref("NodeIterator.referenceNode")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Node")}} to which the iterator is anchored.
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether or not the `NodeIterator` is anchored _before_ the {{domxref("NodeIterator.referenceNode")}}. If `false`, it indicates that the iterator is anchored _after_ the reference node.

## Instance methods

_This interface doesn't inherit any method._

- {{domxref("NodeIterator.detach()")}} {{deprecated_inline}}
  - : This is a legacy method, and no longer has any effect. Previously it served to mark a
    `NodeIterator` as disposed, so it could be reclaimed by garbage collection.
- {{domxref("NodeIterator.previousNode()")}}
  - : Returns the previous {{domxref("Node")}} in the document, or `null` if there are none.
- {{domxref("NodeIterator.nextNode()")}}
  - : Returns the next {{domxref("Node")}} in the document, or `null` if there are none.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The creator method: {{domxref("Document.createNodeIterator()")}}.
- Related interface: {{domxref("TreeWalker")}}
