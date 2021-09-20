---
title: Selection.anchorOffset
slug: Web/API/Selection/anchorOffset
tags:
  - API
  - Experimental
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.anchorOffset
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.anchorOffset`** read-only property returns the
number of characters that the selection's anchor is offset within the
{{domxref("Selection.anchorNode")}}.

This number is zero-based. If the selection begins with the first character in the
{{domxref("Selection.anchorNode")}}, `0` is returned.

## Syntax

```js
number = sel.anchorOffset
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
