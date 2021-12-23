---
title: Selection.isCollapsed
slug: Web/API/Selection/isCollapsed
tags:
  - API
  - DOM
  - Experimental
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.isCollapsed
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.isCollapsed`** read-only property returns a
boolean value which indicates whether or not there is currently any text
selected. No text is selected when the selection's start and end points are at the same
position in the content.

Keep in mind that a collapsed selection may still have one (or more, in Gecko)
{{domxref("Range")}}s, so {{domxref("Selection.rangeCount")}} may not be zero. In that
scenario, calling a {{domxref("Selection")}} object's {{domxref("Selection.getRangeAt",
  "getRangeAt()")}} method may return a `Range` object which is collapsed.

## Syntax

```js
bool = sel.isCollapsed
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
- {{domxref("Range")}}
