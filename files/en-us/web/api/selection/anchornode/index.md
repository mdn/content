---
title: Selection.anchorNode
slug: Web/API/Selection/anchorNode
tags:
  - API
  - Experimental
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.anchorNode
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.anchorNode`** read-only property returns the
{{domxref("Node")}} in which the selection begins.

A user may make a selection from left to right (in document order) or right to left
(reverse of document order). The anchor is where the user began the selection. This can
be visualized by holding the Shift key and pressing the arrow keys on your keyboard. The
selection's anchor does not move, but the selection's focus, the other end of the
selection, does move.

## Syntax

```js
node = sel.anchorNode
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
