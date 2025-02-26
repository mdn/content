---
title: Range
slug: Web/API/Range
page-type: web-api-interface
browser-compat: api.Range
---

{{APIRef("DOM")}}

The **`Range`** interface represents a fragment of a document that can contain nodes and parts of text nodes.

A range can be created by using the {{ domxref("Document.createRange()") }} method. Range objects can also be retrieved by using the {{ domxref("Selection/getRangeAt", "getRangeAt()") }} method of the {{ domxref("Selection") }} object or the {{domxref("Document/caretRangeFromPoint", "caretRangeFromPoint()")}} method of the {{domxref("Document")}} object.

There also is the {{domxref("Range.Range()", "Range()")}} constructor available.

{{InheritanceDiagram}}

## Instance properties

_There are no inherited properties._

- {{domxref("Range.collapsed")}} {{ReadOnlyInline}}
  - : Returns a boolean value indicating whether the range's start and end points are at the same position.
- {{domxref("Range.commonAncestorContainer")}} {{ReadOnlyInline}}
  - : Returns the deepest {{ domxref("Node") }} that contains the `startContainer` and `endContainer` nodes.
- {{domxref("Range.endContainer")}} {{ReadOnlyInline}}
  - : Returns the {{ domxref("Node") }} within which the `Range` ends.
- {{domxref("Range.endOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing where in the `endContainer` the `Range` ends.
- {{domxref("Range.startContainer")}} {{ReadOnlyInline}}
  - : Returns the {{ domxref("Node") }} within which the `Range` starts.
- {{domxref("Range.startOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing where in the `startContainer` the `Range` starts.

## Constructor

- {{ domxref("Range.Range()", "Range()") }}
  - : Returns a `Range` object with the global {{domxref("Document")}} as its start and end.

## Instance methods

_There are no inherited methods._

- {{ domxref("Range.collapse()")}}
  - : Collapses the `Range` to one of its boundary points.
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : Compares the boundary points of the `Range` with another `Range`.
- {{ domxref("Range.compareNode()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a constant representing whether the {{domxref("Node")}} is before, after, inside, or surrounding the range.
- {{ domxref("Range.comparePoint()")}}
  - : Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the `Range`.
- {{ domxref("Range.cloneContents()")}}
  - : Returns a {{ domxref("DocumentFragment") }} copying the nodes of a `Range`.
- {{ domxref("Range.cloneRange()")}}
  - : Returns a `Range` object with boundary points identical to the cloned `Range`.
- {{ domxref("Range.createContextualFragment()")}}
  - : Returns a {{ domxref("DocumentFragment") }} created from a given string of code.
- {{ domxref("Range.deleteContents()")}}
  - : Removes the contents of a `Range` from the {{ domxref("Document") }}.
- {{ domxref("Range.detach()")}}
  - : Does nothing. Kept for compatibility.
- {{ domxref("Range.extractContents()")}}
  - : Moves contents of a `Range` from the document tree into a {{ domxref("DocumentFragment") }}.
- {{ domxref("Range.getBoundingClientRect()") }}
  - : Returns a {{ domxref("DOMRect") }} object which bounds the entire contents of the `Range`; this would be the union of all the rectangles returned by {{ domxref("range.getClientRects()") }}.
- {{ domxref("Range.getClientRects()") }}
  - : Returns a list of {{ domxref("DOMRect") }} objects that aggregates the results of {{ domxref("Element.getClientRects()") }} for all the elements in the `Range`.
- {{ domxref("Range.isPointInRange()")}}
  - : Returns a `boolean` indicating whether the given point is in the `Range`.
- {{ domxref("Range.insertNode()")}}
  - : Insert a {{ domxref("Node") }} at the start of a `Range`.
- {{ domxref("Range.intersectsNode()")}}
  - : Returns a `boolean` indicating whether the given node intersects the `Range`.
- {{ domxref("Range.selectNode()")}}
  - : Sets the `Range` to contain the {{ domxref("Node") }} and its contents.
- {{ domxref("Range.selectNodeContents()")}}
  - : Sets the `Range` to contain the contents of a {{ domxref("Node") }}.
- {{ domxref("Range.setEnd()")}}
  - : Sets the end position of a `Range`.
- {{ domxref("Range.setStart()")}}
  - : Sets the start position of a `Range`.
- {{ domxref("Range.setEndAfter()")}}
  - : Sets the end position of a `Range` relative to another {{ domxref("Node") }}.
- {{ domxref("Range.setEndBefore()")}}
  - : Sets the end position of a `Range` relative to another {{ domxref("Node") }}.
- {{ domxref("Range.setStartAfter()")}}
  - : Sets the start position of a `Range` relative to another {{ domxref("Node") }}.
- {{ domxref("Range.setStartBefore()")}}
  - : Sets the start position of a `Range` relative to another {{ domxref("Node") }}.
- {{ domxref("Range.surroundContents()")}}
  - : Moves content of a `Range` into a new {{ domxref("Node") }}.
- {{ domxref("Range.toString()")}}
  - : Returns the text of the `Range`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
