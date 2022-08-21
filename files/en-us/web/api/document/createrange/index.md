---
title: Document.createRange()
slug: Web/API/Document/createRange
page-type: web-api-instance-method
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
createRange()
```

### Parameters

None.

### Return value

The created {{domxref("Range")}} object.

## Examples

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
