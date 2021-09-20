---
title: Selection.getRangeAt()
slug: Web/API/Selection/getRangeAt
tags:
  - API
  - Experimental
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.getRangeAt
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.getRangeAt()`** method returns a range object
representing one of the ranges currently selected.

## Syntax

```js
range = sel.getRangeAt(index)
```

### Parameters

- `index`
  - : The zero-based index of the range to return. A negative number or a number greater
    than or equal to {{domxref("Selection.rangeCount")}} will result in an error.

### Return value

The specified {{domxref("Range")}} object.

## Example

```js
let ranges = [];

sel = window.getSelection();

for(let i = 0; i < sel.rangeCount; i++) {
 ranges[i] = sel.getRangeAt(i);
}
/* Each item in the ranges array is now
 * a range object representing one of the
 * ranges in the current selection */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
