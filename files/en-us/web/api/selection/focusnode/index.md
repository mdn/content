---
title: "Selection: focusNode property"
short-title: focusNode
slug: Web/API/Selection/focusNode
page-type: web-api-instance-property
browser-compat: api.Selection.focusNode
---

{{ ApiRef("DOM") }}

The **`Selection.focusNode`** read-only property returns the {{domxref("Node")}} in which the selection ends. It can return `null` if selection never existed in the document (e.g., an iframe that was never clicked on, or the node belongs to another document tree).

A user may make a selection from left to right (in document order) or right to left (reverse of document order). The focus is where the user ended the selection. This can be visualized by holding the <kbd>Shift</kbd> key and pressing the arrow keys on your keyboard. The selection's focus moves, but the selection's anchor, the other end of the selection, does not move.

## Value

A {{domxref("Node")}} object or `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
- {{domxref("Selection.anchorNode")}}
