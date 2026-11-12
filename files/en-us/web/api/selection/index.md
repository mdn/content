---
title: Selection
slug: Web/API/Selection
page-type: web-api-interface
browser-compat: api.Selection
---

{{APIRef("Selection API")}}

A **`Selection`** object represents the range of text selected by the user or the current position of the caret. Each {{domxref("document")}} is associated with a unique selection object, which can be retrieved by {{DOMxRef("document.getSelection()")}} or {{domxref("window.getSelection()")}} and then be examined and modified.

For general concepts related to selections, see [Selection API](/en-US/docs/Web/API/Selection_API).

## Instance properties

- {{DOMxRef("Selection.anchorNode")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Node")}} in which the selection begins. Can return `null` if selection never existed in the document (e.g., an iframe that was never clicked on).
- {{DOMxRef("Selection.anchorOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing the offset of the selection's anchor within the `anchorNode`. If `anchorNode` is a text node, this is the number of characters within anchorNode preceding the anchor. If `anchorNode` is an element, this is the number of child nodes of the `anchorNode` preceding the anchor.
- {{DOMxRef("Selection.direction")}} {{ReadOnlyInline}}
  - : A string describing the direction of the current selection.
- {{DOMxRef("Selection.focusNode")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Node")}} in which the selection ends. Can return `null` if selection never existed in the document (e.g., an iframe that was never clicked on).
- {{DOMxRef("Selection.focusOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing the offset of the selection's focus within the `focusNode`. If `focusNode` is a text node, this is the number of characters within `focusNode` preceding the focus. If `focusNode` is an element, this is the number of child nodes of the `focusNode` preceding the focus.
- {{DOMxRef("Selection.isCollapsed")}} {{ReadOnlyInline}}
  - : Returns a Boolean indicating whether the selection's start and end points are at the same position.
- {{DOMxRef("Selection.rangeCount")}} {{ReadOnlyInline}}
  - : Returns the number of ranges in the selection.
- {{DOMxRef("Selection.type")}} {{ReadOnlyInline}}
  - : Returns a string describing the type of the current selection.

## Instance methods

- {{DOMxRef("Selection.addRange()")}}
  - : A {{DOMxRef("Range")}} object that will be added to the selection.
- {{DOMxRef("Selection.collapse()")}}
  - : Collapses the current selection to a single point.
- {{DOMxRef("Selection.collapseToEnd()")}}
  - : Collapses the selection to the end of the last range in the selection.
- {{DOMxRef("Selection.collapseToStart()")}}
  - : Collapses the selection to the start of the first range in the selection.
- {{DOMxRef("Selection.containsNode()")}}
  - : Indicates if a certain node is part of the selection.
- {{DOMxRef("Selection.deleteFromDocument()")}}
  - : Deletes the selection's content from the document.
- {{DOMxRef("Selection.empty()")}}
  - : Removes all ranges from the selection, leaving the {{domxref("Selection.anchorNode", "anchorNode")}} and {{domxref("Selection.focusNode","focusNode")}} properties equal to `null` and nothing selected.
- {{DOMxRef("Selection.extend()")}}
  - : Moves the focus of the selection to a specified point.
- {{DOMxRef("Selection.getComposedRanges()")}}
  - : Returns an array of {{DOMxRef("StaticRange")}} objects, each that represents a selection that might cross shadow DOM boundaries.
- {{DOMxRef("Selection.getRangeAt()")}}
  - : Returns a {{DOMxRef("Range")}} object representing one of the ranges currently selected.
- {{DOMxRef("Selection.modify()")}}
  - : Changes the current selection.
- {{DOMxRef("Selection.removeRange()")}}
  - : Removes a range from the selection.
- {{DOMxRef("Selection.removeAllRanges()")}}
  - : Removes all ranges from the selection.
- {{DOMxRef("Selection.selectAllChildren()")}}
  - : Adds all the children of the specified node to the selection.
- {{DOMxRef("Selection.setBaseAndExtent()")}}
  - : Sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.
- {{DOMxRef("Selection.setPosition()")}}
  - : Collapses the current selection to a single point.
- {{DOMxRef("Selection.toString()")}}
  - : Returns a string currently being represented by the selection object, i.e., the currently selected text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- Selection-related events: {{domxref("Document/selectionchange_event", "selectionchange")}} and {{domxref("Node/selectstart_event", "selectstart")}}
- HTML inputs provide simpler helper APIs for working with selection (see {{DOMxRef("HTMLInputElement.setSelectionRange()")}})
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus")}}, and {{DOMxRef("HTMLElement.blur")}}
