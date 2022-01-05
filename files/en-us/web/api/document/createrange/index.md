---
title: Document.createRange()
slug: Web/API/Document/createRange
tags:
  - API
  - DOM
  - DOM Reference
  - Document
  - DocumentRange.createRange
  - Method
  - Range
browser-compat: api.Document.createRange
---
{{APIRef("DOM")}}

The **`Document.createRange()`** method returns a new
{{domxref("Range")}} object.

## Syntax

```js
range = document.createRange();
```

_range_ is the created {{domxref("Range")}} object.

## Example

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Notes

Once a `Range` is created, you need to set its boundary points before you
can make use of most of its methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
