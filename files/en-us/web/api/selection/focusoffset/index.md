---
title: Selection.focusOffset
slug: Web/API/Selection/focusOffset
tags:
  - API
  - Experimental
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.focusOffset
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.focusOffset`** read-only property returns the
number of characters that the selection's focus is offset within the
{{domxref("Selection.focusNode")}}.

This number is zero-based. If the selection ends with the first character in the
{{domxref("Selection.focusNode")}}, `0` is returned.

## Syntax

```js
offset = sel.focusOffset
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
