---
title: "Node: compareDocumentPosition() method"
short-title: compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
page-type: web-api-instance-method
browser-compat: api.Node.compareDocumentPosition
---

{{APIRef("DOM")}}

The **`compareDocumentPosition()`** method of the {{domxref("Node")}} interface
reports the position of its argument node relative to the node on which it is called.

## Syntax

```js-nolint
compareDocumentPosition(otherNode)
```

### Parameters

- `otherNode`
  - : The {{domxref("Node")}} for which position should be reported, relative to the node.

### Return value

An integer value representing `otherNode`'s position relative to `node`
as a [bitmask](<https://en.wikipedia.org/wiki/Mask_(computing)>) combining the
following constant properties of {{domxref("Node")}}:

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Both nodes are in different documents or different trees in the same document.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` precedes the node in either a [pre-order depth-first traversal](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of a tree containing both (e.g., as an ancestor or previous sibling or a descendant of a previous sibling or previous sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` follows the node in either a [pre-order depth-first traversal](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of a tree containing both (e.g., as a descendant or following sibling or a descendant of a following sibling or following sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` is an ancestor of the node.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` is a descendant of the node.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : The result relies upon arbitrary and/or implementation-specific behavior and is not guaranteed to be portable.

Zero or more bits can be set, depending on which scenarios apply. For example, if
`otherNode` is located earlier in the document **_and_**
contains the node on which `compareDocumentPosition()` was
called, then both the `DOCUMENT_POSITION_CONTAINS` and
`DOCUMENT_POSITION_PRECEDING` bits would be set, producing a value of `10` (`0x0A`).

## Example

```js
const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log("Well-formed document");
} else {
  console.error("<head> is not before <body>");
}
```

> [!NOTE]
> Because the result returned by `compareDocumentPosition()` is a bitmask,
> the [bitwise AND operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
> must be used for meaningful results.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Node.contains()")}}
