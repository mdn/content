---
title: Selection.removeRange()
slug: Web/API/Selection/removeRange
tags:
  - API
  - Experimental
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.removeRange
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.removeRange()`** method removes a range from a
selection.

## Syntax

```js
sel.removeRange(range)
```

### Parameters

- _`range`_
  - : A range object that will be removed to the selection.

### Return value

{{jsxref('undefined')}}

## Examples

```js
/* Programmaticaly, more than one range can be selected.
 * This will remove all ranges except the first. */
s = window.getSelection();
if(s.rangeCount > 1) {
 for(var i = 1; i < s.rangeCount; i++) {
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
