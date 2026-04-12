---
title: "Selection: anchorNode property"
short-title: anchorNode
slug: Web/API/Selection/anchorNode
page-type: web-api-instance-property
browser-compat: api.Selection.anchorNode
---

{{ ApiRef("DOM") }}

The **`Selection.anchorNode`** read-only property returns the {{domxref("Node")}} in which the selection begins. It can return `null` if selection never existed in the document (e.g., an iframe that was never clicked on, or the node belongs to another document tree).

A user may make a selection from left to right (in document order) or right to left (reverse of document order). The anchor is where the user began the selection. This can be visualized by holding the <kbd>Shift</kbd> key and pressing the arrow keys on your keyboard. The selection's anchor does not move, but the selection's focus, the other end of the selection, does move.

## Value

A {{domxref("Node")}} object or `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
- {{domxref("Selection.focusNode")}}
