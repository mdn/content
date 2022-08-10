---
title: Selection.removeRange()
slug: Web/API/Selection/removeRange
page-type: web-api-instance-method
tags:
  - API
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.removeRange
---
{{ ApiRef("DOM") }}

The **`Selection.removeRange()`** method removes a range from a
selection.

## Syntax

```js
removeRange(range)
```

### Parameters

- `range`
  - : A range object that will be removed to the selection.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
/* Programmatically, more than one range can be selected.
 * This will remove all ranges except the first. */
const s = window.getSelection();
if (s.rangeCount > 1) {
 for (let i = 1; i < s.rangeCount; i++) {
  s.removeRange(s.getRangeAt(i));
 }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
