---
title: Selection.focusNode
slug: Web/API/Selection/focusNode
page-type: web-api-instance-property
tags:
  - API
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.focusNode
---
{{ ApiRef("DOM") }}

The **`Selection.focusNode`** read-only property returns the
{{domxref("Node")}} in which the selection ends.

A user may make a selection from left to right (in document order) or right to left
(reverse of document order). The focus is where the user ended the selection. This can
be visualized by holding the <kbd>Shift</kbd> key and pressing the arrow keys on your
keyboard to modify the current selection. The selection's focus moves, but the
selection's anchor, the other end of the selection, does not move.

## Value

A {{domxref("Node")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
