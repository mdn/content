---
title: Selection
slug: Web/API/Selection
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Selection
browser-compat: api.Selection
---
{{ApiRef("Selection API")}}

A **`Selection`** object represents the range of text selected by the user or the current position of the caret. To obtain a `Selection` object for examination or manipulation, call {{DOMxRef("window.getSelection()")}}.

A user may make a selection from left to right (in document order) or right to left (reverse of document order). The **_anchor_** is where the user began the selection and the **_focus_** is where the user ends the selection. If you make a selection with a desktop mouse, the anchor is placed where you pressed the mouse button, and the focus is placed where you released the mouse button.

> **Note:** _Anchor_ and _focus_ should not be confused with the _start_ and _end_ positions of a selection. The anchor can be placed before the focus or vice-versa, depending on the direction you made your selection.

## Properties

- {{DOMxRef("Selection.anchorNode")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Node")}} in which the selection begins. Can return `null` if selection never existed in the document (e.g., an iframe that was never clicked on).
- {{DOMxRef("Selection.anchorOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing the offset of the selection's anchor within the `anchorNode`. If `anchorNode` is a text node, this is the number of characters within anchorNode preceding the anchor. If `anchorNode` is an element, this is the number of child nodes of the `anchorNode` preceding the anchor.
- {{DOMxRef("Selection.focusNode")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Node")}} in which the selection ends. Can return `null` if selection never existed in the document (for example, in an `iframe` that was never clicked on).
- {{DOMxRef("Selection.focusOffset")}} {{ReadOnlyInline}}
  - : Returns a number representing the offset of the selection's anchor within the `focusNode`. If `focusNode` is a text node, this is the number of characters within `focusNode` preceding the focus. If `focusNode` is an element, this is the number of child nodes of the `focusNode` preceding the focus.
- {{DOMxRef("Selection.isCollapsed")}} {{ReadOnlyInline}}
  - : Returns a Boolean indicating whether the selection's start and end points are at the same position.
- {{DOMxRef("Selection.rangeCount")}} {{ReadOnlyInline}}
  - : Returns the number of ranges in the selection.
- {{DOMxRef("Selection.type")}} {{ReadOnlyInline}}
  - : Returns a string describing the type of the current selection.

## Methods

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
- {{DOMxRef("Selection.extend()")}}
  - : Moves the focus of the selection to a specified point.
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
- {{DOMxRef("Selection.toString()")}}
  - : Returns a string currently being represented by the selection object, i.e. the currently selected text.

## Notes

### String representation of a selection

Calling the {{DOMxRef("Selection.toString()")}} method returns the text contained within the selection, e.g.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Note that using a selection object as the argument to `window.alert` will call the object's `toString` method.

### Multiple ranges in a selection

A selection object represents the {{DOMxRef("Range")}}s that the user has selected. Typically, it holds only one range, accessed as follows:

```js
const selObj = window.getSelection();
const range  = selObj.getRangeAt(0);
```

- `selObj` is a Selection object
- `range` is a {{DOMxRef("Range")}} object

As the [Selection API specification notes](https://www.w3.org/TR/selection-api/#h_note_15), the Selection API was initially created by Netscape and allowed multiple ranges (for instance, to allow the user to select a column from a {{HTMLElement("table")}}). However, browsers other than Gecko did not implement multiple ranges, and the specification also requires the selection to always have a single range.

### Selection and input focus

Selection and input focus (indicated by {{DOMxRef("Document.activeElement")}}) have a complex relationship that varies by browser. In cross-browser compatible code, it's better to handle them separately.

Safari and Chrome (unlike Firefox) currently focus the element containing selection when modifying the selection programmatically; it's possible that this may change in the future (see [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) and {{WebKitBug("38696")}}).

### Behavior of Selection API in terms of editing host focus changes

The Selection API has a common behavior (i.e., shared between browsers) that governs how focus behavior changes for _editing hosts_ after certain methods are called.

The behavior is as follows:

1. An editing host gains focus if the previous selection was outside of it.
2. A Selection API method is called, causing a new selection to be made with the selection range inside the editing host.
3. Focus then moves to the editing host.

> **Note:** The Selection API methods may only move focus to an editing host, not to other focusable elements (e.g., {{HTMLElement("a")}}).

The above behavior applies to selections made using the following methods:

- {{DOMxRef("Selection.collapse()")}}
- {{DOMxRef("Selection.collapseToStart()")}}
- {{DOMxRef("Selection.collapseToEnd()")}}
- {{DOMxRef("Selection.extend()")}}
- {{DOMxRef("Selection.selectAllChildren()")}}
- {{DOMxRef("Selection.addRange()")}}
- {{DOMxRef("Selection.setBaseAndExtent()")}}

And when the {{DOMxRef("Range")}} is modified using the following methods:

- {{DOMxRef("Range.setStart()")}}
- {{DOMxRef("Range.setEnd()")}}
- {{DOMxRef("Range.setStartBefore()")}}
- {{DOMxRef("Range.setStartAfter()")}}
- {{DOMxRef("Range.setEndBefore()")}}
- {{DOMxRef("Range.setEndAfter()")}}
- {{DOMxRef("Range.collapse()")}}
- {{DOMxRef("Range.selectNode()")}}
- {{DOMxRef("Range.selectNodeContents()")}}

### Glossary

Other key terms used in this section.

- `anchor`
  - : The anchor of a selection is the beginning point of the selection. When making a selection with a mouse, the anchor is where in the document the mouse button is initially pressed. As the user changes the selection using the mouse or the keyboard, the anchor does not move.
- `editing host`
  - : An editable element (e.g., an HTML element with {{htmlattrxref("contenteditable")}} set, or the HTML child of a document that has {{DOMxRef("Document.designMode", "designMode")}} enabled).
- `focus of a selection`

  - : The _focus_ of a selection is the end point of the selection. When making a selection with a mouse, the focus is where in the document the mouse button is released. As the user changes the selection using the mouse or the keyboard, the focus is the end of the selection that moves.

    > **Note:** This is not the same as the focused _element_ of the document, as returned by {{DOMxRef("document.activeElement")}}.

- `range`

  - : A _range_ is a contiguous part of a document. A range can contain entire nodes as well as portions of nodes (such as a portion of a text node). A user will normally only select a single range at a time, but it's possible for a user to select multiple ranges (e.g., by using the <kbd>Control</kbd> key). A range can be retrieved from a selection as a {{DOMxRef("range")}} object. Range objects can also be created via the DOM and programmatically added or removed from a selection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- Selection-related events: {{domxref("Document/selectionchange_event", "selectionchange")}} and {{domxref("Document/selectstart_event", "selectstart")}}
- HTML inputs provide simpler helper APIs for working with selection (see {{DOMxRef("HTMLInputElement.setSelectionRange()")}})
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus")}}, and {{DOMxRef("HTMLElement.blur")}}
