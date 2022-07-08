---
title: AbstractRange.endOffset
slug: Web/API/AbstractRange/endOffset
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.AbstractRange.endOffset
---
{{APIRef("DOM")}}

The **`endOffset`** property of the {{domxref("AbstractRange")}} interface returns the offset into the end node of the range's end position.

## Value

An integer value indicating the number of characters into the {{domxref("Node")}} indicated by {{domxref("AbstractRange.endContainer", "endContainer")}} at which the final character of the range is located.

## Example

```js
let endOffset = range.endOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
