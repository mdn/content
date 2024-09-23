---
title: "Selection: getRangeAt() method"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
page-type: web-api-instance-method
browser-compat: api.Selection.getRangeAt
---

{{ ApiRef("DOM") }}

The **`getRangeAt()`** method of the {{domxref("Selection")}} interface returns a range object representing a currently selected range.

If the endpoints of the selected range are within a {{glossary("shadow tree")}} then JavaScript does not have visibility of the shadow nodes, and the method should re-scope the range to include the host element that contains the end point.
In practice most browsers do not yet implement this behavior, and the returned range is unpredictable.

> [!NOTE]
> When selecting within nodes that might contain a shadow root, you can use {{domxref("Selection.getComposedRanges()")}} (if supported) to get a selection range inside a shadow tree, or to reliably re-scope the selection to the host node.

## Syntax

```js-nolint
getRangeAt(index)
```

### Parameters

- `index`
  - : The zero-based index of the range to return.
    A negative number or a number greater than or equal to {{domxref("Selection.rangeCount")}} will result in an error.

### Return value

The specified {{domxref("Range")}} object.

## Examples

```js
let ranges = [];

sel = window.getSelection();

for (let i = 0; i < sel.rangeCount; i++) {
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
